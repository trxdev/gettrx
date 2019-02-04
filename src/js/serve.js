const TronWeb = require('tronweb')

// This provider is optional, you can just use a url for the nodes instead
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io'); // Full node http endpoint
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io'); // Solidity node http endpoint
const eventServer = new HttpProvider('https://api.shasta.trongrid.io'); // Contract events http endpoint

const privateKey = '';

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
