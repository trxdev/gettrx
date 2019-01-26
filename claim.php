<?php
session_start();
include ('template/header.php');
require 'src/lib/solvemedialib.php';

error_reporting(E_ALL);

$privkey="FjmpDymsxjGHoE4kjLBWlxAwDbowmDUK";  // SolveMedia Key
$hashkey="lt5d05u8AQOj9ZwpGKxE8U.ELJQPruBd";  // SolveMedia Key

?>
<article>
	<?php include ('content/claim.php'); ?>
</article>
<?php include ('template/footer.php'); ?>
