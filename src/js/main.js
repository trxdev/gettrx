$(document).ready(() => { 
	var options = { 
		target: '#output-msg', 
		url: 'solve.php',
		success: function(){
		},
	}
    $('#logsubmit').submit(function()
    { 
        //g.preventDefault();
        //$('#verify').attr('disabled', ''); // disable upload button
        //$('#human_verify').modal('hide');
        
        $(this).ajaxSubmit(options)
	   return false 
    });	
    console.log(window.tronWeb);
    if (window.tronWeb) console.log(window.tronWeb.ready);
    setTimeout(()=>{
    console.log('hello');
    console.log(window.tronWeb);
    if (window.tronWeb) console.log(window.tronWeb.ready);}, 500
    )
	
 setTimeout(tronLoginCheck, 500);
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
    	//$("#account-balance").text(tronWeb.trx.getBalance(tronWeb.defaultAddress.base58));
  }
});
