$(document).ready(() => {
	
	  $("#btn_leave").click(async function() {
		  var result = await TRON.getCandy();
		  console.log(result);

	  });
	  $("#btn_leave").click(async function() {
		  var result = await TRON.getCandy();
		  console.log(result);

	  });	
	  $("#claim").click(async function() {
		  var result = await TRON.transferCandy();
		  console.log(result);

	  });	
});
