<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
	
	<style>
		table{
			width: 300px;
			margin: auto;
			background-color: antiquewhite;
			border: 2px solid #C00E11;
		}
		
		td{
			text-align: center;
		}
	
	</style>
</head>

<body>
	
	<form action="Pagina_busqueda_PDO.php" method="get">
	<table><tr><td>
	
		Seccion:</td><td> <input type="text" name="seccion"></td></tr>
		<tr><td>Pais de Origen:</td><td> <input type="text" name="p_orig"></td></tr>
		<tr><td colspan="2"><input type="submit" name="enviar" value="Dale">
		</td></tr>
	</table>
	</form>
	
	
</body>
</html>