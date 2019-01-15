$(document).ready(() => {
    let intervalID = setInterval(function () {
    if (typeof window.tronWeb == 'object') {
      window.tronWeb.on("addressChanged", showAccountInfo)
      clearInterval(intervalID);
    }
}, 10)
$("#claim").click(async function(event) {
  	event.preventDefault();

    		var result = await TRON.userTotalPixels();

});
});
