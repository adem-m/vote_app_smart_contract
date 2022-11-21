const {ethers} = require("hardhat");
const {expect} = require("chai");

describe("VotingSystem", () => {
    const vote1 = 0;
    const vote2 = 1;

    const deployContractFixture = async () => {
        const [owner, voter1, voter2] = await ethers.getSigners();

        const VotingSystem = await ethers.getContractFactory("VotingSystem");
        const contract = await VotingSystem.deploy();

        return {contract, owner, voter1, voter2};
    }

    it("Should return proposal", async () => {
        const {contract} = await deployContractFixture();
        const proposal = await contract.getProposal();

        expect(proposal).to.equal("Is DOOM a cool game ?");
    });

    it("Should have correct votes", async () => {
        const {contract, voter1, voter2} = await deployContractFixture();
        await contract.connect(voter1).vote(vote1);
        await contract.connect(voter2).vote(vote2);
        const votes = await contract.getVotes();

        expect(votes).to.deep.equal([vote1, vote2]);
    });
});