var TRON={

init:async function(){
let contractInstance = await tronWeb.contract().at("TJHfHUk2YxXXiAspfx2kfAPZaAQasSmaZ2");
},
userTotalPixels:async function(){
        console.log(await this.contractInstance.userTotalPixels(tronWeb.defaultAddress.hex).call());
}, 
}
