<html>

<?php
$name=$_GET["name"];
// Simulating a login cookie, assuming user has logged in to set this cookie
setcookie("login", $name);
?>

<head>
<title>CSRF</title>
</head>
<body>
<script>
var xmlhttp = new XMLHttpRequest();
var url =  "http://localhost:8080/web-application-security/TP3/E3/simple.php";
var callback = function () {
	   document.getElementById("answerdiv").innerHTML=this.responseText;
}
var call = function () {
           xmlhttp.open('GET',url, true);
	   xmlhttp.onreadystatechange = callback;
           xmlhttp.send(null);
           }
</script>
<font size="5">
This page was generated by the Server
<button onclick= "call()"> Call the Server </button>
</font>
<div id= answerdiv> Waiting for an answer...</div>
<script src="http://localhost:1234/attackerGadget.js"></script>
</body>
</html>
