# BNB Chain Repository Submission Guidelines — BitBT Pump

This file maps the [BNB Chain repository submission guidelines](https://github.com/bnb-chain/bnb-chain-tutorial/blob/main/Readme-and-config-file-guideline.md) to evidence in this repository. It is a project checklist, not an approval from BNB Chain or DappBay.

## 1. Purpose

The repository documents BitBT Pump's BNB Smart Chain Mainnet deployment and publishes BSC-specific configuration and wallet integration code.

## 2. Core Verification Principle

A reviewer can inspect the repository alone to find the BSC network ID and RPC, deployed contract addresses, wallet integration code, and tests. The [README](README.md) identifies the live app and explains the scope of the published code.

## 3. Positive Indicators

| Indicator in the BNB Chain guideline | BitBT Pump evidence |
| --- | --- |
| Configuration evidence | [`bnbconfig.json`](bnbconfig.json) sets BNB Smart Chain Mainnet, Chain ID `56` / `0x38`, a BSC RPC, and BscScan. |
| README documentation | [`README.md`](README.md) states the BSC deployment, supported network, technology stack, features, and public contract addresses. |
| BNB Chain-specific SDK usage | This EVM integration uses wallet network parameters and JSON-RPC configuration; it does not claim to use a BNB-specific SDK. |
| Chain-specific files or formats | [`bnbconfig.json`](bnbconfig.json) contains the BSC network and public address configuration. |
| Function names or signatures | [`src/bnb-chain.js`](src/bnb-chain.js) exports `isBnbMainnet`, `walletAddNetworkParams`, and BscScan link generation. |
| Code comments | The public integration code identifies its BSC mainnet purpose in a source comment. |

## 4. Common False Positives

The repository does not list unverified Ethereum or BSC testnet deployments. It identifies BNB Smart Chain by Chain ID, RPC, explorer, and deployed addresses; the BNB reference is not merely a traded token name. The README and `bnbconfig.json` use the same network.

## 5. Submission Requirements

| Requirement | Current status |
| --- | --- |
| Public repository | Met: this repository is public. |
| Official source code of the project | **Not fully met:** this is the official project-maintained public repository, but it contains only the BSC wallet integration utility source. Production frontend, backend, and smart contract implementation source remain private. BscScan address links do not substitute for source code. |
| README and configuration | The README and `bnbconfig.json` explicitly describe the verified BSC mainnet deployment. |
| Main repository identified | This is the official public repository for BitBT Pump's BSC integration and project documentation. No other public source repository is claimed here. |

The source-code requirement remains subject to BNB Chain's review. This file does not claim that the repository has been accepted.
