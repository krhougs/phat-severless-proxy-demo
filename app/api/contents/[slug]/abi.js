const abi = {
  "source": {
    "hash": "0x6e2eac8b213e8d050b408434d1ac64e5930887217aebf03d7f5553cfa7b980f6",
    "language": "ink! 4.2.1",
    "compiler": "rustc 1.69.0",
    "build_info": {
      "build_mode": "Debug",
      "cargo_contract_version": "3.0.1",
      "rust_toolchain": "stable-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "phat_hello",
    "version": "0.1.0",
    "authors": [
      "Jiacheng Zhang"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [],
        "default": false,
        "docs": [
          "Constructor to initializes your contract"
        ],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 5
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 1
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 0
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 13
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 14
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 11
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 12
      }
    },
    "events": [],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 7
    },
    "messages": [
      {
        "args": [
          {
            "label": "key",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "get_content",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x6e276877"
      },
      {
        "args": [
          {
            "label": "key",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 4
            }
          },
          {
            "label": "content",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "set_content",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x2f9d4c13"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "count"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xca4a7520",
                              "ty": 1
                            }
                          },
                          "name": "0"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xca4a7520",
                              "ty": 4
                            }
                          },
                          "name": "1"
                        }
                      ],
                      "name": "(A, B)"
                    }
                  },
                  "root_key": "0xca4a7520"
                }
              },
              "name": "content_map"
            }
          ],
          "name": "PhatHello"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 3
          }
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "str"
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 6
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 9
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "KeyNotFound"
              },
              {
                "index": 1,
                "name": "KeyExists"
              },
              {
                "index": 2,
                "name": "NotOwner"
              }
            ]
          }
        },
        "path": [
          "phat_hello",
          "phat_hello",
          "Error"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "pink_extension",
          "chain_extension",
          "PinkExt"
        ]
      }
    }
  ],
  "version": "4"
}
export default abi
