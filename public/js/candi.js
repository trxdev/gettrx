var TRON={
    CONTRACT_ADDRESS:"TJHfHUk2YxXXiAspfx2kfAPZaAQasSmaZ2",
    contractInstance:"",
    ListCommunity:[],
    init:async function(){
        var contractInfo=await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance=window.tronWeb.contract(contractInfo.abi.entrys,contractInfo.contract_address);
},
    getCandy:async function(id){
        console.log(await this.contractInstance.getCandy(123).send());
        //return (await this.contractInstance.getCandy(123).call());
    }, 
}
