
const contractAddress = 'TUhKFyGMi28AXgtgRK9arucSC2mz3XDFgx'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
    getCandy:async function(id){
        console.log(await this.contract.getCandy(123).send());
        //return (await this.contractInstance.getCandy(123).call());
    }, 

};
