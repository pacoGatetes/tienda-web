<?php
$conn = mysqli_connect("localhost", "root", "", "tbl_tutorials");

$affectedRow = 0;

$xml = simplexml_load_file("stock.xml") or die("Error: Cannot create object from XML");

foreach ($xml->children() as $row) {
    $codigo = $row->codigo;
    $familia = $row->familia;
    $subfamilia = $row->subfamilia;
    $subfamilia2 = $row->subfamilia2;
    $subfamilia3 = $row->subfamilia3;
    $subfamilia4 = $row->subfamilia4;

    $sql ="INSERT INTO stock-web(codigo,familia,subfamilia,subfamilia2,subfamilia3,subfamilia4) VALUES('" .$codigo . "','" . $familia . "','" . $subfamilia . "','" . $subfamilia2 . "','" . $subfamilia3 . "','" .$subfamilia4 ."')";

    $result = mysqli_query($conn, $sql);

    if (!empty($result)){
        $affectedRow ++;
    }else {
        $error_message = mysqli_error($conn) . "n";
    }

}

?>

<h2>Insert XML Data to MySql Table Ouput</h2>

<?php
if ($affectedRow > 0){
    $message = $affectedRow . "records inserted";
}else {
    $message = "No records inserted";
}
?>
<style>
    body{
        max-width: 550px;
        font-family: Arial;
    }
    .affected-row {
        background: #cae4ca;
        padding:10px;
        margin-bottom: 20px;
        border: #bbd6bd 1px solid;
        border-radius: 2px;
        color: #6e716e;
    }
    .error-message {
        background: #eac0c0;
        padding: 10px;
        margin-bottom: 20px;
        border: #dab2b2 1px solid;
        border-radius: 2px;
        color: #5d5b5b;
    }


</style>
<div class="affected-row">
    <?php echo $message; ?>
</div>
<?php if (! empty($error_messages)) { ?>
    <div class="error-message">
        <?php echo nl2br($error_message); ?>
    </div>
    <?php } ?>