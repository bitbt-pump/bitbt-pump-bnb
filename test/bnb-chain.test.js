import assert from 'node:assert/strict';
import test from 'node:test';
import {
  bnbChain,
  contractExplorerUrl,
  isBnbMainnet,
  publicContracts,
  walletAddNetworkParams,
} from '../src/bnb-chain.js';

test('BNB mainnet configuration is suitable for wallet_addEthereumChain', () => {
  assert.equal(bnbChain.chainId, 56);
  assert.equal(bnbChain.chainIdHex, '0x38');
  assert.equal(walletAddNetworkParams().chainId, '0x38');
  assert.equal(walletAddNetworkParams().nativeCurrency.symbol, 'BNB');
});

test('network detection accepts decimal and hexadecimal chain IDs', () => {
  assert.equal(isBnbMainnet(56), true);
  assert.equal(isBnbMainnet('56'), true);
  assert.equal(isBnbMainnet('0x38'), true);
  assert.equal(isBnbMainnet('0x1'), false);
});

test('published contract addresses produce BscScan links', () => {
  for (const address of Object.values(publicContracts)) {
    assert.match(contractExplorerUrl(address), /^https:\/\/bscscan\.com\/address\/0x[0-9a-fA-F]{40}$/);
  }
  assert.throws(() => contractExplorerUrl('0x1234'), TypeError);
});
