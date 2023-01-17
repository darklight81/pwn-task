/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Basic1155, Basic1155Interface } from "../Basic1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620035db380380620035db833981810160405281019062000037919062000248565b8062000049816200010260201b60201c565b5060006200005c6200011e60201b60201c565b905080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050620003fd565b80600290805190602001906200011a92919062000126565b5050565b600033905090565b828054620001349062000322565b90600052602060002090601f016020900481019282620001585760008555620001a4565b82601f106200017357805160ff1916838001178555620001a4565b82800160010185558215620001a4579182015b82811115620001a357825182559160200191906001019062000186565b5b509050620001b39190620001b7565b5090565b5b80821115620001d2576000816000905550600101620001b8565b5090565b6000620001ed620001e784620002b6565b6200028d565b9050828152602081018484840111156200020657600080fd5b62000213848285620002ec565b509392505050565b600082601f8301126200022d57600080fd5b81516200023f848260208601620001d6565b91505092915050565b6000602082840312156200025b57600080fd5b600082015167ffffffffffffffff8111156200027657600080fd5b62000284848285016200021b565b91505092915050565b600062000299620002ac565b9050620002a7828262000358565b919050565b6000604051905090565b600067ffffffffffffffff821115620002d457620002d3620003bd565b5b620002df82620003ec565b9050602081019050919050565b60005b838110156200030c578082015181840152602081019050620002ef565b838111156200031c576000848401525b50505050565b600060028204905060018216806200033b57607f821691505b602082108114156200035257620003516200038e565b5b50919050565b6200036382620003ec565b810181811067ffffffffffffffff82111715620003855762000384620003bd565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6131ce806200040d6000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c8063715018a61161008c578063a22cb46511610066578063a22cb4651461020f578063e985e9c51461022b578063f242432a1461025b578063f2fde38b14610277576100ce565b8063715018a6146101cb578063731133e9146101d55780638da5cb5b146101f1576100ce565b8062fdd58e146100d357806301ffc9a7146101035780630e89341c146101335780631f7fdffa146101635780632eb2c2d61461017f5780634e1273f41461019b575b600080fd5b6100ed60048036038101906100e89190612111565b610293565b6040516100fa91906128ad565b60405180910390f35b61011d60048036038101906101189190612234565b61035c565b60405161012a91906126d0565b60405180910390f35b61014d60048036038101906101489190612286565b61043e565b60405161015a91906126eb565b60405180910390f35b61017d6004803603810190610178919061202a565b6104d2565b005b61019960048036038101906101949190611edc565b610560565b005b6101b560048036038101906101b091906121c8565b610956565b6040516101c29190612677565b60405180910390f35b6101d3610b07565b005b6101ef60048036038101906101ea919061214d565b610c44565b005b6101f9610c56565b604051610206919061259a565b60405180910390f35b610229600480360381019061022491906120d5565b610c80565b005b61024560048036038101906102409190611ea0565b610e01565b60405161025291906126d0565b60405180910390f35b61027560048036038101906102709190611f9b565b610e95565b005b610291600480360381019061028c9190611e77565b6111ad565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fb9061274d565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042757507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610437575061043682611359565b5b9050919050565b60606002805461044d90612b50565b80601f016020809104026020016040519081016040528092919081815260200182805461047990612b50565b80156104c65780601f1061049b576101008083540402835291602001916104c6565b820191906000526020600020905b8154815290600101906020018083116104a957829003601f168201915b50505050509050919050565b6104da6113c3565b73ffffffffffffffffffffffffffffffffffffffff166104f8610c56565b73ffffffffffffffffffffffffffffffffffffffff161461054e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105459061280d565b60405180910390fd5b61055a848484846113cb565b50505050565b81518351146105a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059b9061286d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060b906127ad565b60405180910390fd5b61061c6113c3565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061066257506106618561065c6113c3565b610e01565b5b6106a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610698906127cd565b60405180910390fd5b60006106ab6113c3565b90506106bb818787878787611635565b60005b84518110156108c1576000858281518110610702577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506000858381518110610747577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df906127ed565b60405180910390fd5b81816107f49190612a66565b60008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108a69190612a10565b92505081905550505050806108ba90612bb3565b90506106be565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610938929190612699565b60405180910390a461094e81878787878761163d565b505050505050565b6060815183511461099c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109939061284d565b60405180910390fd5b6000835167ffffffffffffffff8111156109df577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610a0d5781602001602082028036833780820191505090505b50905060005b8451811015610afc57610aa6858281518110610a58577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151858381518110610a99577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610293565b828281518110610adf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080610af590612bb3565b9050610a13565b508091505092915050565b610b0f6113c3565b73ffffffffffffffffffffffffffffffffffffffff16610b2d610c56565b73ffffffffffffffffffffffffffffffffffffffff1614610b83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7a9061280d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b610c5084848484611824565b50505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8173ffffffffffffffffffffffffffffffffffffffff16610c9f6113c3565b73ffffffffffffffffffffffffffffffffffffffff161415610cf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ced9061282d565b60405180910390fd5b8060016000610d036113c3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610db06113c3565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610df591906126d0565b60405180910390a35050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610f05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efc906127ad565b60405180910390fd5b610f0d6113c3565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610f535750610f5285610f4d6113c3565b610e01565b5b610f92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f899061278d565b60405180910390fd5b6000610f9c6113c3565b9050610fbc818787610fad886119ba565b610fb6886119ba565b87611635565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015611053576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104a906127ed565b60405180910390fd5b838161105f9190612a66565b60008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111119190612a10565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62888860405161118e9291906128c8565b60405180910390a46111a4828888888888611a80565b50505050505050565b6111b56113c3565b73ffffffffffffffffffffffffffffffffffffffff166111d3610c56565b73ffffffffffffffffffffffffffffffffffffffff1614611229576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112209061280d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611299576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112909061276d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561143b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114329061288d565b60405180910390fd5b815183511461147f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114769061286d565b60405180910390fd5b60006114896113c3565b905061149a81600087878787611635565b60005b845181101561159f578381815181106114df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600080878481518110611523577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115859190612a10565b92505081905550808061159790612bb3565b91505061149d565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611617929190612699565b60405180910390a461162e8160008787878761163d565b5050505050565b505050505050565b61165c8473ffffffffffffffffffffffffffffffffffffffff16611c67565b1561181c578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b81526004016116a29594939291906125b5565b602060405180830381600087803b1580156116bc57600080fd5b505af19250505080156116ed57506040513d601f19601f820116820180604052508101906116ea919061225d565b60015b611793576116f9612c89565b806308c379a01415611756575061170e6130a6565b806117195750611758565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174d91906126eb565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178a9061270d565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461181a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118119061272d565b60405180910390fd5b505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611894576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188b9061288d565b60405180910390fd5b600061189e6113c3565b90506118bf816000876118b0886119ba565b6118b9886119ba565b87611635565b8260008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461191e9190612a10565b925050819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62878760405161199c9291906128c8565b60405180910390a46119b381600087878787611a80565b5050505050565b60606000600167ffffffffffffffff8111156119ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015611a2d5781602001602082028036833780820191505090505b5090508281600081518110611a6b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080915050919050565b611a9f8473ffffffffffffffffffffffffffffffffffffffff16611c67565b15611c5f578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611ae595949392919061261d565b602060405180830381600087803b158015611aff57600080fd5b505af1925050508015611b3057506040513d601f19601f82011682018060405250810190611b2d919061225d565b60015b611bd657611b3c612c89565b806308c379a01415611b995750611b516130a6565b80611b5c5750611b9b565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9091906126eb565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcd9061270d565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c549061272d565b60405180910390fd5b505b505050505050565b600080823b905060008111915050919050565b6000611c8d611c8884612916565b6128f1565b90508083825260208201905082856020860282011115611cac57600080fd5b60005b85811015611cdc5781611cc28882611d90565b845260208401935060208301925050600181019050611caf565b5050509392505050565b6000611cf9611cf484612942565b6128f1565b90508083825260208201905082856020860282011115611d1857600080fd5b60005b85811015611d485781611d2e8882611e62565b845260208401935060208301925050600181019050611d1b565b5050509392505050565b6000611d65611d608461296e565b6128f1565b905082815260208101848484011115611d7d57600080fd5b611d88848285612b0e565b509392505050565b600081359050611d9f8161313c565b92915050565b600082601f830112611db657600080fd5b8135611dc6848260208601611c7a565b91505092915050565b600082601f830112611de057600080fd5b8135611df0848260208601611ce6565b91505092915050565b600081359050611e0881613153565b92915050565b600081359050611e1d8161316a565b92915050565b600081519050611e328161316a565b92915050565b600082601f830112611e4957600080fd5b8135611e59848260208601611d52565b91505092915050565b600081359050611e7181613181565b92915050565b600060208284031215611e8957600080fd5b6000611e9784828501611d90565b91505092915050565b60008060408385031215611eb357600080fd5b6000611ec185828601611d90565b9250506020611ed285828601611d90565b9150509250929050565b600080600080600060a08688031215611ef457600080fd5b6000611f0288828901611d90565b9550506020611f1388828901611d90565b945050604086013567ffffffffffffffff811115611f3057600080fd5b611f3c88828901611dcf565b935050606086013567ffffffffffffffff811115611f5957600080fd5b611f6588828901611dcf565b925050608086013567ffffffffffffffff811115611f8257600080fd5b611f8e88828901611e38565b9150509295509295909350565b600080600080600060a08688031215611fb357600080fd5b6000611fc188828901611d90565b9550506020611fd288828901611d90565b9450506040611fe388828901611e62565b9350506060611ff488828901611e62565b925050608086013567ffffffffffffffff81111561201157600080fd5b61201d88828901611e38565b9150509295509295909350565b6000806000806080858703121561204057600080fd5b600061204e87828801611d90565b945050602085013567ffffffffffffffff81111561206b57600080fd5b61207787828801611dcf565b935050604085013567ffffffffffffffff81111561209457600080fd5b6120a087828801611dcf565b925050606085013567ffffffffffffffff8111156120bd57600080fd5b6120c987828801611e38565b91505092959194509250565b600080604083850312156120e857600080fd5b60006120f685828601611d90565b925050602061210785828601611df9565b9150509250929050565b6000806040838503121561212457600080fd5b600061213285828601611d90565b925050602061214385828601611e62565b9150509250929050565b6000806000806080858703121561216357600080fd5b600061217187828801611d90565b945050602061218287828801611e62565b935050604061219387828801611e62565b925050606085013567ffffffffffffffff8111156121b057600080fd5b6121bc87828801611e38565b91505092959194509250565b600080604083850312156121db57600080fd5b600083013567ffffffffffffffff8111156121f557600080fd5b61220185828601611da5565b925050602083013567ffffffffffffffff81111561221e57600080fd5b61222a85828601611dcf565b9150509250929050565b60006020828403121561224657600080fd5b600061225484828501611e0e565b91505092915050565b60006020828403121561226f57600080fd5b600061227d84828501611e23565b91505092915050565b60006020828403121561229857600080fd5b60006122a684828501611e62565b91505092915050565b60006122bb838361257c565b60208301905092915050565b6122d081612a9a565b82525050565b60006122e1826129af565b6122eb81856129dd565b93506122f68361299f565b8060005b8381101561232757815161230e88826122af565b9750612319836129d0565b9250506001810190506122fa565b5085935050505092915050565b61233d81612aac565b82525050565b600061234e826129ba565b61235881856129ee565b9350612368818560208601612b1d565b61237181612cab565b840191505092915050565b6000612387826129c5565b61239181856129ff565b93506123a1818560208601612b1d565b6123aa81612cab565b840191505092915050565b60006123c26034836129ff565b91506123cd82612cc9565b604082019050919050565b60006123e56028836129ff565b91506123f082612d18565b604082019050919050565b6000612408602b836129ff565b915061241382612d67565b604082019050919050565b600061242b6026836129ff565b915061243682612db6565b604082019050919050565b600061244e6029836129ff565b915061245982612e05565b604082019050919050565b60006124716025836129ff565b915061247c82612e54565b604082019050919050565b60006124946032836129ff565b915061249f82612ea3565b604082019050919050565b60006124b7602a836129ff565b91506124c282612ef2565b604082019050919050565b60006124da6020836129ff565b91506124e582612f41565b602082019050919050565b60006124fd6029836129ff565b915061250882612f6a565b604082019050919050565b60006125206029836129ff565b915061252b82612fb9565b604082019050919050565b60006125436028836129ff565b915061254e82613008565b604082019050919050565b60006125666021836129ff565b915061257182613057565b604082019050919050565b61258581612b04565b82525050565b61259481612b04565b82525050565b60006020820190506125af60008301846122c7565b92915050565b600060a0820190506125ca60008301886122c7565b6125d760208301876122c7565b81810360408301526125e981866122d6565b905081810360608301526125fd81856122d6565b905081810360808301526126118184612343565b90509695505050505050565b600060a08201905061263260008301886122c7565b61263f60208301876122c7565b61264c604083018661258b565b612659606083018561258b565b818103608083015261266b8184612343565b90509695505050505050565b6000602082019050818103600083015261269181846122d6565b905092915050565b600060408201905081810360008301526126b381856122d6565b905081810360208301526126c781846122d6565b90509392505050565b60006020820190506126e56000830184612334565b92915050565b60006020820190508181036000830152612705818461237c565b905092915050565b60006020820190508181036000830152612726816123b5565b9050919050565b60006020820190508181036000830152612746816123d8565b9050919050565b60006020820190508181036000830152612766816123fb565b9050919050565b600060208201905081810360008301526127868161241e565b9050919050565b600060208201905081810360008301526127a681612441565b9050919050565b600060208201905081810360008301526127c681612464565b9050919050565b600060208201905081810360008301526127e681612487565b9050919050565b60006020820190508181036000830152612806816124aa565b9050919050565b60006020820190508181036000830152612826816124cd565b9050919050565b60006020820190508181036000830152612846816124f0565b9050919050565b6000602082019050818103600083015261286681612513565b9050919050565b6000602082019050818103600083015261288681612536565b9050919050565b600060208201905081810360008301526128a681612559565b9050919050565b60006020820190506128c2600083018461258b565b92915050565b60006040820190506128dd600083018561258b565b6128ea602083018461258b565b9392505050565b60006128fb61290c565b90506129078282612b82565b919050565b6000604051905090565b600067ffffffffffffffff82111561293157612930612c5a565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561295d5761295c612c5a565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561298957612988612c5a565b5b61299282612cab565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612a1b82612b04565b9150612a2683612b04565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a5b57612a5a612bfc565b5b828201905092915050565b6000612a7182612b04565b9150612a7c83612b04565b925082821015612a8f57612a8e612bfc565b5b828203905092915050565b6000612aa582612ae4565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612b3b578082015181840152602081019050612b20565b83811115612b4a576000848401525b50505050565b60006002820490506001821680612b6857607f821691505b60208210811415612b7c57612b7b612c2b565b5b50919050565b612b8b82612cab565b810181811067ffffffffffffffff82111715612baa57612ba9612c5a565b5b80604052505050565b6000612bbe82612b04565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612bf157612bf0612bfc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d1115612ca85760046000803e612ca5600051612cbc565b90505b90565b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600060443d10156130b657613139565b6130be61290c565b60043d036004823e80513d602482011167ffffffffffffffff821117156130e6575050613139565b808201805167ffffffffffffffff8111156131045750505050613139565b80602083010160043d038501811115613121575050505050613139565b61313082602001850186612b82565b82955050505050505b90565b61314581612a9a565b811461315057600080fd5b50565b61315c81612aac565b811461316757600080fd5b50565b61317381612ab8565b811461317e57600080fd5b50565b61318a81612b04565b811461319557600080fd5b5056fea2646970667358221220a6ae32322929322a3437604cea248118ebbeacb00345a49a645f3e8b3bef381264736f6c63430008040033";

type Basic1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Basic1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Basic1155__factory extends ContractFactory {
  constructor(...args: Basic1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Basic1155> {
    return super.deploy(uri, overrides || {}) as Promise<Basic1155>;
  }
  override getDeployTransaction(
    uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  override attach(address: string): Basic1155 {
    return super.attach(address) as Basic1155;
  }
  override connect(signer: Signer): Basic1155__factory {
    return super.connect(signer) as Basic1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Basic1155Interface {
    return new utils.Interface(_abi) as Basic1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Basic1155 {
    return new Contract(address, _abi, signerOrProvider) as Basic1155;
  }
}