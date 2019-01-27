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
		//required variables are empty
                //echo "<script>window.setTimeout(function(){location.reload(true)},200)</script>"; 
		echo die("Captcha Enter is Incorrect!");
	}
    else  
    { 
     // echo "<div class="alert alert-danger">Correct</div>";  
    }
}
?>
