 
<?php
	$tireqty = (int) $_POST['tireqty'];
	$oilqty = (int) $_POST['oilqty'];
	$sparkqty = (int) $_POST['sparktqy'];
	$address = preg_replace('/\ t|\R/','',$_POST['adress']);
	$document_root = $_SERVER['DOCUMENT_ROOT'];
	$date = date('H:i, js F Y');
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Bob`s Auto Parts - Order Results</title>
</head>

<body>
	
	<h1>Bob`s Auto Parts</h1>
	
		<h2>Order Results</h2>
	
	
	
	<?php
	echo "<p>Order processed at ". date('H:i, js F Y')."</p>";
	echo "<p> Your order is as follows: </p>";
	

	$totalqty = 0;
	$totalamount = 0;
	
	define('TIREPRICE', 100);
	define('OILPRICE', 10);
	define('SPARKPRICE', 4);
	
	$totalqty = $tireqty + $oilqty + $sparkqty;
	echo "<p>Items orderd: ".$totalqty."<br/>";
	
	if ($totalqty == 0){
		echo "You did not order anything on teh previous page!<br/>";
	}else{
		if ($tireqty > 0){
			Echo htmlspecialchars($tireqty). ' tires<br/>';
		}
		if ($oilqty > 0){
			echo htmlspecialchars($oilqty). 'botteles of oil<br/>';
		}
		if ($sparkqty > 0){
			echo htmlspecialchars($sparkqty). ' spark plugs<br/>';
		}
	}
	
	
	$totalamount = $tireqty * TIREPRICE
				+ $oilqty * OILPRICE
				+ $sparkqty * SPARKPRICE;
	
	echo "subtotal: $". number_format($totalamount,2)."<br/>";
	
	$taxrate = 0.10; // este es el impuesto 10%
	$totalamount = $totalamount * (1 + $taxrate);
	echo "Total including tax: $". number_format($totalamount,2)."</p>";
	
	echo "<p>Adress to ship to is ".htmlspecialchars ($address)."</P>";
	
	$outputatring = $date."\t".$tireqty." tires \t".$oilqty. "oil\t".$sparkqty." spark plugs\t\s". $totalamount."\t". $address."\n";
	
	//Abrir archivo para adjuntar
	@$fp = fopen("$document_root/../orders/orders.txt", 'ab');
	
	if (!$fp){
		
		echo "<p> <strong> You order coul not be procesad at this time. Please try again later.</strom></p>";
		exit;
	}
	
	flock($fp, LOCK_EX);
	fwrite($fp, $outputatring, strlen($outputatring));
	flock($fp, LOCK_UN);
	fclose($fp);
	
	echo "<p> Orderwritten.</p>";
	?>
	
</body>
</html>











