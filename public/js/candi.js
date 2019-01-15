var TRON={
    CONTRACT_ADDRESS:"TUhKFyGMi28AXgtgRK9arucSC2mz3XDFgx",
    contractInstance:"",
    init:async function(){
        var contractInfo=await window.tronWeb.trx.getContract(this.CONTRACT_ADDRESS);
        this.contractInstance=window.tronWeb.contract(contractInfo.abi.entrys,contractInfo.contract_address);
    },
    createNewCommunicty:async function(name){
        return await this.contractInstance.createNewCommunicty(StringToBytes(name)).send({callValue:1000000000});
    },
    buyTokens:async function(value){
       //console.log(await this.contractInstance.buyTokens().send({callValue:100000000}));
       //let buyPrice = await this.contractInstance.buyPrice().call();
       //console.log(buyPrice._hex);
        let buyPrice = 100000
        let callValue = parseInt(value)/10
        callValue = callValue * 1000000
        return await this.contractInstance.buyTokens().send({callValue:callValue});
    },    

    leaveCommunity:async function(){
       return await this.contractInstance.leaveCommunity().send({callValue:1000000});
    },
    usertoCommunity:async function(){
        //console.log(await this.contractInstance.usertoCommunity(tronWeb.defaultAddress.hex).call());
        //return hex2a((await this.contractInstance.usertoCommunity(tronWeb.defaultAddress.hex).call()).slice(2));
        return (await this.contractInstance.usertoCommunity(tronWeb.defaultAddress.hex).call()).slice(2);
    },
    balanceOf:async function(){
        return (await this.contractInstance.balanceOf(tronWeb.defaultAddress.hex).call()/100000000);
    },
    communityPoolVolume:async function(){
        return (await this.contractInstance.communityPoolVolume().call()).toString()/1000000;
    },
    checkWinnerCommunity:async function(){
        return hex2a((await this.contractInstance.checkWinnerCommunity().call()).substr(2));
    },
    viewCommunityExist:async function(community){
        return (await this.contractInstance.viewCommunityExist(StringToBytes(community)).call());
    },
    viewPixelOwner:async function(pixelXY){
        return (await this.contractInstance.viewPixelOwner(pixelXY).call());
    },
    viewALLPixelDimensions:async function(){
        return (await this.contractInstance.viewALLPixelDimensions().call());
    },
    viewALLPixelColors:async function(){
        return (await this.contractInstance.viewALLPixelColors().call());
    },
}


async function upDateGameStatus(){
    $('#CommunityPixels').val(await TRON.viewTotalPixelsInCommunity());
    $('#UserPixels').val(await TRON.userTotalPixels());
    $('#CommunityUsers').val(await TRON.viewTotalUsersInCommunity());
    $('#UserTokens').html(await TRON.balanceOf());
    $('#pool_value_dividend').val(await TRON.communityPoolVolume());
    let pool_value = await TRON.communityPoolVolume()
    $('#pool_value').html(pool_value);
    let dividend = (await TRON.communityPoolVolume()*70)/100;
    let share = (((await TRON.userTotalPixels())/(await TRON.viewTotalPixelsInCommunity()))*100).toFixed(2);
    $('#pool_dividend').val(dividend);
    $('#UserShare').val(share);
    $('#possible_income').val(parseInt((dividend * share)/100));
}
setInterval(upDateGameStatus,1000)
