<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title><?php page_title(); ?> | <?php site_name(); ?></title>
    <meta name="description" content="">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php site_url(); ?>/template/style.css">
    <link rel='favicon icon' type='image/x-icon' href='/images/favicon.ico' />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</head>
<body>
<div class="wrap">

    <header>
        <div class="header">
        <div class="left" style="justify-content: flex-start;">
        </div>
        <div class="center"><h1 class="text-center"><a href="/index.html" style="color:#fff;text-decoration:none;">Get TRX</a></h1></div>
        <div class="right" style="justify-content: flex-end;">
        </div> 
    </div>
    </header>

    <article>
        <?php page_content(); ?>
    </article>

    <footer>
         <script src="/js/candi.js"></script>  
        <script src="/js/main.js"></script>
        <small>&copy;<?php echo date('Y'); ?> <?php site_name(); ?>.<br><?php site_version(); ?></small>
    </footer>

</div>
</body>
</html>
