import { NextResponse } from 'next/server'
import { ApiPromise, HttpProvider, WsProvider, Keyring } from '@polkadot/api'
import { options, OnChainRegistry, signCertificate, PinkContractPromise } from '@phala/sdk';
import { cryptoWaitReady } from '@polkadot/util-crypto'
import abi from './abi';
import * as isUri from 'isuri';

const RPC_TESTNET_URL = 'https://poc5.phala.network/ws'
const CONTRACT_ID = '0x11cd8e45a89eb508c21edc505c95a61b496a453c76966736c64345fd572cab1d'

let ctx

async function getAppCtx() {
  if (ctx) { return ctx }
  await cryptoWaitReady()
  const keyring = new Keyring({ type: 'sr25519' })
  const pair = keyring.addFromUri('//Alice')

  const api = await ApiPromise.create(options({
    provider: new HttpProvider(RPC_TESTNET_URL),
    noInitWarn: true,
  }))
  const phatRegistry = await OnChainRegistry.create(api)
  const contractKey = await phatRegistry.getContractKeyOrFail(CONTRACT_ID);
  const contract = new PinkContractPromise(api, phatRegistry, abi, CONTRACT_ID, contractKey);
  const cert = await signCertificate({ api, pair });

  ctx = { api, phatRegistry, contract, cert, pair, keyring }
  return ctx
}

export async function GET(request, { params }) {
  const { slug } = params
  const { contract, pair, cert } = await getAppCtx()
  const { output } = await contract.query.getContent(pair.address, { cert }, slug)

  const outputJson = output?.toJSON?.();

  if (!outputJson?.ok) {
    return new NextResponse("Bad Request", { status: 400 })
  }

  if (outputJson.ok?.err === 'KeyNotFound') {
    return new NextResponse("Not Found", { status: 404 })
  }

  const content = outputJson.ok.ok
  const query = request.nextUrl.search

  if (query === '?proxy' && isUri.isValid(content)) {
    try {
      const req = await fetch(content)
      return new NextResponse(
        await req.arrayBuffer(),
        {
          status: 200,
        }
      )
    } catch (error) {
      return new NextResponse(
        content,
        {
          status: 200,
        }
      )
    }

  } else {
    return new NextResponse(
      content,
      {
        status: 200,
      }
    )
  }
}