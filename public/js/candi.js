var TRON={
    CONTRACT_ADDRESS:"TJHfHUk2YxXXiAspfx2kfAPZaAQasSmaZ2",
    contractInstance:"",
    init:async function(){
        var contractInfo=await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance=window.tronWeb.contract(contractInfo.abi.entrys,contractInfo.contract_address);
    },

    transferCandy:async function(){
       //console.log(await this.contractInstance.transferCandy().send());
        //return await this.contractInstance.transferCandy().send();
    },   
    getCandy:async function(){
        //console.log(await this.contractInstance.getCandy(123).send());
        //return (await this.contractInstance.getCandy(123).call());
    },     
userTotalPixels:async function(){
        console.log(await this.contractInstance.userTotalPixels(tronWeb.defaultAddress.hex).call());
}, 
}

