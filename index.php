<?php
 echo 'bad';
error_reporting(E_ALL);
require('src/lib/solvemedialib.php');

$privkey="FjmpDymsxjGHoE4kjLBWlxAwDbowmDUK";  // SolveMedia Key
$hashkey="lt5d05u8AQOj9ZwpGKxE8U.ELJQPruBd";  // SolveMedia Key

$solvemedia_response = solvemedia_check_answer($privkey,
					$_SERVER["REMOTE_ADDR"],
					$_POST["adcopy_challenge"],
					$_POST["adcopy_response"],
					$hashkey);

?>


<center><?php echo solvemedia_get_html("xLxIw6ibOZWL52J97WjID7wkCMJzave8"); ?> </center><br>
<p>Not a valid claim session</p>
<?php
//include ('template/header.php');
?>
<h1>good</h1>
