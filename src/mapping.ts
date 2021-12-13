import { store } from "@graphprotocol/graph-ts";
import { Minted, TokenBurned, TokenChangePrice } from "../generated/TokenKidFactory/TokenKidFactory";
import { Token } from "../generated/schema";

export function handleMinted(event: Minted): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
  }
  token.tokenId = event.params.tokenId;
  token.owner = event.params.owner;
  token._tokenName = event.params._tokenName;
  token._price = event.params._price;
  token._tokenURI = event.params._tokenURI;
  token.save();
}

export function handleTokenBurned(event: TokenBurned): void {
  let tokenId = event.params.tokenId.toString();
  store.remove("Token", tokenId);
}

export function handleTokenChangePrice(event: TokenChangePrice): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
  }
  token._price = event.params._price;
  token.save();
}
