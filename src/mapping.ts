import { Minted } from "../generated/TokenKidFactory/TokenKidFactory";
import { Token } from "../generated/schema";

export function handleMinted(event: Minted): void {
  let token = Token.load(event.params.tokenId.toString())
  if (!token) {
    let token = new Token(event.params.tokenId.toString());
    token.owner = event.params.owner;
    token._tokenName = event.params._tokenName;
    token._price = event.params._price;
    token._tokenURI = event.params._tokenURI;
    token.save();
  }
}
