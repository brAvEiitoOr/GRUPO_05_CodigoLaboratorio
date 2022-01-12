//Ejercicio 2: Cargar y analizar el XML
function cargarXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var xmlDoc = this.responseXML;
      hacerTabla(xmlDoc);
    }
  };
  xmlhttp.open("GET", "desayuno.xml", true);
  xmlhttp.send();
}

//Ejercicio 4: Presentar tabla
function hacerTabla(xmlDoc){
    var x = xmlDoc.getElementsByTagName("comida");
    var tabla = "<thead><tr><th>Nombre</th><th>Precio</th><th>Descripción</th><th>Calorías</th></tr></thead><tbody>";
    for (let i = 0; i < x.length; i++) {
        tabla += "<tr><td>" +
        x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("calorias")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    tabla += "</tbody>"
    document.getElementById("tabla").innerHTML = tabla;
}