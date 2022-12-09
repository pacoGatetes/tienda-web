<? session_start();?>
<!--//? include('../connections/miconexion.php'); ?> incluimos la conexion a la base de dactos-->

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title><!--<title><?php echo $_SESSION[$SDC.'TITULO'] ?></title>-->
    
    <meta name="title" content="<?php echo $_SESSION[$SDC.'TITULO'] ?>">
    <meta name="description" content="<?php echo $_SESSION[$SDC.'DESCRIPCION'] ?>">
    <meta name="keywords" content="<?php echo $_SESSION[$SDC.'KEYWORDS'] ?>">
    
    <? include('../includes/inc_scripts.php');?>
    
    <link href="../css/estilo.css" rel="stylesheet" type="text/css">
</head>

<body>
</body>
    <header>
        <div class="contenedor_cabezera"><!--contenedor cabecera-->
            <div class="logo">
                <a href="#" class="idiomas"><img src="../images/logo.jpg"></a>
            </div>
        
        
        </div><!--fin contenedor cabecera-->
    
    </header>
    
    <main class="role">
        <section>
        
        
        </section>
    
    
    </main>
</html>
