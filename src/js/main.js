$(document).ready(() => { 
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
  async function showAccountInfo() {
  	let addr = tronWeb.defaultAddress.base58;
	//$("#account-address").text(tronWeb.defaultAddress.base58);
    	$("#account-address").text(addr.slice(0,6)+"..."+addr.slice(-6));
    	$("#account-balance").text("Balance: "+(await tronWeb.trx.getBalance(tronWeb.defaultAddress.base58))/1000000+ " TRX");
	  
  }
  $("#human").click(function(){
	  function time(ms) {
            return new Date(ms).toISOString().slice(11, -1);
	  }
	  let now = Math.floor(new Date().getTime()/1000.0);
	  let timecall = (async function(){
	  let lasttime = await TRON.myLastReceive(tronWeb.defaultAddress.base58);
          let timeleft = (lasttime.time).toString()
	  console.log(timeleft);
		 console.log(time(now - timeleft)); 
	   })();	
	  
	  
  });
});
