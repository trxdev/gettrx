var TRON={

init:async function(){
let contractInstance = await tronWeb.contract().at("TUhKFyGMi28AXgtgRK9arucSC2mz3XDFgx");
},
    getCandy:async function(id){
        console.log(await this.contractInstance.getCandy(123).send());
        //return (await this.contractInstance.getCandy(123).call());
    }, 
}
