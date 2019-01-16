var TRON={
    CONTRACT_ADDRESS:"TERM71koU5iPS5Ht8PbuuQ5BChLjx7aWKk",
    contractInstance:"",
    ListCommunity:[],
    init:async function(){
        var contractInfo=await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance=window.tronWeb.contract(contractInfo.abi.entrys,contractInfo.contract_address);
        //this.hookPixelPurchased();
    },
   getCandy:async function(id){
        //console.log(await this.contractInstance.maxNumbers().call()).toNumber();
        const ned = await this.contractInstance.getCandy(123).call();
        const ned2 = ned[2].toString();
        console.log(ned2);
    },
    receive:async function(id){
       return await this.contractInstance.receive(131).send();
        console.log(await this.contractInstance.receive(131).send());
    },
}
var timeOutID=setTimeout(tryInstall,100)
function tryInstall(){
    if(window.tronWeb&&window.tronWeb && window.tronWeb.ready){
        clearTimeout(timeOutID);
        TRON.init();
    }
    else{
        timeOutID=setTimeout(tryInstall,100)
    }
}
