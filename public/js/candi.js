var TRON={

init:async function(){
let contractInstance = await tronWeb.contract().at("TJHfHUk2YxXXiAspfx2kfAPZaAQasSmaZ2");
},
    getCandy:async function(id){
        console.log(await this.contractInstance.getCandy(123).send());
        //return (await this.contractInstance.getCandy(123).call());
    }, 
}
