import { readFileSync } from 'node:fs';

const config = JSON.parse(
  readFileSync(new URL('../bnbconfig.json', import.meta.url), 'utf8'),
);

export const bnbChain = Object.freeze(config.network);
export const publicContracts = Object.freeze(config.publicContracts);

export function isBnbMainnet(chainId) {
  if (typeof chainId === 'number') return chainId === bnbChain.chainId;
  if (typeof chainId !== 'string') return false;
  return chainId.toLowerCase() === bnbChain.chainIdHex || chainId === String(bnbChain.chainId);
}

export function walletAddNetworkParams() {
  return {
    chainId: bnbChain.chainIdHex,
    chainName: bnbChain.name,
    nativeCurrency: { ...bnbChain.nativeCurrency },
    rpcUrls: [...bnbChain.rpcUrls],
    blockExplorerUrls: [...bnbChain.blockExplorerUrls],
  };
}

export function contractExplorerUrl(address) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    throw new TypeError('Expected a 20-byte EVM contract address');
  }
  return `${bnbChain.blockExplorerUrls[0]}/address/${address}`;
}
