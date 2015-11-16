function noesVacio(form) {
	if (form.user.value == "") {
	    alert("Por favor, introduzca su Nombre de Usuario");
		form.user.focus();
		form.user.select();
	
	    return false;
    }
    deleteValues(form);
    return true;
}


function deleteValues(form) {	
   form.usuario.value = form.user.value;
   form.user.value = "";
   form.password.value = cifrar(activeBox2);
   form.clave.value = "";
}


// Teclado virtual - Funciones necesarias 
// Precarga las im?genes del teclado
function precargaImgsTeclado() {
  var teclas = new Array(
  	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  	"q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
  	"a", "s", "d", "f", "g", "h", "j", "k", "l", "nn",
  	"z", "x", "c", "v", "b", "n", "m", "borrar", "aceptar");
	var imgsTeclado = new Array(teclas.length);
	for (var i = 0; i < teclas.length; i++) {
	  imgsTeclado[teclas[i]] = new Array(2);
		imgsTeclado[teclas[i]]["off"] = new Image(26, 26);
		imgsTeclado[teclas[i]]["off"].src = "/resources/teclado/" + teclas[i] + ".gif";
		imgsTeclado[teclas[i]]["on"] = new Image(26, 26);
		imgsTeclado[teclas[i]]["on"].src = "/resources/teclado/" + teclas[i] + "_o.gif";
	}
}


var activeBox = "";  // Mantiene una referencia a la caja de texto activa sobre la que actúa el teclado
var activeBox2 = "";  // Mantiene una referencia a la caja de texto activa sobre la que actúa el teclado
var focusInBox; // Si vale true, indica que alguna de las cajas de texto sobre las que actúa el teclado tiene el foco, si ninguna lo tiene, vale false.
var overKeyboard = false;

function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}

isIE=document.all;
isNN=!document.all&&document.getElementById;
isN4=document.layers;
isActive=false;

 
function ToggleFloatingLayer(DivID, iState) // 1 visible, 0 hidden
{
    if(document.layers)	   //NN4+
    {
       document.layers[DivID].visibility = iState ? "show" : "hide";
    }
    else if(document.getElementById)	  //gecko(NN6) + IE 5+
    {
        var obj = document.getElementById(DivID);
        obj.style.visibility = iState ? "visible" : "hidden";
    }
    else if(document.all)	// IE 4
    {
        document.all[DivID].style.visibility = iState ? "visible" : "hidden";
    }
}


function cerrarPopup(url) {
	window.open(url,'principal');
	self.close();
}

//Flag que indica si se trata de navegador Mozilla o IE
var moz = document.getElementById && !document.all;
//Flag que indica si el teclado virtual está en movimiento
var estoyArrastrando = false;
//Variable para almacenar un puntero al teclado virtual
var dobj;
//Correccion relativa del teclado al ratón
var correccion_x;
var correccion_y;
		
function arrastrarRaton(e){
	if (estoyArrastrando) {
		
		newLeft = moz ? e.clientX : event.clientX;
		newTop = moz ? e.clientY : event.clientY;

		dobj.style.left =  correccion_x + parseInt(newLeft) + 'px';
		dobj.style.top =  correccion_y + parseInt(newTop) + 'px';

		return false;
	}
}

function soltarBoton(e) {	
	estoyArrastrando = false;
}
		
function presionarBoton(e) {
	
	//Obtenemos el elemento sobre el que se ha presionado el botón del ratón
	var fobj = moz ? e.target : event.srcElement;
	var floatingLayer;
	encontradoCabecera=false;
	
	//Buscamos el teclado virtual de todos sobre los que se ha posicionado						
	while (fobj.tagName.toLowerCase() != "html" && fobj.className != "floating-layer") {												
						
		fobj = moz ? fobj.parentNode : fobj.parentElement;			
		
		if (fobj.className == "floating-layer"){
			floatingLayer=fobj;
		}
		
		if (fobj.className == "header-floating-layer"){
			encontradoCabecera=true;
		}
				
	}
		
	// Si hemos obtenido el teclado virtual
	if ((encontradoCabecera)&&(floatingLayer.className == "floating-layer")) {
		// Activamos el flag para indicar que se empieza a arrastrar				
		estoyArrastrando = true;
		
		// Guardamos un puntero al teclado virtual que se está moviendo en la variable global
		dobj = floatingLayer;
		
		// Dejamos el ratón en la misma posición relativa donde se pulso la cabecera	
	  correccion_x=moz ? parseInt(floatingLayer.style.left)-e.clientX : parseInt(floatingLayer.style.left)-event.clientX;		  
	  correccion_y=moz ? parseInt(floatingLayer.style.top)-e.clientY : parseInt(floatingLayer.style.top)-event.clientY;		  
	  	
		// Devolvemos false para no realizar ninguna acción posterior
		return false;
	}	
	
}

document.onmousedown = presionarBoton;
document.onmouseup = soltarBoton;
document.onmousemove = arrastrarRaton;