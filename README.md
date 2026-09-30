# BitBT Pump on BNB Smart Chain

BitBT Pump is an on-chain MEME market at [bitbt.fun](https://bitbt.fun). This repository publishes its BNB Smart Chain network configuration, selected public contract addresses, a small wallet integration utility, and development updates. The website is the live product; this repository is the public project and integration record.

## BNB Chain deployment

| Item | Mainnet value |
| --- | --- |
| Network | BNB Smart Chain (BSC) |
| Chain ID | `56` / `0x38` |
| Public RPC | `https://bsc-dataseed.binance.org` |
| Explorer | [BscScan](https://bscscan.com) |
| Live app | [bitbt.fun](https://bitbt.fun) |

The network settings and selected contract addresses are recorded in [`bnbconfig.json`](bnbconfig.json). The launch and perpetual addresses were checked against the website's public [launch options](https://bitbt.fun/api/pump/v1/token/launch-options?chain_id=bsc) and [perpetual configuration](https://bitbt.fun/api/pump/v1/pump/perpetual/config?chain_id=bsc) on 2026-09-30. Production status can change; check those endpoints and the blockchain before relying on a value.

| Public contract | BSC address |
| --- | --- |
| Pump launch factory | [`0x3a6038083A27B23433594c3319c66a20085F849E`](https://bscscan.com/address/0x3a6038083A27B23433594c3319c66a20085F849E) |
| Perpetual market | [`0x375dcfa11d02813117830ac6d572f7f8b86b706d`](https://bscscan.com/address/0x375dcfa11d02813117830ac6d572f7f8b86b706d) |
| Genesis subscription proxy | [`0xcfa2fffbe477ca664d362cb53598d7349955431b`](https://bscscan.com/address/0xcfa2fffbe477ca664d362cb53598d7349955431b) |
| BSC USDT payment token | [`0x55d398326f99059ff775485246999027b3197955`](https://bscscan.com/address/0x55d398326f99059ff775485246999027b3197955) |

## Public code

[`src/bnb-chain.js`](src/bnb-chain.js) reads the BSC configuration and provides wallet network parameters, chain detection, and BscScan links. It is a standalone integration utility. The production app and contract implementations are maintained in separate repositories.

```bash
npm run verify
```

Node.js 20 or newer is required. The command checks JavaScript syntax and runs the included tests; it installs no dependencies.

## Development status

The live BSC app includes token launch and trading interfaces, DEX migration, a perpetual market interface, and Genesis subscription pages. Availability and trading parameters depend on the live product configuration and market state. For example, the perpetual configuration reported a current maximum leverage of **1×** on 2026-09-30; higher leverage is a future product goal, not a current limit represented by this repository.

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
