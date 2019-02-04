console.log(process.env.my_key);
var TRON = {
    CONTRACT_ADDRESS: "TEiytbzhdBcvwqrvjRKyrgJNXjmZt8oFEv",
    //CONTRACT_ADDRESS: "TLijiFWfhK55BKCEZ2Up1yc35c5SiYkvDr",
    contractInstance: "",
    init: async function() {
        var contractInfo = await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance = window.tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    },

    collect: async function(name) {
	
        return await this.contractInstance.collect('iamcool').send();
        console.log(await this.contractInstance.collect().send());
    },
    canReceive: async function(address) {
        return (await this.contractInstance.canReceive(tronWeb.defaultAddress.base58).call());
    },
    myAvailable: async function(address) {
        return (await this.contractInstance.myAvailable(tronWeb.defaultAddress.base58).call());
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
