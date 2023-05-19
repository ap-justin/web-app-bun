/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAccountDeployContract,
  IAccountDeployContractInterface,
} from "../../../../../contracts/core/accounts/interfaces/IAccountDeployContract";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "id",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "quorum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votingPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timelockPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proposalDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "snapshotPeriod",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "enum AngelCoreStruct.TokenType",
                name: "token",
                type: "uint8",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "existingCw20Data",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "newCw20InitialSupply",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "newCw20Name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "newCw20Symbol",
                    type: "string",
                  },
                  {
                    components: [
                      {
                        internalType: "enum AngelCoreStruct.veTypeEnum",
                        name: "ve_type",
                        type: "uint8",
                      },
                      {
                        components: [
                          {
                            internalType: "uint128",
                            name: "value",
                            type: "uint128",
                          },
                          {
                            internalType: "uint256",
                            name: "scale",
                            type: "uint256",
                          },
                          {
                            internalType: "uint128",
                            name: "slope",
                            type: "uint128",
                          },
                          {
                            internalType: "uint128",
                            name: "power",
                            type: "uint128",
                          },
                        ],
                        internalType: "struct AngelCoreStruct.veTypeData",
                        name: "data",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct AngelCoreStruct.veType",
                    name: "bondingveveType",
                    type: "tuple",
                  },
                  {
                    internalType: "string",
                    name: "bondingveName",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "bondingveSymbol",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "bondingveDecimals",
                    type: "uint256",
                  },
                  {
                    internalType: "address",
                    name: "bondingveReserveDenom",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "bondingveReserveDecimals",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "bondingveUnbondingPeriod",
                    type: "uint256",
                  },
                ],
                internalType: "struct AngelCoreStruct.DaoTokenData",
                name: "data",
                type: "tuple",
              },
            ],
            internalType: "struct AngelCoreStruct.DaoToken",
            name: "token",
            type: "tuple",
          },
          {
            internalType: "enum AngelCoreStruct.EndowmentType",
            name: "endow_type",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "endowOwner",
            type: "address",
          },
          {
            internalType: "address",
            name: "registrarContract",
            type: "address",
          },
        ],
        internalType: "struct subDaoMessage.InstantiateMsg",
        name: "createdaomessage",
        type: "tuple",
      },
    ],
    name: "createDaoContract",
    outputs: [
      {
        internalType: "address",
        name: "daoAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IAccountDeployContract__factory {
  static readonly abi = _abi;
  static createInterface(): IAccountDeployContractInterface {
    return new utils.Interface(_abi) as IAccountDeployContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccountDeployContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAccountDeployContract;
  }
}
