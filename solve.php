<?php
require 'includes/config.php';
require 'src/lib/solvemedialib.php';
//echo $mario = '<input type="hidden" value="echo $TOKEN_ID">';
if($_POST)
{
    $solvemedia_response = solvemedia_check_answer($privkey,
		$_SERVER["REMOTE_ADDR"],
		$_POST["adcopy_challenge"],
		$_POST["adcopy_response"],
		$hashkey);
	if(!$solvemedia_response->is_valid) 
	{
		echo "<script>$('#capt').hide();</script>"; 
		echo "<div class='alert alert-danger'>Captcha Enter is Incorrect!</div>";
		echo "<script>$('#verify').text('Try Again');</script>"; 
		echo "<script>$('#verify').click(function(){location.reload();});</script>"; 
	} else  { 
	    echo '<script>
	    let ditp = (async function(){
	    var check = await TRON.canReceive(tronWeb.defaultAddress.base58);
	    if (check.can === true) {
	    	
		    $("#verify").html("Claiming ...");
		    exec('/src/js/serve.js', $output);
		    $("#human_verify").modal("hide");
		    setTimeout(function(){location.reload();}, 500);
	    } else { $("#capt").replaceWith("<h3>Looks there is some issue!</h3>");
	   	     $("#verify").html("Tr Again...");  
		     setTimeout(function(){location.reload();}, 1000);
	    } })();</script>';	    
    }
}
?>
<script>

</script>
