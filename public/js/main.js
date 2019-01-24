$(document).ready(() => { 
  	
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
	  if (!window.tronWeb) { $("#claim").html("Login.."); }
	  //if (!(window.tronWeb && window.tronWeb.ready)){ $("#claim").html("Login.."); }
  	try {
  		if (!window.tronWeb) throw "You must install tronlink extension";
  		if (!(window.tronWeb && window.tronWeb.ready))
  			throw "Login to Tronlink to get going";
  		$("#claim").html("Login..");
  		setTimeout(function() {
  			$("#loading-page").modal("hide");
  			showAccountInfo();
  		}, 1000);
  	} catch (e) {
  		showModal("Stop", e, tronLoginCheck);
  	}
  }
  async function showAccountInfo() {
  	$("#account-address").text(tronWeb.defaultAddress.base58);
    // $('#account-address').val(tronWeb.defaultAddress.base58);
    $("#account-balance").text(
    	(await tronWeb.trx.getBalance(tronWeb.defaultAddress.hex)) / 1000000
    	);
    // $('#account-balance').val((await tronWeb.trx.getBalance(tronWeb.defaultAddress.hex)).toLocaleString("en-us"));
    var test = await TRON.usertoCommunity();

    if (isEmpty(test) || hex2a(test) == "") {
    	$("#LeaveCommunityDiv").hide();
    	$(".communityData").hide();
    } else {
    	$("#currentCommunity").val(hex2a(test));
    	$("#JoinCommunityDiv").hide();
    }
  }
  function showModal(title, content, callback) {
  	$("#alert-title").text(title);
  	$("#alert-content").html(content);
  	$("#alert-modal").modal("show");
  	$("#alert-modal").on("hidden.bs.modal", function(e) {
  		callback();
  	});
  }

  function showModalSuccess(title, content, callback) {
  	$("#alert-title-success").text(title);
  	$("#alert-content-success").html(content);
  	$("#alert-modal-success").modal("show");
  	$("#alert-modal-success").on("hidden.bs.modal", function(e) {
  		callback();
  	});
  }

  function showModalError(title, content, callback) {
  	$("#alert-title-error").text(title);
  	$("#alert-content-error").html(content);
  	$("#alert-modal-error").modal("show");
  	$("#alert-modal-error").on("hidden.bs.modal", function(e) {
  		callback();
  	});
  }
});
