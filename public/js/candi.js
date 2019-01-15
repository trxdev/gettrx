
const TronWeb = require('tronweb');

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider(' https://api.shasta.trongrid.io');
const eventServe = "https://api.shasta.trongrid.io"

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);


async function pickWinnerCalling() {
const contractInstance = await tronWeb.contract().at("TJHfHUk2YxXXiAspfx2kfAPZaAQasSmaZ2");
const result  = await contractInstance.leaveCommunity().send();

console.log(result); 
};

//calling pickWinnerCalling function
//pickWinnerCalling();
