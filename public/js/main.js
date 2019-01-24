$(document).ready(() => {
async function tronLoginCheck() {
  	try {
  		if (!(window.tronWeb && window.tronWeb.ready));
  		$("#claim").html('Login..');
  		setTimeout(function() {
  			$("#loading-page").modal("hide");
  			showAccountInfo();
  		}, 1000);
  	} 
  	}
	  $("#btn_leave").click(async function() {
		  var result = await TRON.getCandy();
		  console.log(result);

	  });
	  $("#btn_leave").click(async function() {
		  var result = await TRON.getCandy();
		  console.log(result);

	  });	
	  $("#claimt").click(async function() {
		  var results = await TRON.receive();
		  console.log(results);

	  });	
});
