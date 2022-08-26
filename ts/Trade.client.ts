/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { ExecuteMsg, Timestamp, Uint64, TokenMsg, Uint128, InstantiateMsg, ExpiryRange, QueryMsg, Addr, SudoParams } from "./Trade.types";
export interface TradeReadOnlyInterface {
  contractAddress: string;
  offer: ({
    id
  }: {
    id: number;
  }) => Promise<OfferResponse>;
  offersBySender: ({
    sender
  }: {
    sender: string;
  }) => Promise<OffersBySenderResponse>;
  offersByPeer: ({
    peer
  }: {
    peer: string;
  }) => Promise<OffersByPeerResponse>;
  params: () => Promise<ParamsResponse>;
}
export class TradeQueryClient implements TradeReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.offer = this.offer.bind(this);
    this.offersBySender = this.offersBySender.bind(this);
    this.offersByPeer = this.offersByPeer.bind(this);
    this.params = this.params.bind(this);
  }

  offer = async ({
    id
  }: {
    id: number;
  }): Promise<OfferResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      offer: {
        id
      }
    });
  };
  offersBySender = async ({
    sender
  }: {
    sender: string;
  }): Promise<OffersBySenderResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      offers_by_sender: {
        sender
      }
    });
  };
  offersByPeer = async ({
    peer
  }: {
    peer: string;
  }): Promise<OffersByPeerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      offers_by_peer: {
        peer
      }
    });
  };
  params = async (): Promise<ParamsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      params: {}
    });
  };
}
export interface TradeInterface extends TradeReadOnlyInterface {
  contractAddress: string;
  sender: string;
  createOffer: ({
    expiresAt,
    offeredNfts,
    peer,
    wantedNfts
  }: {
    expiresAt?: Timestamp;
    offeredNfts: TokenMsg[];
    peer: string;
    wantedNfts: TokenMsg[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeOffer: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  acceptOffer: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  rejectOffer: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeStaleOffer: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class TradeClient extends TradeQueryClient implements TradeInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createOffer = this.createOffer.bind(this);
    this.removeOffer = this.removeOffer.bind(this);
    this.acceptOffer = this.acceptOffer.bind(this);
    this.rejectOffer = this.rejectOffer.bind(this);
    this.removeStaleOffer = this.removeStaleOffer.bind(this);
  }

  createOffer = async ({
    expiresAt,
    offeredNfts,
    peer,
    wantedNfts
  }: {
    expiresAt?: Timestamp;
    offeredNfts: TokenMsg[];
    peer: string;
    wantedNfts: TokenMsg[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_offer: {
        expires_at: expiresAt,
        offered_nfts: offeredNfts,
        peer,
        wanted_nfts: wantedNfts
      }
    }, fee, memo, funds);
  };
  removeOffer = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_offer: {
        id
      }
    }, fee, memo, funds);
  };
  acceptOffer = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_offer: {
        id
      }
    }, fee, memo, funds);
  };
  rejectOffer = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      reject_offer: {
        id
      }
    }, fee, memo, funds);
  };
  removeStaleOffer = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_stale_offer: {
        id
      }
    }, fee, memo, funds);
  };
}