<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
	<?php 
	
	function ejecuta_consulta($labusqueda){
		
	require("datos_conexion.php");
	
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra);
	if(mysqli_connect_errno()){
		
		echo "Fallo la conexion BBDD";
		exit();
	}
	
	mysqli_select_db($conexion, $db_nombre) or die ("no se encuentra la BBDD");
	
	mysqli_set_charset($conexion, "utf8");
	
	$consulta="SELECT * FROM PRODUCTOS WHERE NOMBREARTÍCULO LIKE '%$labusqueda%'";
	
	$resultados=mysqli_query($conexion, $consulta);
	
	while ($fila=mysqli_fetch_array($resultados, MYSQLI_ASSOC)){
		
		
		echo $fila['CÓDIGOARTÍCULO'];
		echo $fila['NOMBREARTÍCULO'];
		echo $fila['PAÍSDEORIGEN'];
		
		echo"<br>";
		echo"<br>";
	}
	
	mysqli_close($conexion);
		
		}
	
	?>
</head>

<body>
	
	<?php 
	
	$mibusqueda=$_GET["buscar"];//para que no de este error, hay que subir la página al servidor
	
	$mipagina=$_SERVER["PHP_SELF"];// con esta variable le estamos diciendo a la página que se tiene que llamar a ella misma
	
	if($mibusqueda!=NULL){
		
		ejecuta_consulta($mibusqueda);
	}else{
		
		echo("<form action='" . $mipagina . "' method='get'>
		
		<label> Buscar:<input type='text' name='buscar'></label>
			<input type='submit' name='enviado' value='Dale'>
		</form>");
	}
		
	
	?>
	
	
	
	
</body>
</html>