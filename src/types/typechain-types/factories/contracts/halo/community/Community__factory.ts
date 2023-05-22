/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Community,
  CommunityInterface,
} from "../../../../contracts/halo/community/Community";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "timelockContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "haloToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "spendLimit",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct CommunityStorage.Config",
        name: "config",
        type: "tuple",
      },
    ],
    name: "CommunityConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CommunitySpend",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "timelockContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "haloToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "spendLimit",
            type: "uint256",
          },
        ],
        internalType: "struct CommunityMessage.InstantiateMsg",
        name: "details",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "queryConfig",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "timelockContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "haloToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "spendLimit",
            type: "uint256",
          },
        ],
        internalType: "struct CommunityMessage.ConfigResponse",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "spend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spendLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "timelockContract",
        type: "address",
      },
    ],
    name: "updateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001b5760016004556106e190816100218239f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c90816307a582d8146104f3578163af7d6ca3146102a7578163b5787d50146100c1575063e68f909d1461004f57600080fd5b346100bd57816003193601126100bd579081818160609451610070816105c6565b828152826020820152015260018060a01b03809254169160025490806001541683805161009c816105c6565b86815260208101928352019283528351948552511660208401525190820152f35b5080fd5b9050346102a35760603660031901126102a35781516100df816105c6565b6100e76105b0565b81526100f1610595565b906020810191825283810190604435825260035460ff8160081c161594858096610296575b801561027f575b15610225575060ff19811660011760035584610213575b5060018060a01b038091511691519251169082858051610153816105c6565b83815284602082015201526bffffffffffffffffffffffff60a01b908187541617865560015416176001556002557f3875b0534f85cd38d3e5bf0c1941481349e50e8133c1a86132903bd3cebadeac8251806101d08190606082019160018060a01b03806000541682526001541660208201526040600254910152565b0390a16101db575080f35b60207f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989161ff0019600354166003555160018152a180f35b61ffff19166101011760035538610134565b608490602088519162461bcd60e51b8352820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152fd5b50303b15801561011d5750600160ff83161461011d565b50600160ff831610610116565b8280fd5b919050346102a357806003193601126102a3576102c26105b0565b602435916102ce610655565b84546001600160a01b03906102e6908216331461061a565b83600254106104a557600154168151906370a0823160e01b825230868301526020918281602481855afa90811561049b57889161046a575b50851161043257825163a9059cbb60e01b81526001600160a01b038516818801908152602081018790529091839183919082908b90829060400103925af19081156104285787916103ee575b50156103ba5750516001600160a01b0390911681526020810191909152600191907f0f75c7163201c7cbd8651ed9076030a09dbbd4c6b1a7ff86b700508a2bfe8dcf9080604081015b0390a15580f35b8490606492519162461bcd60e51b8352820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152fd5b90508181813d8311610421575b61040581836105f8565b8101031261041d5751801515810361041d573861036a565b8680fd5b503d6103fb565b83513d89823e3d90fd5b825162461bcd60e51b815280870183905260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152606490fd5b90508281813d8311610494575b61048181836105f8565b8101031261049057513861031e565b8780fd5b503d610477565b84513d8a823e3d90fd5b815162461bcd60e51b8152602081870152602260248201527f43616e6e6f74207370656e64206d6f7265207468616e207370656e64206c696d6044820152611a5d60f21b6064820152608490fd5b9050346102a357816003193601126102a3577f3875b0534f85cd38d3e5bf0c1941481349e50e8133c1a86132903bd3cebadeac600192610531610595565b610539610655565b855490858060a01b0390610550338385161461061a565b6001600160a01b031990921691161785558235600281905590516000546001600160a01b039081168252600154166020820152604081019190915280606081016103b3565b602435906001600160a01b03821682036105ab57565b600080fd5b600435906001600160a01b03821682036105ab57565b6060810190811067ffffffffffffffff8211176105e257604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176105e257604052565b1561062157565b60405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b6044820152606490fd5b600260045414610666576002600455565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfea2646970667358221220009cb551d5d6b4078e427737d0e052de5987490d84a4e6ea0967ee77d22a9a4a64736f6c63430008120033";

type CommunityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CommunityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Community__factory extends ContractFactory {
  constructor(...args: CommunityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Community> {
    return super.deploy(overrides || {}) as Promise<Community>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Community {
    return super.attach(address) as Community;
  }
  override connect(signer: Signer): Community__factory {
    return super.connect(signer) as Community__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CommunityInterface {
    return new utils.Interface(_abi) as CommunityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Community {
    return new Contract(address, _abi, signerOrProvider) as Community;
  }
}
