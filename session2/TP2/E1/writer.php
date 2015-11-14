<?php
    $myFile = "secrets.txt";

    $fh = fopen($myFile, 'w') or die("can't open file");
    $stringData = $_POST["secret"];
    fwrite($fh, $stringData);
    fclose($fh);
?>
