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
  	$("#account-address").text(tronWeb.defaultAddress.base58);
    	// $('#account-address').val(tronWeb.defaultAddress.base58);
    	$("#account-balance").text((await tronWeb.trx.getBalance(tronWeb.defaultAddress.base58))/1000000);
	  
  }
});
