import { expect } from "chai";
import { ethers } from "hardhat";

describe("ClassToken - Normal", function () {  
  it("应该有正确的初始供应",async function () {
      //部署
    const initialSupply = ethers.utils.parseEther('10000.0')
    const ClassToken = await ethers.getContractFactory("ClassToken");
    const token = await ClassToken.deploy(initialSupply);
    await token.deployed();
    //验证是否是总额一致的
    expect(await token.totalSupply()).to.equal(initialSupply);
  })
});
