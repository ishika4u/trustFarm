const hre = require("hardhat")
const { Framework } = require("@superfluid-finance/sdk-core")
require("dotenv").config()

//to run this script:
//1) Make sure you've created your own .env file
//2) Make sure that you have your network specified in hardhat.config.js
//3) run: npx hardhat run scripts/deploy.js --network goerli
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    const provider = new hre.ethers.providers.JsonRpcProvider(
        process.env.POLYGON_URL
    )

    const sf = await Framework.create({
        chainId: (await provider.getNetwork()).chainId,
        provider
    })

    const maticx = await sf.loadSuperToken("MATICx");

    const signers = await hre.ethers.getSigners()
    // We get the contract to deploy
    const GreenPipeline = await hre.ethers.getContractFactory("GreenPipeline")
    //deploy the money router account using the proper host address and the address of the first signer
    const greenPipeline = await GreenPipeline.deploy(
        sf.settings.config.hostAddress,
        maticx.address,
        maticx.address,
        signers[0].address
    )

    await greenPipeline.deployed()

    console.log("Green Pipeline deployed to:", greenPipeline.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
