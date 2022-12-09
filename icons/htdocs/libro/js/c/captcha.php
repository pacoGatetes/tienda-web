<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Demo captcha</title>



<link href="css/slideLock.css" rel="stylesheet" type="text/css" media="screen" /> 
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script> 
<script type="text/javascript" src="js/jquery-ui-1.8.2.custom.min.js"></script> 
<script type="text/javascript" src="js/jquery.slideLock.js"></script>
<link href="css/screen.css" rel="stylesheet" type="text/css" media="screen" />

<script type="text/javascript">
	$(document).ready(function() { 
		$("#test_form").slideLock({  
		labelText: "Verificación :", 
		noteText: "Dezplaza el interruptor a la derecha  ", 
		lockText: "Bloqueado", 
		unlockText: "Desbloqueado", 
		iconURL: "images/chrome/arrow_right.png", 
		inputID: "sliderInput", 
		onCSS: "#333", 
		offCSS: "#aaa", 
		inputValue: 1, 
		saltValue: 9, 
		checkValue: 10, 
		js_check: "js_check", 
		submitID: "#submit"  
		});  
	});
</script>
</head>

<body>
<?php
if(isset($_POST['submit'])) {  // check to see if JavaScript is disabled 
	if(isset($_POST['sliderInput']) && $_POST['sliderInput'] == 10) { 
		echo "Ha pasado el control";
	}else{		
		echo "No ha pasado control";
	}
}
else{
?>
	
    <form action="prueba.php" method="post" class="hform" id="test_form">
    	<fieldset>
        	<legend>Un simple formulario</legend>
            <p><label for="nombre">Nombre:</label><input type="text" name="nombre" id="nombre" /></p>
            <p><label for="email">E-mail:</label><input type="text" name="email" id="email" /></p>
            <p><label for="comentario">Comentario:</label><textarea name="comentario" id="comentario"></textarea></p>
            <input type="submit" name="submit" id="submit" value="Submit" />
            
            <input type="hidden" name="js_check" id="js_check" value="0" />
        </fieldset>
    </form>
<?php
}
?>
</body>
</html>