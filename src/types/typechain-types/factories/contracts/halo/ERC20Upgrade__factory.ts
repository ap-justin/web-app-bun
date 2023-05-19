/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Upgrade,
  ERC20UpgradeInterface,
} from "../../../contracts/halo/ERC20Upgrade";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Snapshot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "snapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100c1576000549060ff8260081c1661006f575060ff80821610610034575b6040516118b690816100c78239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610025565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816306fdde0314610cf857508063095ea7b314610cd257806318160ddd14610cb457806323b872dd14610c7c578063313ce56714610c605780633950935114610c0f5780633f4ba83a14610b7b57806340c10f1914610a9857806342966c6814610a7b5780634ee2cd7e14610a185780635c975abb146109f557806370a08231146109bb578063715018a61461095e57806379cc67901461092e5780638129fc1c146104cd5780638456cb59146104735780638da5cb5b1461044a57806395d89b411461036c5780639711715a1461031d578063981b24d0146102e4578063a457c2d71461023d578063a9059cbb1461020c578063dd62ed3e146101bb5763f2fde38b1461012757600080fd5b346101b65760203660031901126101b657610140610dd2565b610148610dfe565b6001600160a01b038116156101625761016090610e56565b005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b600080fd5b346101b65760403660031901126101b6576101d4610dd2565b6101dc610de8565b9060018060a01b038091166000526034602052604060002091166000526020526020604060002054604051908152f35b346101b65760403660031901126101b657610232610228610dd2565b6024359033610f3a565b602060405160018152f35b346101b65760403660031901126101b657610256610dd2565b60243590336000526034602052604060002060018060a01b0382166000526020526040600020549180831061029157610232920390336110bd565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608490fd5b346101b65760203660031901126101b657610300600435611414565b9015610312576020905b604051908152f35b50602060355461030a565b346101b65760003660031901126101b657610336610dfe565b7f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb6760206001609a540180609a55604051908152a1005b346101b65760003660031901126101b657604051600060375461038e81610e9f565b8084529060019081811690811561042357506001146103c8575b6103c4846103b881860382610ef5565b60405191829182610d89565b0390f35b6037600090815292507f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae5b82841061040b5750505081016020016103b8826103a8565b805460208587018101919091529093019281016103f3565b60ff191660208087019190915292151560051b850190920192506103b891508390506103a8565b346101b65760003660031901126101b65760c9546040516001600160a01b039091168152602090f35b346101b65760003660031901126101b65761048c610dfe565b6104946116e6565b600160ff1960fb54161760fb557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b346101b65760003660031901126101b65760005460ff8160081c1615808091610921575b801561090a575b156108ae5760ff19828116600117600055918161089c575b506040519161051e83610ed9565b600c83526b45524332305570677261646560a01b60208401526040519161054483610ed9565b600783526645524348616c6f60c81b602084015261057260ff60005460081c1661056d81611686565b611686565b835167ffffffffffffffff811161079c5761058e603654610e9f565b601f811161082f575b50602094601f82116001146107bd579481929394956000926107b2575b50508160011b916000199060031b1c1916176036555b825167ffffffffffffffff811161079c576105e6603754610e9f565b601f8111610737575b506020601f82116001146106b357819293946000926106a8575b50508160011b916000199060031b1c1916176037555b61064660ff60005460081c1661063481611686565b61063d81611686565b61056d81611686565b61064f33610e56565b6000549161066660ff8460081c1661056d81611686565b60fb541660fb5561067357005b61ff0019166000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160018152a1005b015190508480610609565b601f1982169060376000527f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae9160005b81811061071f57509583600195969710610706575b505050811b0160375561061f565b015160001960f88460031b161c191690558480806106f8565b9192602060018192868b0151815501940192016106e3565b60376000527f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae601f830160051c81019160208410610792575b601f0160051c01905b81811061078657506105ef565b60008155600101610779565b9091508190610770565b634e487b7160e01b600052604160045260246000fd5b0151905085806105b4565b601f1982169560366000526000805160206118618339815191529160005b888110610817575083600195969798106107fe575b505050811b016036556105ca565b015160001960f88460031b161c191690558580806107f0565b919260206001819286850151815501940192016107db565b6036600052601f820160051c600080516020611861833981519152019060208310610886575b601f0160051c60008051602061186183398151915201905b81811061087a5750610597565b6000815560010161086d565b6000805160206118618339815191529150610855565b61ffff19166101011760005582610510565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156104f85750600160ff8316146104f8565b50600160ff8316106104f1565b346101b65760403660031901126101b65761016061094a610dd2565b602435906109598233836111bf565b611257565b346101b65760003660031901126101b657610977610dfe565b60c980546001600160a01b031981169091556000906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346101b65760203660031901126101b6576001600160a01b036109dc610dd2565b1660005260336020526020604060002054604051908152f35b346101b65760003660031901126101b657602060ff60fb54166040519015158152f35b346101b65760403660031901126101b6576001600160a01b03610a39610dd2565b16806000526097602052610a5360406000206024356114d8565b9015610a655760209150604051908152f35b506000526033602052602060406000205461030a565b346101b65760203660031901126101b65761016060043533611257565b346101b65760403660031901126101b657610ab1610dd2565b60243590610abd610dfe565b6001600160a01b038116918215610b365760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91610b05600094610b006116e6565b61172a565b610b0d611779565b610b1981603554610f17565b6035558484526033825260408420818154019055604051908152a3005b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b346101b65760003660031901126101b657610b94610dfe565b60fb5460ff811615610bd35760ff191660fb557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b346101b65760403660031901126101b657610232610c2b610dd2565b336000526034602052604060002060018060a01b038216600052602052610c59602435604060002054610f17565b90336110bd565b346101b65760003660031901126101b657602060405160128152f35b346101b65760603660031901126101b657610232610c98610dd2565b610ca0610de8565b60443591610caf8333836111bf565b610f3a565b346101b65760003660031901126101b6576020603554604051908152f35b346101b65760403660031901126101b657610232610cee610dd2565b60243590336110bd565b346101b65760003660031901126101b6576000603654610d1781610e9f565b808452906001908181169081156104235750600114610d40576103c4846103b881860382610ef5565b6036600090815292506000805160206118618339815191525b828410610d715750505081016020016103b8826103a8565b80546020858701810191909152909301928101610d59565b6020808252825181830181905290939260005b828110610dbe57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610d9c565b600435906001600160a01b03821682036101b657565b602435906001600160a01b03821682036101b657565b60c9546001600160a01b03163303610e1257565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60c980546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b90600182811c92168015610ecf575b6020831014610eb957565b634e487b7160e01b600052602260045260246000fd5b91607f1691610eae565b6040810190811067ffffffffffffffff82111761079c57604052565b90601f8019910116810190811067ffffffffffffffff82111761079c57604052565b91908201809211610f2457565b634e487b7160e01b600052601160045260246000fd5b90916001600160a01b038083169290831561106a57841693841561101957610b00610f6792610b006116e6565b60008281526033602052604081205491808310610fc557604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef95876020965260338652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0390811691821561116e571691821561111e5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260348252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9060018060a01b03808316600052603460205260406000209082166000526020526040600020549260001984036111f7575b50505050565b808410611212576112099303916110bd565b388080806111f1565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b6001600160a01b0381169081156113295761127490610b006116e6565b61127c611779565b806000526033602052604060002054918083106112d9576020817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92600095858752603384520360408620558060355403603555604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b6099548110156113af5760996000527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000190600090565b634e487b7160e01b600052603260045260246000fd5b6098548110156113af5760986000527f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d8140190600090565b80548210156113af5760005260206000200190600090565b801561149a57609a5481116114555761142c9061150f565b609854810361143e5750600090600090565b61144790611378565b90549060031b1c9060019190565b60405162461bcd60e51b815260206004820152601d60248201527f4552433230536e617073686f743a206e6f6e6578697374656e742069640000006044820152606490fd5b60405162461bcd60e51b815260206004820152601660248201527504552433230536e617073686f743a20696420697320360541b6044820152606490fd5b801561149a57609a548111611455576114f190826115ec565b81548103611503575050600090600090565b600161144792016113fc565b609880549182156115e4576000925b80841061158657508215159182611549575b505015611546576000198101908111610f245790565b90565b90915082600019810111610f24576000527f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d813820154143880611530565b600190611599818618831c828716610f17565b918460005283837f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d8140154116000146115d257505061151e565b9094508101809111610f24579261151e565b505050600090565b80549182156115e4576000925b8084106116445750821515918261162057505015611546576000198101908111610f245790565b909150600019908382810111610f2457600052826020600020010154143880611530565b600190611657818618831c828716610f17565b9184600052838360206000200154116000146116745750506115f9565b9094508101809111610f2457926115f9565b1561168d57565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b60ff60fb54166116f257565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b60018060a01b0316600052609760205260406000206033602052604060002054609a54806117578461183d565b1061176157505050565b82611771600192611777956117ed565b016117ed565b565b603554609a549081611789611810565b10611792575050565b609854600160401b928382101561079c576117b68260016117cf94016098556113c5565b90919082549060031b91821b91600019901b1916179055565b6099549182101561079c576117b68260016117779401609955611378565b90815491600160401b83101561079c57826117b6916001611777950181556113fc565b6098548061181e5750600090565b6000198101908111610f2457611833906113c5565b90549060031b1c90565b80548061184b575050600090565b6000198101908111610f2457611833916113fc56fe4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b8a2646970667358221220b94c5f62fd7eb501b199ea2883b9dae44130a8412c3155d9d437d50150371a3264736f6c63430008120033";

type ERC20UpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20UpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Upgrade__factory extends ContractFactory {
  constructor(...args: ERC20UpgradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Upgrade> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgrade>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Upgrade {
    return super.attach(address) as ERC20Upgrade;
  }
  override connect(signer: Signer): ERC20Upgrade__factory {
    return super.connect(signer) as ERC20Upgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeInterface {
    return new utils.Interface(_abi) as ERC20UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgrade {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgrade;
  }
}
