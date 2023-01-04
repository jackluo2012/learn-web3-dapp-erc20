import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter - Normal", function () {  
  it("Should return the new greeting once it's changed",async function () {
      //部署
      const Greeter = await ethers.getContractFactory("Greeter")
      const greeter = await Greeter.deploy("hello,jack!")
      await greeter.deployed()
      //验证
      expect(await greeter.greet()).to.equal("hello,jack!")

      const setGreetingTx = await greeter.setGreeting("你好！")
      //等待区块确认
      await setGreetingTx.wait()
      expect(await greeter.greet()).to.equal("你好！");
  })
});
