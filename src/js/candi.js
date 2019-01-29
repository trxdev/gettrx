var TRON = {
    CONTRACT_ADDRESS: "TJuGjPrzUZNJHL9seB5JgbAmdAi47Aqeps",
    contractInstance: "",
    init: async function() {
        var contractInfo = await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance = window.tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    },

    receive: async function() {
        return await this.contractInstance.receive().send();
        console.log(await this.contractInstance.receive().send());
    },
    canReceive: async function(address) {
        return (await this.contractInstance.canReceive(tronWeb.defaultAddress.base58).call());
    },
    myLastTime: async function(address) {
        return (await this.contractInstance.myLastTime(tronWeb.defaultAddress.base58).call());
    },	
}
	var timeOutID = setTimeout(tryInstall, 100)

function tryInstall() {
    if (window.tronWeb && window.tronWeb && window.tronWeb.ready) {
        clearTimeout(timeOutID);
        TRON.init();
    } else {
        timeOutID = setTimeout(tryInstall, 100)
    }
}
