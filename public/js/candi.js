const TronWeb = require('tronweb');

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = 'https://api.shasta.trongrid.io/';
const privateKey = process.env.PRIVATE_KEY;

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);
var TRON={
init:async function(){
let contractInstance = await tronWeb.contract().at("TJHfHUk2YxXXiAspfx2kfAPZaAQasSmaZ2");
},
userTotalPixels:async function(){
        console.log(await this.contractInstance.userTotalPixels(tronWeb.defaultAddress.hex).call());
}, 
}
