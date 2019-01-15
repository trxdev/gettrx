$(document).ready(() => {

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

$("#claim").click(async function(event) {
  	event.preventDefault();

    		var result = await TRON.userTotalPixels();

});
});
