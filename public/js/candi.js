var TRON={
    CONTRACT_ADDRESS:"TUhKFyGMi28AXgtgRK9arucSC2mz3XDFgx",
    contractInstance:"",
    init:async function(){
        var contractInfo=await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance=window.tronWeb.contract(contractInfo.abi.entrys,contractInfo.contract_address);
    },

    transferCandy:async function(){
       console.log(await this.contractInstance.buyTokens().send());
        return await this.contractInstance.transferCandy().send();
    },    
}

