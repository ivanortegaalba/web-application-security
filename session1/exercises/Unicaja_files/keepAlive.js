var request = null;
var respuestaAJAXRecibida = true;
var peticionAJAXEnviada = false;

var renovarFormulario = false;
var renovarFormularioDNIe = false;

setInterval("peticionAJAXEnviada = false;", 300000);

function comprobarValidezSesion(idSesion) {
	
	if (peticionAJAXEnviada)
		return;

	if (window.XMLHttpRequest) {
		// Si es Mozilla, Safari etc
		request = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// pero si es Internet Explorer
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			// en caso que sea una versión antigua
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) { }
		}
	}
	
	peticionAJAXEnviada = true;
	respuestaAJAXRecibida = false;
	sendRequest("/univia/servlet/KeepAliveServlet");
}

function sendRequest(url) {
	request.open("POST", url, true);
	request.onreadystatechange = renovarParametros;
	request.send(null);
}

function checkReadyState(obj) {
	if(obj.readyState == 4) {
		if(obj.status == 200) {
			return true;
		}
	}
}

function renovarParametros() {
	if(checkReadyState(request)) {
		var response = request.responseXML.documentElement;
		claveDES = response.getElementsByTagName('clave')[0].firstChild.data;
		respuestaAJAXRecibida = true;
	}
}

//-----------------------------------------
function comprobarSesionUnivia(idSesion) {

	if (window.XMLHttpRequest) {
		// Si es Mozilla, Safari etc
		request = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// pero si es Internet Explorer
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			// en caso que sea una versión antigua
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) { }
		}
	}
	peticionAJAXEnviada = true;
	respuestaAJAXRecibida = false;
	sendRequestUnivia("/univia/servlet/KeepAliveServlet");
}

function sendRequestUnivia(url) {
	request.open("POST", url, true);
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.onreadystatechange = reloadIfCaducada;
	request.send("userbd=exist");
}

function reloadIfCaducada() {
	if(checkReadyState(request)) {
		var response = request.responseXML.documentElement;
		var sesionCaducada = response.getElementsByTagName('sesion_caducada')[0].firstChild.data;
		if (sesionCaducada == "true") {
			window.location.reload();
		}
	}
}
