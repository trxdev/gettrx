$(document).ready(() => {
  
  window.onload = function() {
  if (!window.tronWeb) {

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = 'https://api.shasta.trongrid.io/';
    
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
    );

    window.tronWeb = tronWeb;
  }
};
 

$("#claim").click(async function(event) {
  	event.preventDefault();

    		var result = await TRON.userTotalPixels();

});
});
