<?php
require 'src/lib/solvemedialib.php';
$privkey="FjmpDymsxjGHoE4kjLBWlxAwDbowmDUK";  // SolveMedia Key
$hashkey="lt5d05u8AQOj9ZwpGKxE8U.ELJQPruBd";  // SolveMedia Key
if($_POST)
{
    $solvemedia_response = solvemedia_check_answer($privkey,
		$_SERVER["REMOTE_ADDR"],
		$_POST["adcopy_challenge"],
		$_POST["adcopy_response"],
		$hashkey);
	if(!$solvemedia_response->is_valid) 
	{
                //echo "<script>window.setTimeout(function(){location.reload(true)},200)</script>";
		echo "<script>$('#capt').hide();</script>"; 
		echo "<div class='alert alert-danger'>Captcha Enter is Incorrect!</div>";
		echo "<script>$('#verify').text('Try Again');</script>"; 
		echo "<script>$('#verify').click(function(){location.reload();});</script>"; 
		
	}
    else  
    { 
	    echo '<script>let mint = (async function(){
	    var check = await TRON.canReceive() })();
	    console.log(check);
	    if (check == true) {
		    $("#verify").html("can receive");
	    } else { $("#verify").html("can not receive"); }</script>';
     //echo "<script>$('#human_verify').modal('hide');</script>"; 
     //echo "<script>let mint = (async function(){var results = await TRON.receive();})();</script>"; 	    
    }
}
?>
