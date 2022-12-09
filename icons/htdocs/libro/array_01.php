<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>

<body>
	
	<?php 
	
	$alimentos=array("fruta"=>array("tropical"=>"kiwi",
									"citrico"=>"mandariana",
							   		"otros"=>"manzana"),
					 "leche"=>array("animal"=>"vaca",
									"vegetal"=>"coco"),
					 "carne"=>array("vacuno"=>"lomo",
								    "porcino"=>"pata"));
	echo var_dump($alimentos)."<br>";
	
	//echo $alimentos["carne"]["vacuno"];
	
	/*foreach($alimentos as $clave_alim=>$alim){
		
	echo "$clave_alim:<br>";
		
		while(list($clave,$valor)=each($alin)){
			
			echo "$clave=$valor<br>";
		}
		echo "<br>";
	}

/*$semana[]="Lunes";
$semana[]="Martes";
$semana[]="Miércoles";
$semana[]="Jueves";
	for($i=0;$i<count($semana);$i++){
			echo $semana[$i] . "<br>";
	}
	
	$semana[]="viernes";
		
	
	
	/*$semana=array("Lunes","Martes","Miércoles","Jueves");

echo $semana[3];*/
	
	//$datos=array("Nombre"=>"Juan","Apellido"=>"Gomez","Edad"=>21);
	
	//echo $datos["Apellido"];

	//foreach($datos as $clave=>$valor){//
		
		//echo "A $clave le corresponde $valor<br>";
	//}//



?>
</body>
</html>