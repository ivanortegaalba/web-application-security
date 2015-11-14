var secret= document.getElementById("secret").textContent;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
 if (xhttp.readyState==4 && xhttp.status==200)
  {
alert('Done')
  }
}

xhttp.open("POST","writer.php",true);
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send("secret="+secret);
