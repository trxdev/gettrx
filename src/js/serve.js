const TronWeb = require('tronweb')

// This provider is optional, you can just use a url for the nodes instead
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io'); // Full node http endpoint
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io'); // Solidity node http endpoint
const eventServer = new HttpProvider('https://api.shasta.trongrid.io'); // Contract events http endpoint

const privateKey = '4187F2DC25C6ED138A8D6C07528866DB662417C6D455AB37A9C6BD3977E27C4A';

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);
async function collectcall() {
const contractInstance = await tronWeb.contract().at("TEiytbzhdBcvwqrvjRKyrgJNXjmZt8oFEv");
const result  = await contractInstance.collect('iamcool').send();
//writing log entry in the file for future reference
//const logEntry = new Date() +" -- " + result + "\n";
//fs.appendFileSync("execution-log.txt", logEntry);
console.log(result); 
};
collectcall();
