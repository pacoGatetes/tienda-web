<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>

<body>
	
<?php
	
	
	
	//$busqueda=$_GET["buscar"];
	
	$cod=$_GET["c_art"];
	$sec=$_GET["seccion"];
	$nom=$_GET["n_art"];
	$pre=$_GET["precio"];
	$fec=$_GET["fecha"];
	$imp=$_GET["importado"];
	$por=$_GET["p_orig"];
	
	
	require("file:///A|/xampp/htdocs/CURSO_PHP/datos_conexion.php");
	
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra);
	
	if(mysqli_connect_errno()){
		
		echo "Fallo al conetar con la BBDD";
		
		exit();
	}
	
	mysqli_select_db($conexion,$db_nombre) or die ("No se encuentra la BBDD");
	
	mysqli_set_charset($conexion,"utf8");// para poner los carateres en castellano.
	
	$consula="UPDATE PRODUCTOS SET CÓDIGOARTÍCULO='$cod', SECCIÓN='$sec', NOMBREARTÍCULO='$nom', PRECIO='$pre', FECHA='$fec', IMPORTADO='$imp', PAÍSDEORIGEN='$por' WHERE CÓDIGOARTÍCULO='$cod'";
	
	$resultados=mysqli_query($conexion, $consula);
	
	if($resultados==false){
		
		echo "Error en la consulta";
		
	}else{
		
		echo "Registro guardado<br><br>";
		
		echo "<table><tr><td>$cod</tr></tr>";
		echo "<table><tr><td>$sec</td></tr>";
		echo "<table><tr><td>$nom</td></tr>";
		echo "<table><tr><td>$pre</td></tr>";
		echo "<table><tr><td>$fec</td></tr>";
		echo "<table><tr><td>$imp</td></tr>";
		echo "<table><tr><td>$por</td></tr></table>";
		
	}
	
	
	
	
	mysqli_close($conexion);
	
?>
</body>
</html>