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
	}
    else  
    { 
     //echo "<div class="alert alert-success">Correct</div>";  
    }
}
?>
