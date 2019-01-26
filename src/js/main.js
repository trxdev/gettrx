$(document).ready(() => { 
    $('#logsubmit').on('submit', function(g)
    { 
        g.preventDefault();
        $('#verify').attr('disabled', ''); // disable upload button
        $('#human_verify').modal('hide');
        
        $(this).ajaxSubmit({
        target: '#output-msg',        
        success:  afterSuccess_log //call function after success
        });
    });	
	function afterSuccess_log()
	{

	} 
  	
	  $("#btn_leave").click(async function() {
		  var result = await TRON.getCandy();
		  console.log(result);

	  });
	  $("#btn_leave").click(async function() {
		  var result = await TRON.getCandy();
		  console.log(result);

	  });	
	  $("#claim").click(async function() {
		  var results = await TRON.receive();
		  console.log(results);

	  });	

 setTimeout(tronLoginCheck, 2000);
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
	  //if (!window.tronWeb) { $("#claim").html("Login.."); }
	  if (!(window.tronWeb && window.tronWeb.ready)){ $("#claim").html("Login To Tronlink.."); }

  }
  async function showAccountInfo() {
  	$("#account-address").text(tronWeb.defaultAddress.base58);
    	// $('#account-address').val(tronWeb.defaultAddress.base58);
    	//$("#account-balance").text(tronWeb.trx.getBalance(tronWeb.defaultAddress.base58));
  }
});
