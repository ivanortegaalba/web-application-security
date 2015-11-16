<html>
<?php 
$name=$_GET["name"]; 
setcookie("Cookie1", $name);
setcookie("Cookie2", $name, time()+5);  /* expire in 1 second*/
?>
<head>
<title>Cookies</title>
</head>
<body>
Cookie example, hello <?php echo $name;?>
<script>
  alert(document.cookie) ;
</script>
<img name="cookie" src=P4171838.JPG >
<script>
  alert(document.cookie) ;
</script>
</body>
</html>