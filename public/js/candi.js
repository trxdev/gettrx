var TRON={
    CONTRACT_ADDRESS:"TJHfHUk2YxXXiAspfx2kfAPZaAQasSmaZ2",
    contractInstance:"",
    ListCommunity:[],
    init:async function(){
        var contractInfo=await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance=window.tronWeb.contract(contractInfo.abi.entrys,contractInfo.contract_address);
    },
    createNewCommunicty:async function(name){
        await this.contractInstance.createNewCommunicty(StringToBytes(name)).send({callValue:1000000000});
    },
    buyTokens:async function(){
        await this.contractInstance.buyTokens().send({callValue:1000000000});
    },     
    transfer:async function(value){
        await this.contractInstance.transfer(tronWeb.defaultAddress.hex,StringToBytes(value)).send({callValue:1000000000});
    },
    buyPixels:async function(pixelsData){
        let buyPositions=[];
        let buyColors=[];
        pixelsData.forEach(item=>{
            let tempPosition=new Uint16Array(2);
            tempPosition.set([item.x,item.y]);
            let position= new Uint8Array(tempPosition.buffer);
            buyPositions.push(position);
            let tempColor=new Uint16Array(3);
            let num=getColor(item.color);
            let b = num & 0xFF;
            let g = (num & 0xFF00) >>> 8;
            let r = (num & 0xFF0000) >>> 16;
            tempColor.set([r,g,b]);
            let color=new Uint8Array(tempColor.buffer);
            buyColors.push(color);
        })
        let buyPrice=10000000*buyColors.length;
        console.log(buyPositions);console.log(buyColors);
        await this.contractInstance.buyPixels(buyPositions,buyColors).send({callValue:buyPrice});
    },
    joinCommunity:async function(name){
        await this.contractInstance.joinCommunity(StringToBytes(name)).send({callValue:100000000});
    },
    leaveCommunity:async function(){
        await this.contractInstance.leaveCommunity().send({callValue:1000000});
    },
    usertoCommunity:async function(){
        //console.log(await this.contractInstance.usertoCommunity(tronWeb.defaultAddress.hex).call());
        return hex2a((await this.contractInstance.usertoCommunity(tronWeb.defaultAddress.hex).call()).slice(2));
    },
    userTotalPixels:async function(){
        return (await this.contractInstance.userTotalPixels(tronWeb.defaultAddress.hex).call());
    },    
    viewTotalPixelsInCommunity:async function(){
        //console.log(await this.contractInstance.viewTotalPixelsInCommunity(StringToBytes(TRON.usertoCommunity())).call());
        return (await this.contractInstance.viewTotalPixelsInCommunity(StringToBytes($('#currentCommunity').val())).call());
    },
    viewTotalUsersInCommunity:async function(){
        return (await this.contractInstance.viewTotalUsersInCommunity(StringToBytes($('#currentCommunity').val())).call());
    },
    balanceOf:async function(){
        return (await this.contractInstance.balanceOf(tronWeb.defaultAddress.hex).call());
    },
    communityPoolVolume:async function(){
        return (await this.contractInstance.communityPoolVolume().call()).toString()/1000000;
    },
    checkWinnerCommunity:async function(){
        return tronWeb.address.fromHex((await this.contractInstance.checkWinnerCommunity().call()).toString());
    }      
}
