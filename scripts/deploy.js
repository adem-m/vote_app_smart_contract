const hre = require("hardhat");

async function main() {
    const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");
    const contract = await VotingSystem.deploy();

    await contract.deployed();

    console.log(`Contract successfully deployed at ${contract.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
