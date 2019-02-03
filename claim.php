<?php
session_start();
include ('template/header.php');
require 'src/lib/solvemedialib.php';
?>
<article>
    <?php include ('content/claim.php'); 
    echo $TOKEN_ID = getenv('TOKEN_ID'); ?>
</article>
<?php include ('template/footer.php'); ?>
