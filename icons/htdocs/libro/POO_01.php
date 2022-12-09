<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>

<body>
<?php
	
	include("vehiculo.php");
	
	$mazda=new Coche();
	
	$pegaso=new Camion();
	
	
	echo "El Mazda tiene " . $mazda->get_ruedas() . " ruedas<br>";
	echo "El Pegaso tiene " . $pegaso->get_ruedas() . " ruedas<br>";
	echo "El Mazda tiene un motor de " . $mazda->get_motor() . " cc<br>";
	
	

	
	
	
?>
	
</body>
</html>