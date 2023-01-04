# Sample Hardhat Project
### tasks1:
## 部署
```
npx hardhat run scripts/deploy-ClassToken.ts --network localhost

```
## 打印出所有的帐号列表
```
// 参考 hardhat.config.ts文件
yarn hardhat accounts
```




```shell
npx hardhat help
## 进行单元测试
npx hardhat test
REPORT_GAS=true npx hardhat test
# 运行到本地的区块链网 localhost:8545
npx hardhat node
npx hardhat run scripts/deploy.ts
#部署到本地网络
yarn hardhat run ./scripts/deploy_greeter.ts --network localhost
# metamask 上添加本地PRC网络 链 Chain ID is 31337
#yarn hardhat console 用下面命令可以获利
#ethers.provider.network { chainId: 31337, name: 'unknown' }

```
## 基于next.js 创建dapp
```
yarn create next-app webapp --typescript
cd webapp
```
