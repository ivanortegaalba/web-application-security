function save() {
    var callback = function() {
        var show = document.getElementById("show");
        show.innerHTML = xmlhttp.responseText;
    };
    var input = document.getElementById("message").value;
    var url = "http://localhost:8080/web-application-security/TP3/examples/guestbookleavemessage.php?message=" + input;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = callback;
    xmlhttp.send(null);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add').addEventListener('click', save)
})
