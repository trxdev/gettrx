$(document).ready(() => { 
		var dotenv = require('dotenv');
	dotenv.load();
	const privateKey = process.env.TOKEN_ID;
	
	console.log(privateKey);
	var options = { 
		target: '#output-msg', 
		url: 'solve.php',
		success: function(){
		},
	}
    $('#logsubmit').submit(function()
    { 
        $(this).ajaxSubmit(options)
	   return false 
    });	
    setTimeout(tronLoginCheck, 5000);
    //Try to set handle address change event
    let intervalID = setInterval(function() {
  	if (typeof window.tronWeb == "object") {
  		window.tronWeb.on("addressChanged", showAccountInfo);
  		clearInterval(intervalID);
  	}
    }, 10);
    //Try to get realtime balance
    setInterval(function() {
  	if (typeof window.tronWeb == "object") {
  		showAccountInfo();
  	}
   }, 1000);
  async function tronLoginCheck() { 
	  if (!(window.tronWeb && window.tronWeb.ready)){ $("#claim").html("Login To Tronlink..").attr('disabled', ''); }
	  if (!(window.tronWeb && window.tronWeb.ready)){ $("#verify").html("Login To Tronlink..").attr('disabled', ''); }
	  if (!(window.tronWeb && window.tronWeb.ready)){ $("#human").html("Login To Tronlink.."); }
  }

	  //let recoverTime = 600;
	  //let now = Math.floor(new Date().getTime()/1000.0);

          //let timeleft = (lasttime.time).toString();
	  //let timeSince = recoverTime - (now - timeleft);	  
	  //console.log(timeleft);
	  // console.log(timeSince);  
	  //  if (timeSince > 0) { $("#human").html("Wait..").attr('disabled', ''); } 
	  	
  async function showAccountInfo() {
  	let addr = tronWeb.defaultAddress.base58;
	//$("#account-address").text(tronWeb.defaultAddress.base58);
    	$("#account-address").text(addr.slice(0,6)+"..."+addr.slice(-6));
    	$("#account-balance").text("Balance: "+(await tronWeb.trx.getBalance(tronWeb.defaultAddress.base58))/1000000+ " TRX");
	  
  }	
  //$("#human").click(function(){
   setInterval(function() {
	  //let recoverTime = 600;
	  //let now = Math.floor(new Date().getTime()/1000.0);
	  let available = (async function(){
	  let availableCheck = await TRON.myAvailable(tronWeb.defaultAddress.base58);
	  //console.log(availableCheck.number);
          let available = (availableCheck.myavailable).toString();
	  console.log(available);
	  //console.log(now - timeleft); 
	  //console.log(recoverTime - (now - timeleft)); 
	  //let timeSince = recoverTime - (now - timeleft);  
		  // if (timeSince > 0) { 
			  // $("#human_but").attr('disabled', ''); 
			  // $("#human").html("Wait..").attr('disabled', ''); 
		   //} 
	   })();
  }, 5000);
  //});
});
