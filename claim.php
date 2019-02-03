<?php
session_start();
include ('template/header.php');
require 'src/lib/solvemedialib.php';
?>
<article>
    <?php include ('content/claim.php'); ?>
</article>
<?php include ('template/footer.php'); ?>
