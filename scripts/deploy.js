const os = require("os");
const fs = require('fs');

const hre = require('hardhat');

const { mockData } = require('./mockData');

function setEnvValue(key, value) {
  const ENV_FILE = '.env'

  // read file from hdd & split if from a linebreak to a array
  const ENV_VARS = fs.readFileSync(ENV_FILE, "utf8").split(os.EOL);

  // find the env we want based on the key
  const target = ENV_VARS.indexOf(ENV_VARS.find((line) => {
    return line.match(new RegExp(key));
  }));

  // replace the key/value with the new value
  ENV_VARS.splice(target, 1, `${key}=${value}`);

  // write everything back to the file system
  fs.writeFileSync(ENV_FILE, ENV_VARS.join(os.EOL));

}

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const TrustFarm = await hre.ethers.getContractFactory("TrustFarm");
  const trustFarm = await TrustFarm.deploy();

  console.log(`TrustFarm deployed at ${trustFarm.address}`);

  setEnvValue('CONTRACT_ADDRESS', trustFarm.address);

  const abi = require('../artifacts/contracts/TrustFarm.sol/TrustFarm.json').abi;

  fs.writeFileSync("trustfarm/src/abi/TrustFarm.json", JSON.stringify(abi), 'utf8', (err) => {
    console.log(err);
  });

  const config = fs.readFileSync('trustfarm/src/config.js', 'utf-8');
  let updatedConfig = config.split('\n');
  updatedConfig[updatedConfig.length - 1] = `export const CONTRACT_ADDRESS = "${trustFarm.address}"`;
  updatedConfig = updatedConfig.join('\n');
  
  fs.writeFileSync("trustfarm/src/config.js", updatedConfig, 'utf8', (err) => {
    console.log(err);
  });
  
  // try {
  //   await mockData(trustFarm.address, abi);
  // } catch (err) {
  //   console.log(err);
  // }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })