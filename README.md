# BitBT Pump

BitBT Pump is an on-chain MEME market deployed on BNB Smart Chain (BSC) at [bitbt.fun](https://bitbt.fun). This repository publishes its BSC network configuration, selected public contract addresses, wallet integration code, and development updates.

## Technology Stack

- **Blockchain:** BNB Smart Chain Mainnet (EVM, Chain ID `56`).
- **Public code in this repository:** JavaScript ES modules and Node.js 20 or newer. [`src/bnb-chain.js`](src/bnb-chain.js) reads [`bnbconfig.json`](bnbconfig.json) to provide wallet network parameters, BSC chain detection, and BscScan links. It has no third-party dependencies.
- **Live application:** The production frontend and Solidity contract implementations are maintained in separate repositories; their source code is not included here.

## Supported Networks

| Network | Chain ID | Status |
| --- | --- | --- |
| BNB Smart Chain Mainnet | `56` / `0x38` | Live deployment |

This repository does not claim a BSC testnet or Ethereum deployment.

## BNB Chain Configuration

| Item | Mainnet value |
| --- | --- |
| Network | BNB Smart Chain (BSC) |
| Chain ID | `56` / `0x38` |
| Public RPC | `https://bsc-dataseed.binance.org` |
| Explorer | [BscScan](https://bscscan.com) |
| Live app | [bitbt.fun](https://bitbt.fun) |

The network settings and selected contract addresses are recorded in [`bnbconfig.json`](bnbconfig.json). The launch and perpetual addresses were checked against the website's public [launch options](https://bitbt.fun/api/pump/v1/token/launch-options?chain_id=bsc) and [perpetual configuration](https://bitbt.fun/api/pump/v1/pump/perpetual/config?chain_id=bsc) on 2026-09-30. Production status can change; check those endpoints and the blockchain before relying on a value.

## Contract Addresses

| BSC Mainnet contract | Address |
| --- | --- |
| Pump launch factory | [`0x3a6038083A27B23433594c3319c66a20085F849E`](https://bscscan.com/address/0x3a6038083A27B23433594c3319c66a20085F849E) |
| Perpetual market | [`0x375dcfa11d02813117830ac6d572f7f8b86b706d`](https://bscscan.com/address/0x375dcfa11d02813117830ac6d572f7f8b86b706d) |
| Genesis subscription proxy | [`0xcfa2fffbe477ca664d362cb53598d7349955431b`](https://bscscan.com/address/0xcfa2fffbe477ca664d362cb53598d7349955431b) |
| BSC USDT payment token | [`0x55d398326f99059ff775485246999027b3197955`](https://bscscan.com/address/0x55d398326f99059ff775485246999027b3197955) |

## Features

- BSC token launch and bonding-curve trading interfaces.
- DEX migration and perpetual market interfaces.
- Genesis subscription pages with public on-chain contract references.
- Standalone BSC wallet integration code in this repository.

Feature availability and trading parameters depend on live product configuration and market state. The perpetual configuration reported a current maximum leverage of **1×** on 2026-09-30; higher leverage is a future product goal.

## Public Code and Verification

[`src/bnb-chain.js`](src/bnb-chain.js) is a standalone integration utility, and [`test/bnb-chain.test.js`](test/bnb-chain.test.js) verifies its BSC settings and behavior. This repository is an official public project and integration record; it does **not** contain the production frontend, backend, or contract implementation source code.

```bash
npm run verify
```

Node.js 20 or newer is required. The command checks JavaScript syntax and runs the included tests; it installs no dependencies.

## Development Status

See [ROADMAP.md](ROADMAP.md) for current priorities and planned work, and [CHANGELOG.md](CHANGELOG.md) for public updates. Report security issues through [SECURITY.md](SECURITY.md).

## 中文说明

BitBT Pump 是部署在 BNB Smart Chain 的链上 MEME 市场，官网为 [bitbt.fun](https://bitbt.fun)。本仓库公开 BSC 网络配置、部分已公开合约地址、独立的钱包接入示例、开发进度和产品规划。线上产品以官网及链上状态为准。

| 项目 | BSC 主网信息 |
| --- | --- |
| 网络 | BNB Smart Chain |
| Chain ID | `56` / `0x38` |
| 公共 RPC | `https://bsc-dataseed.binance.org` |
| 区块浏览器 | [BscScan](https://bscscan.com) |
| 官网 | [bitbt.fun](https://bitbt.fun) |

真实交易参数随市场状态变化。2026-09-30 查询的永续合约公开配置显示当前最高杠杆为 **1×**。后续产品目标见 [路线图](ROADMAP.md)，请勿将规划视为已上线功能。

本仓库中的示例代码可通过 `npm run verify` 验证。生产应用和合约实现保存在独立仓库中。
