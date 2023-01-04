import { ethers } from "hardhat";

async function main() {

  const say = "hello jackluo"
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy(say);

  await greeter.deployed();

  console.log(`greeter deployed to ${greeter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

