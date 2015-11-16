//Borrar el formulario de UniVía y entrar en la aplicación
function iraunivia(){
window.open("","univia","height=494,width=788,directories=no,location=no,resizable=yes,status=yes,toolbar=yes,scrollbars=1,menubar=no,screenX=0,screeny=0,left=0,left=0,top=0");
}

function noesVacio(form) {
  if (form.user.value == "") {
    alert("Por favor, introduzca su Nombre de Usuario");
	form.user.focus();
	form.user.select();

    return false;
    }
/*  if (form.pwd.value == "") {
    alert("Por favor, introduzca su Clave");
	form.pwd.focus();
	form.pwd.select();

    return false;
    }
*/
    deleteValues(form);
    return true;
}

//Validacion de NIF
function isNif(val)
{
	if (val.length == 0)
		return false;
	// Letra recibida
	var letra = val.charAt(val.length - 1).toUpperCase();
	// definir el array de letras
	var nif_letras = "TRWAGMYFPDXBNJZSQVHLCKEU"
	var res = parseInt(val, 10);
	var pos = (parseInt(res) - Math.floor(parseInt(res)/23) * 23) + 1;
	var n_letra = nif_letras.substring(pos - 1, pos);
	return n_letra == letra;
}

// Comprueba si el valor indicado corresponde a un número válido
function Numero(v){
	var ok=1, i;
	var check=".0123456789";
	for(i=0;i<v.length && ok==1;i++){
		ok=0;
		for(j=0;j<check.length && ok==0;j++){
			if (check.charAt(j) == v.charAt(i))
				ok=1;
		}
	}
	if (ok==0) return false;
	return true;
}

// Comprueba si el valor indicado corresponde a un carácter válido
function Letra(v){
	var ok=1, i;
	var check="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþ \t\r\n\f";
	for(i=0;i<v.length && ok==1;i++){
			ok=0;
			for(j=0;j<check.length && ok==0;j++){
					if (check.charAt(j) == v.charAt(i))
							ok=1;
			}
	}
	if (ok==0) return false;
	return true;
}

function esEmail (s){
   if (esBlanco(s)) 
       return false;
    var arroba = s.indexOf("@");
	//aquí fuerzo a que delante de la arroba exista al menos un caracter
    if (arroba < 1) 
        return false;
	//no debe existir más que una @        
        var otrarroba= s.substring(arroba+1).indexOf("@");
        if (otrarroba > 0)
                return false;
	//a continuación de la @ no aparece '.' ó blanco
        if ((s.charAt(arroba+1)==".") || (s.charAt(arroba+1)==" ") ) 
                return false;
	//debe terminar en alfabético tras el último punto
        ultpunto=s.lastIndexOf(".");
        if ((ultpunto<(s.length-1)) && (ultpunto>2) && (esAlfabetico(s.substring(ultpunto+1))) )
                return true;
}

function esVacio(s) {
	return ((s==null) || (s.length ==0));
}

function esBlanco (s) {
	var i;
	if (esVacio(s)) return true;
	for(i=0; i< s.length; i++) {
		var c=s.charAt(i);
		if (c!=' ' && c!='\t' && c!='\r' && c!='\n') 
         return false;
	}
	return true;
}

function esAlfabetico (s) {
	var i;
	if (esVacio(s)) return false;
	else {
		for(i=0;i< s.length; i++) {
			var c=s.charAt(i);
			if (((c>='a') && (c<='z')) || ((c>='A') && (c<='Z')))
				continue;
			else return false;
		}
		return true;
		}
}

function esEntero(s) {
	var i;
	if (esVacio(s)) return false;
	else {
		for(i=0;i<s.length; i++) {
			var c=s.charAt(i);
			if ((c>='0') && (c<='9'))
				continue;
			else 
				return false;
		}
		return true;
	}
}

function rellena_euro(form) {	
   if (form.ImporteESP.value != "") {
      a_euro_b(form);
   }
   else if (form.ImporteEUR.value != "") {
      a_ptas_b(form);
   }
}

function rellena_pta(form) {
   if (form.ImporteEUR.value != "") {
       a_ptas_b(form);
   }
   else if (form.ImporteESP.value != "") {
       a_euro_b(form);
   }
}

function a_euro_b(form) {
	b='166.386' 
	resultado = form.ImporteESP.value;
	resultado = resultado.replace(',','.');
	resultado = parseFloat(resultado);
	result = resultado/b;
	c = Math.round(result*1000/10)/100;
	form.ImporteEUR.value = c;
}

function a_ptas_b(form) {
	b='166.386'
	a = form.ImporteEUR.value;
	a = a.replace(',','.');
	a = parseFloat(a);
	if (!a) { alert('Por favor, introduzca un número correcto.'); return null; }
	result = a*b;
	c = Math.round(result);
	form.ImporteESP.value = c;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

// Para los canales externos de la pagina principal //
function jump(form) {
var myindex=form.Canal_externo.selectedIndex
if (form.Canal_externo.options[myindex].value != "0") 
{
window.open(form.Canal_externo.options[myindex].value, 
target="NomDeCadre");
}
}

// Coloca el foco sobre el primer control del formulario
function primerFoco()
{
   if (document.forms.length > 0)
   {
	var TForm;
	var encontrado = 0;
	for (j=0;j<document.forms.length;j++) {
	      TForm = document.forms[j];
	      for (i=0;i<TForm.length;i++)
	      {
        	 if (!TForm.elements[i].disabled &&
			   ((TForm.elements[i].type=="text")||
	           (TForm.elements[i].type=="textarea")||
        	   (TForm.elements[i].type=="password")||
	           (TForm.elements[i].type.toString().charAt(0)=="s")))
        	 {
				try {
					document.forms[j].elements[i].focus();
					encontrado = 1;
					break;
				} catch (err) {}
	         }
	      }
	      if (encontrado == 1)
		break;
	}
   }
}

/**
 * vacía un objeto Input de un formulario.
 * @param form Nombre del formulario.
 * @param nameInput Nombre del objeto input.
 */
function inicializarInput(form,nameInput)
{
  for (x=0; x < document.forms.length ; x++){
    if (document.forms[x].name == form){
        for (i=0;i<document.forms[x].length;i++){
       	        if (document.forms[x].elements[i].name == nameInput){
           	       document.forms[x].elements[i].value = "";
	            }
	    }
	}    
  }	   
}	 

/*
 * Consigue la fecha actual como cadena en el formato:yyyy/mm/dd
 * (util para comparar fechas con ><=)
 * @return Fecha actual como cadena y en formato yyyy/mm/dd.
 */
function inver_Date(){
  var fecha_actual = new Date();
  dia = fecha_actual.getDate();
  mes = fecha_actual.getMonth() + 1;
  anio = fecha_actual.getFullYear();
 /*
  if (anio < 100) anio = "19" + anio;
  else {
    var cadena_anio = new String(anio);
    anio = "20" + cadena_anio.substring(1,3);
    alert("cadena_anio="+cadena_anio);
  } */
  if (mes < 10) mes = '0' + mes;
  if (dia < 10) dia = '0' + dia;
  return (anio + "" + mes + "" + dia);
}

/*
 * Comprueba que la fecha contenida en el elemento HTML 'edt' indicado  sea válida, 
 * teniendo en cuenta el mes de qué se trata y si el año es bisiesto. El formato de
 * fecha esperado es ddtmmtyyyy.Si no es válido se selecciona el elemento HTML indicado.
 * @param "edt" Elemento HTML cuya propiedad 'value' contiene la fecha en el formato
 *              ddtmmtyyyy que se quiere comprobar.
 * @param "t" Carácter separador de los campos dd(dia) mm(mes) yyyy(año).Si no se indica
 *            se entenderá que los campos vienen juntos.
 * @return 0 --> si la fecha es correcta.
 *         1 --> si el formato de fecha recibido no es el esperado.
 *         4 --> si el día indicado no es un número válido.
 *         5 --> si el mes indicado no es un número válido.
 *         6 --> si el año indicado no es un número válido.
 */
function checkDateFieldE (edt, t){
	var dt=edt.value;
	var r=checkDateField(dt, t);
	if (r!=0)
		selElem(edt);
	return r;
}

/*
 * Comprueba que la fecha indicada sea válida, teniendo en cuenta el mes de que se trata
 * y si el año es bisiesto. El formato de fecha esperado es ddtmmtyyyy.
 * @param "dt" Fecha en el formato ddtmmtyyyy que se quiere comprobar.
 * @param "t" Carácter separador de los campos dd(día) mm(mes) y yyyy(año).Si no se indica
 *            se entenderá que los campos vienen juntos.
 * @return 0 --> si la fecha es correcta.
 *        -1 --> si el formato de fecha recibido no es el esperado.
 *         4 --> si el día indicado no es un número válido.
 *         5 --> si el mes indicado no es un número válido.
 *         6 --> si el año indicado no es un número válido.
 *         7 --> si el día indicado no es un día válido en el mes del año indicado.
 *         8 --> si el mes indicado no es un mes correcto, está fuera del rango [1..12].
 */
function checkDateField (dt, t){
	var d, m, y;
	if (!dt)
		return -1;
	if ((!t && (dt.length!=8)) || (t && (dt.length!=10)))
		return -1;

	d=dt.substring(0,2);
	if (!t) {	// ddmmyyyy
		m=dt.substring(2,4);
		y=dt.substring(4);
	} else {	//ddtmmtyyyy
		if ((dt.charAt(2)!=t) || (dt.charAt(5)!=t))
			return -1;
		m=dt.substring(3,5);
		y=dt.substring(6);
	}
	return checkDate(d, m, y);
}

/*
 * Comprueba que la fecha indicada por los elementos pasados por parámetros sea válida,
 * teniendo en cuenta el més de que se trata y si el año es bisiesto. Si el válida ajusta
 * la longitud de los campos día y mes. Si no es válida, selecciona el elemento incorrecto.
 * @param "dd" Elemento HTML cuya propiedad 'value' contiene el día a comprobar.
 * @param "mm" Elemento HTML cuya propiedad 'value' contiene el mes a comprobar.
 * @param "yy" Elemento HTML cuya propiedad 'value' contiene el año a comprobar.
 * @return 0 --> si la fecha es correcta.
 *		   1 --> si el día indicado es nulo.
 *         2 --> si el mes indicado es nulo.
 *         3 --> si el año indicado es nulo.
 *         4 --> si el día indicado no es un número válido.
 *         5 --> si el mes indicado no es un número válido.
 *  	   6 --> si el año indicado no es un número válido.
 */
function checkDateE (dd, mm, yy){
	var d=dd.value;
	var m=mm.value;
	var y=yy.value;
	var e;
	var r=checkDate(d, m, y), r2;
	if (r==0) {
		dd.value=justStr(d,2,"0",0);
		mm.value=justStr(m,2,"0",0);
		return r;	// chequeo correcto
	}
	r2=r%3;
	if (r2==1)
		e=dd;
	else if (r2==2)
		e=mm;
	else
		e=yy;
	selElem(e);
	return r;
}

/*
 * Comprueba que la fecha indicada por los parámetros sea válida, teniendo en cuenta el
 * mes de que se trata y si el año es bisiesto.
 * @param "d" Valor del día a comprobar.
 * @param "m" Valor del mes a comprobar.
 * @param "y" Valor del año a comprobar.
 * @return 0 --> si la fecha es correcta.
 *         1 --> si el día indicado es nulo.
 *         2 --> si el mes indicado es nulo.
 *         3 --> si el año indicado es nulo.
 *         4 --> si el día indicado no es un número válido.
 *         5 --> si el mes indicado no es un número válido.
 *         6 --> si el año indicado no es un número válido.
 *         7 --> si el día indicado no es un día válido en el mes del año indicado.
 *         8 --> si el mes indicado no es un mes correcto, está fuera del rango [1..12].
 */
function checkDate (d, m, y){
	if (!d)
		return 1;
	if (!m)
		return 2;
	if (!y)
		return 3;
	if (Digito(d)==false)
		return 4;
	if (Digito(m)==false)
		return 5;
	if ((Digito(y)==false)||(y.length<4)||(y.length>4))
		return 6;
	y=SinPunto(y);
	// Valores no nulos y numéricos
	d=d-0;
	m=m-0;
	y=y-0;
		// Mes
	if (checkMonth(m)==false)
		return 8;
	if (checkDay(d, m, y)==false)
		return 7;
	return 0;
}

/*
 * Comprueba que el mes indicado sea correcto, es decir en el rango [1..12].
 * @param "m" Valor del mes a comprobar.
 * @return "true" si el mes indicado es un mes en el rango [1..12].
 *         "false" en caso contrario.
 */
function checkMonth (m){
	if ((m<1)||(m>12))
		return false;
	return true;
}

/*
 * Comprueba que el día del mes del año indicado sea correcto, teniendo en cuenta el
 * mes de que se trata y si el año es bisiesto. Presupone que el año y mes son correctos.
 * @param "d" Valor del día a comprobar.
 * @param "m" Mes(1..12).
 * @param "y" Año.
 * @return "true" si el día indicado es un día válido en el mes del año indicado.
 *         "false" en caso contrario.
 */
function checkDay (d, m, y){
	if ((d<1)||(d>31))
		return false;
	if (((m<8)&&(m%2))||((m>=8)&&(m%2==0))){
		// Mes de 31 días
		return true;
	} else if (m!=2){
		// Mes de 30 días
		if (d<31)
			return true;
		else
			return false;
	} else {// Febrero
		if (d>29)
			return false;
		if (d<29)
			return true;
		return leapYear(y);	// día 29
	}
}

/*
 * Devuelve si el año indicado es bisiesto. Presupone que el año es correcto.
 * @param "y" Año a comprobar si es bisiesto.
 * @return "true" si el año indicado es bisiesto y "false" en caso contrario.
 */
function leapYear (y){
	if (y%4!=0)
		return false;
	if (y%100!=0)
		return true;
	if (y%400==0)
		return true;
	return false;
}

/*
 * Compara las fechas indicadas.Si no se indica 'd2' se compara 'd1' con la fecha
 * actual. Presupone las fechas de la formas ddmmyyyy.
 * @param "d1" Fecha origen de la comparación.
 * @param "d2" Fecha con la que comparar.
 * @return -1 --> si d1 es más antigua que d2.
 *          0 --> si las fechas son iguales.
 *          1 --> si d1 es una fecha posterior a d2.
 */
function cmpDate(d1, d2){
	return cmpDateExt(d1,d2,null);
}

/* 
 * Compara las fechas indicadas. Si no se indica 'd2' se compara 'd1' con la fecha
 * actual. En t se indica el delimitador utilizado para representar la fecha.
 * @param "d1" Fecha origen de la comparación.
 * @param "d2" Fecha con la que comparar.
 * @param "t" Delimitador utilizado para representar la fecha.
 * @return -1 --> si d1 es más antigua que d2
 *          0 --> si las fechas son iguales.
 *          1 --> si d1 es una fecha posterior a d2.
 */
function cmpDateExt (d1, d2, t){
	var td, m;
	if (!d1)
		return 1;
	d1 = sortDateField(d1,t);
	if (!d2) {
		td=new Date();
		d2=td.getFullYear()+"";	// Año
		m=(td.getMonth()+1)+"";	// Mes
		d2+=justStr(m,2,"0",0);
		m=td.getDate()+"";	// Día
		d2+=justStr(m,2,"0",0);
	} else
		d2=sortDateField(d2,t);
	if (d1<d2)
		return -1;
	if (d1==d2)
		return 0;
	return 1;
}
/** (11-04-2001) fin **/
/*
 * Ordena la fecha indicada en 'd' de modo que pueda utilizarse para comparaciones.
 * Se presupone en un formato ddtmmtyyyy donde mediante el parámetro 't' se indica
 * si la fecha contiene el separador o no.
 * @param "d" Fecha a ordenar.
 * @param "t" Indica si la fecha contiene separador ó no.
 * @return Fecha ordenada en el formato yyyymmdd.
 */
function sortDateField (d, t){
	if (t)
		return d.substring(6)+d.substring(3,5)+d.substring(0,2);// dd/mm/aaaa
	else
		return d.substring(4)+d.substring(2,4)+d.substring(0,2);// ddmmaaaa
}

/*
 * Esta función asume que se introduce un formato de fecha correcto y la formatea
 * con el delimitador introducido. Los formatos pueden ser los siguientes: ddmmyyyy
 * ó ddtmmtyyyy donde t será el delimitador.
 * @param "elementDate" Objeto HTML que contiene la fecha.
 * @param "delim" String con el delimitador para formateo.
 * @return 0 --> si todo va bien.
 *         1 --> si algo va mal. 
 */
function FormatDate(elemenDate,delim){
	var date;
	var aux;
	date=elemenDate.value;
	if ((date.length) == 8){ // Se ha introducido un formato sin delimitador.
		aux=date.substring(0,2)+ delim + date.substring(2,4) +
			delim + date.substring(4,8);
		elemenDate.value=aux;
	}
	else {
		if((date.length)==10){ // Se ha introducido formato con delimitador.
			aux=date.substring(0,2)+ delim + date.substring(3,5) +
			    delim + date.substring(6,10);
			    elemenDate.value=aux;
	}
		else{
			return 1; // Se ha producido un error.
		}
	}
	return 0;
}


/************************************************************************** 
 * 	   FUNCIONES DE UTILIDAD GENÉRICA PARA LA APLICACIÓN DE UNIVÍA        *  
 **************************************************************************/ 
/* 
 * true si el navegador actual es Netscape y false en caso contrario
 */
 var g_isNN = (navigator.appName.indexOf("Netscape")!=-1);

/*
 * Comprobación de entrada de datos numéricas. Si el elemento indicado no 
 * contiene un valor numérico válido, se enfoca y selecciona para mayor atención
 * del usuario.Además se establece el valor del elemento indicado al valor v.
 * @param "e" Elemento cuyo valor se quiere comprobar si es numérico.
 * @param "v" Valor a establecer para el elemento e en caso que la comprobación fracase.
 * @return "true" si el valor indicado corresponde a un número válido, y 
 *         "false" en caso contrario.
 */
 function chkNumber (e, v) {
	if (Numero(e.value)==false){
		if (!v)
			v="";
		selElem (e, v);
		return false;
	}
	return true;
 }

/*
 * Comprueba si el valor indicado está compuesto sólo por dígitos [0..9] o  
 * caracteres '.'.
 * @param "v" Valor a comprobar
 * @return "true" si el valor indicado está compuesto sólo por dígitos [0..9] o
 *                o caracteres '.'; "false" en caso contrario.
 */
 function Numero(v){
	var ok=1, i;
	var check=".0123456789";
	for(i=0;i<v.length && ok==1;i++){
		ok=0;
		for(j=0;j<check.length && ok==0;j++){
			if (check.charAt(j) == v.charAt(i))
				ok=1;
		}
	}
	if (ok==0) return false;
	return true;
 }

/*
 * Comprueba si el valor indicado está compuesto sólo por dígitos [0..9], o por
 * caracteres '.' ó '-'.
 * @param "v" Valor a comprobar.
 * @return "true" si el valor indicado está compuesto sólo por dígitos [0..9], o por
 *                caracteres '.' ó '-'; "false" en caso contrario.
 */
 function NumeroNegativo(v){
        var ok=1, i;
        var check="-.0123456789";
        for(i=0;i<v.length && ok==1;i++){
                ok=0;
                for(j=0;j<check.length && ok==0;j++){
                        if (check.charAt(j) == v.charAt(i))
                                ok=1;
                }
        }
        if (ok==0) return false;
        return true;
 }

/*
 * Comprueba si el valor indicado corresponde a un número válido (sin incluir puntos).
 * @param "v" Valor a comprobar.
 * @return "true" si el valor indicado está compuesto sólo por dígitos [0..9]; "false"
 *                en caso contrario.
 */
 function Digito(v){
        var ok=1,i;
        var check="0123456789";
        for(i=0;(i<v.length && ok==1);i++){
                ok=0;
                for(j=0;(j<check.length && ok==0);j++){
                        if (check.charAt(j)==v.charAt(i)) ok=1;
                }
        }
        if (ok==0) return(false);
        return(true);
 }

/*
 * Examina el valor indicado, y si contiene algún caracter '.' lo elimina. Si el valor
 * no contiene este caracter, lo deja intacto.
 * @param "v" Valor a examinar.
 * @return El valor indicado sin el caracter '.'.
 */
 function SinPunto(v){
	var d="", i;
	for(i=0;i<v.length;i++){
		if (v.charAt(i)!=".")
			d+=v.charAt(i);
	}
	return d;
 }

/*
 * Formatea el importe indicado colocándole los puntos de forma correcta.
 * @param "d" Valor a formatear.
 * @return El valor indicado con los puntos adecuados.
 */
 function FormatearValor(d){
	var m='',cont=0,len,i;
	if (d.length==3)
		return d;
	len=d.length;
	for (i=0;i<=d.length;i++){
		if (cont==4){
			cont=1;
			m='.'+m;
		}
		m=d.charAt(len)+m;
		cont++;
		len--;
	}
	return m;
 }

/*
 * Devuelve el valor de la opción seleccionada del elemento HTML de selección indicado.
 * @param "e" Elemento HTML de selección.
 * @return Valor de la opción seleccionada.
 */
 function getOptVal(e){
	return e.options[e.selectedIndex].value;
 }

/*
 * Devuelve el texto de la opción seleccionada del elemento HTML de selección indicado.
  * @param "e" Elemento HTML de selección.
  * @return Texto de la opción seleccionada.
 */
 function getOptText(e){
	return e.options[e.selectedIndex].text;
 }

/*
 * Enfoca y selecciona el elemento indicado, y si se indica, le asigna el valor v.
 * @param "e" Elemento HTML a enfocar y seleccionar.
 * @param "v" Valor a asignar al elemento.
 */ 
 function selElem (e, v){
	if (v)
		e.value=v;
	e.focus();
	e.select();
 } 

function selElemSimula (e, v){
	if (v)	
		if (g_isNN) e.value='';
		else e.value=v;
	e.focus();
	e.select();
 } 

/*
 * Resetea un formulario a través del elemento indicado.
  * @param "e" Elemento HTML de tipo input(reset).
 */ 
 function resetForm (e){
	e.click();
 }

/*
 * Abre una ventana nueva.
 * @param "url" URL a abrir.
 * @param "ancho" Ancho de la ventana.
 * @param "alto" Alto de la ventana.
 * @return "true" si todo ha ido bien.
 */
 function abrirVentana(url,ancho,alto){
	ventana = window.open (url,"Info","width="+ancho+",height="+alto+",directories=no,location=no,scrollbars=no,resizable=yes,status=no,toolbar=no,menubar=no,top=0,left=0");
	return true;
 }

/*
 * Comprueba que el valor del elemento HTML de tipo password indicado sea una
 * clave válida.
 * @param "e" Elemento HTML de tipo password que contiene la clave.
 * @param "min" Longitud mínima que debe tener la clave.
 * @param "max" Longitud máxima que puede tener la clave.
 * @return 0 --> si la comprobación ha sido correcta.
 *         1 --> si el campo clave está vacío.
 *         2 --> si la longitud es inferior al mínimo.
 *         3 --> si la longitud es superior al máximo.
 */
 function CheckPwdE(e, min, max){
	var v=e.value;
	var res;
	res=CheckPwd(v, min, max);
	if (res)
		selElem (e);
	return res;
 }

/*
 * Comprueba que el valor clave indicado sea válido.
 * @param "v" Valor clave a comprobar.
 * @param "min" Longitud mínima que debe tener la clave.
 * @param "max" Longitud máxima que puede tener la clave.
 * @return 0 --> si la comprobación ha sido correcta.
 *         1 --> si la clave indicada es la cadena vacía.
 *         2 --> si la longitud de la clave es inferior al mínimo.
 *         3 --> si la longitud de la clave es superior al máximo.
 */
 function CheckPwd(v, min, max){
	var l;
	v = v+"";
	l=v.length;
	if (l=="")
		return 1;
	if (min && (l<min))
		return 2;
	if (max && (l>max))
		return 3;
	return 0;
 }

/* 
 * Comprueba si el elemento indicado se encuentra entre los elementos del 
 * array indicado.
 * @param "arr" Array de elementos donde buscar el elemento indicado.
 * @param "ele" Elemento a buscar dentro del array de elementos indicado.
 * @return "true" si el elemento indicado se encuentra dentro del array.
 *         "false" en caso contrario.
 */
 function isElemInArray (arr, ele) {
	var i = 0, len=arr.length;
	while (i<len) {
		if (arr[i++] == ele)
			return true;
	}
	return false;
 }

/*
 * Cuando el valor del elemento "input" (un elemento HTML input de tipo "text") tiene
 * una longitud "len" o superior, dependiendo de la tecla pulsada dada por "ev", si se ha 
 * indicado un siguiente elemento "sig" en orden de tabulación, se le da el foco. El
 * parámetro "ev" debe indicarse como "event" desde el formulario (requerido así por
 * Netscape).
 * NOTA: Esta función debe invocarse mediante el evento 'onKeyUp'.
 * @param "input" Elemento HTML input de tipo 'text'.
 * @param "len"   Longitud que debe tener el valor del elemento 'input' indicado.
 * @param "ev"    Evento que indica la tecla pulsada.
 * @param "sig"   Elemento HTML al que debe asignarse el focl.
 */
 function autoTab (input, len, ev, sig) {
	var keyCode = (g_isNN) ? ev.which : ev.keyCode; 
	var filter = (g_isNN)
			? [0,8,9]
			: [0,8,9,16,17,18,20,33,34,35,36,37,38,39,40,45,46];
	var v = input.value;
	if (sig)
		if ((v.length>=len) && !isElemInArray(filter,keyCode)) {
//			input.value = v.substring(0, len);
			sig.focus();
		}
	return true;
}

/*
 * Imprime el contenido del objeto 'window'.
 */
 function imprimir() {
       window.print();
 }

/*
 * Indica si una divisa admite decimales.
 * @param "divisa" Identificador de la divisa a comprobar.
 * @return "true" si la divisa admite decimales.
 *         "false" en caso contrario.
 */
 function decimales(divisa){
	if (divisa=="EUR"){ 
		return true;
	} else { 
		return false;
	}
 }

/*
 * Función javascript que hace que el navegador salte a la URL indicada.
 * Si la URL indicada es vacía, la función retorna sin hacer nada.
 *
 * @param "url" La URL a la que debe saltar el navegador.
 */
function Salto(url) {
	if (url != "") {
		location.href = url;
	}	
}

/* Valida la longitud mínima y máxima de una cadena */
 function validaMinMax(cadena,mn,mx){
	if (cadena==null){
		return false;
	}
	if ((cadena.length < mn) || (cadena.length > mx)){
		return false;
	}
	return true;
}

/**
 * Pone sin contenido el campo "elem" del formulario "formName".
 */
function resetInput (formName, elem) {
	eval ("document.forms['"+formName+"']."+elem+".value=''");
}	

/**
 * Se encarga de seleccionar la primera opción de todos los select del formulario
 * @param form formulario
 */
function initSelects(form)
{
    for (i=0;i<form.length;i++){
       	 if (form.elements[i].type.toString().charAt(0)=="s"){
            for (x = 0 ; x < form.elements[i].options.length ; x++){
                if (x == 0){
                    form.elements[i].options[x].selected = true;
                }else{
                    form.elements[i].options[x].selected = false;
                }    
            }        	
	     }
	}
}	

/************************************************************************** 
 * 	   FUNCIONES DE UTILIDAD GENÉRICA RELACIONADAS CON CADENAS PARA       *
 *					     LA APLICACIÓN UNIVIA  							  *	
 **************************************************************************/ 
/*
 * Obtiene la cadena inversa a la pasada por parámetro.
 * @param "s" Cadena origen.
 * @return Cadena inversa.Si la cadena origen tiene longitud 0, se devolverá la
 *         propia cadena.
 */
function invStr (s){
	var s2="", i;
	if (!s)
		return "";
	for (i=s.length-1; i>=0; i--)
		s2 += s.charAt(i);

	return s2;
}

/*
 * Ajusta la cadena 's' a la longitud 'l' con caracteres 'c' por la izquierda si m=0
 * o por la derecha si m=1.
 * 
 * @param "s" Cadena de origen.
 * @param "l" Longitud a la que se debe ajustar la cadena resultado.
 * @param "c" Caracter de relleno.
 * @param "m" Modo de ajuste:
 *					- m=0:  Rellenar por la izquierda.
 *					- m=1:  Rellenar por la derecha.
 * @return Cadena justificada según lo indicado o la propia cadena si la longitud de ésta
 *         supera la longitud indicada en el parámetro 'l'.
 */
 function justStr (s, l, c, m){
	var i=s.length;
	if (i>=l)
		return s;
	s+="";
	for (; i<l; i++){
		if (m)
			s+=c;
		else
			s=c+s;
	}
	return s;
 }
 function productoipf(form){
  
  if (!form.eleccion.length) {
   if (form.eleccion.checked){
    form.impEnt.value=form.impEnt1.value;
    form.plazo.value=form.plazo1.value;
    form.tae.value=form.tae1.value;
   }
  } else {
//   alert("form.eleccion.length");
   if (form.eleccion[0].checked){
//    alert("eleccion[0]");
    form.impEnt.value=form.impEnt1.value;
    form.plazo.value=form.plazo1.value;
    form.tae.value=form.tae1.value;
   } else if (form.eleccion[1].checked){
//    alert("eleccion[1]");
    form.impEnt.value=form.impEnt2.value;
    form.plazo.value=form.plazo2.value;
    form.tae.value=form.tae2.value;
   } else if (form.eleccion[2].checked){
    form.impEnt.value=form.impEnt3.value;
    form.plazo.value=form.plazo3.value;
    form.tae.value=form.tae3.value;
   } else if (form.eleccion[3].checked){
    form.impEnt.value=form.impEnt4.value;
    form.plazo.value=form.plazo4.value;
    form.tae.value=form.tae4.value;
   } else if (form.eleccion[4].checked){
    form.impEnt.value=form.impEnt5.value;
    form.plazo.value=form.plazo5.value;
    form.tae.value=form.tae5.value;
   } else if (form.eleccion[5].checked){
    form.impEnt.value=form.impEnt6.value;
    form.plazo.value=form.plazo6.value;
    form.tae.value=form.tae6.value;
   } else if (form.eleccion[6].checked){
    form.impEnt.value=form.impEnt7.value;
    form.plazo.value=form.plazo7.value;
    form.tae.value=form.tae7.value;
   }
  }
 }
function quitarpuntos(impEnt){
        var texto = impEnt.value;
        impEnt.value = texto.replace(/\./g, "");
}
function abrirpdf(p){
        ventana=window.open(p,'NUEVA','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=700,height=500,top=10,left=10')
        ventana.focus();
}
function abririnter(p){
ventana=window.open(p,'NUEVA','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=525,height=485,top=10,left=10')
        ventana.focus();
}
function cifrar(valor) {
  return valor;
}

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


var activeBox;  // Mantiene una referencia a la caja de texto activa sobre la que actúa el teclado
var activeBox2;  // Mantiene una referencia a la caja de texto activa sobre la que actúa el teclado
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


function cerrarPopup(url) {
	window.open(url,'principal');
//	self.close();
	window.close();
}

//Precarga de imágenes para el microsite Sabía que...
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/************************************************************************** 
 * 	   FUNCIONES PARA GESTIÓN DE COOKIES                                *
 **************************************************************************/ 
function getCookie(nombre) {
	var i, x, y;
	var valor = "";
	var listaCookies = document.cookie.split(";");
	for (i=0; i<listaCookies.length && valor==""; i++) {
  		x = listaCookies[i].substr(0,listaCookies[i].indexOf("="));
  		y = listaCookies[i].substr(listaCookies[i].indexOf("=")+1);
  		x = x.replace(/^\s+|\s+$/g,"");
  		if (x == nombre) {
    			valor = unescape(y);
    		}
	}
	return valor;
}

function setCookie(nombre, valor, expira) {
	valor = escape(valor);
	if (Numero(expira)) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expira);
		valor = valor + "; expires=" + exdate.toUTCString();
	}
	document.cookie = nombre + "=" + valor;
}
