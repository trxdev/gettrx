var TRON={
    CONTRACT_ADDRESS:"TUhKFyGMi28AXgtgRK9arucSC2mz3XDFgx",
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
