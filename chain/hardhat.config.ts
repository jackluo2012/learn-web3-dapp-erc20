import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


//创建任务 https://hardhat.org/hardhat-runner/docs/advanced/create-task
task("accounts","打印出所有的帐号列表 ",async (taskArgs,hre)=>{
  const accounts = await hre.ethers.getSigners();
  for(const account of accounts){
    console.log(account.address)
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
