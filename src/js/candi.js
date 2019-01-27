var TRON={
    CONTRACT_ADDRESS:"TVJ29atMMTQ3kxwcteXsaybMMhjRaVF5Fs",
    contractInstance:"",
    init:async function(){
        var contractInfo=await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance=window.tronWeb.contract(contractInfo.abi.entrys,contractInfo.contract_address);
    },

    receive:async function(){
       return await this.contractInstance.receive().send();
        console.log(await this.contractInstance.receive().send());
    },
    canReceive:async function(address){
        return (await this.contractInstance.canReceive(address).call());
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
