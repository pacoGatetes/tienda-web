<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>

<body>
	<?php 
	
	$busqueda=$_GET["buscar"];
	
	require("datos_conexion.php");
	
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra);
	if(mysqli_connect_errno()){
		
		echo "Fallo la conexion BBDD";
		exit();
	}
	
	mysqli_select_db($conexion, $db_nombre) or die ("no se encuentra la BBDD");
	
	mysqli_set_charset($conexion, "utf8");
	
	$consulta="SELECT * FROM PRODUCTOS WHERE NOMBREARTÍCULO LIKE '%$busqueda%'";
	
	$resultados=mysqli_query($conexion, $consulta);
	
	while ($fila=mysqli_fetch_array($resultados, MYSQLI_ASSOC)){
		
		
		echo $fila['CÓDIGOARTÍCULO'];
		echo $fila['NOMBREARTÍCULO'];
		echo $fila['PAÍSDEORIGEN'];
		
		echo"<br>";
		echo"<br>";
	}
	
	mysqli_close($conexion);
	?>
</body>
</html>