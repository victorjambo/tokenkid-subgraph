import {
  Minted,
  TokenTransfered,
} from "../generated/TokenKidFactory/TokenKidFactory";
import { Tokens } from "../generated/schema";

export function handleMinted(event: Minted): void {
  let tokens = new Tokens(event.params.tokenId.toHex());
  tokens.owner = event.params.owner;
  tokens._tokenName = event.params._tokenName;
  tokens._price = event.params._price;
  tokens._tokenURI = event.params._tokenURI;
  tokens.save();
}

// TokenTransfered === Transfer
export function handleTokenTransfered(event: TokenTransfered): void {
  let token = new Tokens(event.params.tokenId.toHex());
  token.owner = event.params.newOwner;
  token.save();
}
