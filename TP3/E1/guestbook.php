<html>
<?php
    $file="messages.txt";
    $messages=file_get_contents($file);
 ?>

    <head>
        <script src="script-corrected.js">
            /*function save(){
                    var callback = function () {
                    var show=document.getElementById("show");
            	show.innerHTML= xmlhttp.responseText;
                 } ;
                 var input=document.getElementById("message").value;
                 var url = "http://http://localhost:8080/web-application-security/TP3/E1/guestbookleavemessage.php?message="+input;
                 var xmlhttp = new XMLHttpRequest();
                 xmlhttp.open('GET',url, true);
                 xmlhttp.onreadystatechange = callback;
                 xmlhttp.send(null);
             }*/
        </script>

    </head>

    <body>
        <h1>Welcome to our Guest Book, Leave us a Message! </h1>
        <input id="message">
        <button id="add">Leave a message</button>
        <h2>All the messages left by guests </h2>
        <div id="show">
            <?php echo $messages?>
        </div>
    </body>
s
</html>
