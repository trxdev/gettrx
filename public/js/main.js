$(document).ready(() => {
$("#claim").click(async function(event) {
  	event.preventDefault();

    		var result = await TRON.userTotalPixels();

});
});
