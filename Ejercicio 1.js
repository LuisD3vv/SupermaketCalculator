// variables globales
let ventas = 0;
let nombre_global;
/*
* Estas variables están aqui ya que son acomulables y no deben depender del valor local de una funcion
* */

// Evitar las multiples llamdas a la funcion ya que puede estropea su uso

function comprobarIgualdad(nombre) {
    // Si los nombres son iguales
    return nombre_global == nombre
}

function crearElementos(nombre,cantidad,precio){
    // Crear los elementos
    if(isNaN(cantidad || precio) || nombre === ""){
        alert("Datos en formato incorrecto");
        return 1;
    }
    // Comprobaciones al enviar el nombre actual
    let compro = comprobarIgualdad(nombre);
    if (compro) {
        console.log("Son iguales");
    }
    else {
        console.log("No son iguales");
    }
    let contenedor = document.getElementById('contenedor-productos');
    let contenedor2 = document.getElementById('contenedor-cantidad');
    let contenedor3 = document.getElementById('contenedor-precio');

    let elementotexto = document.createElement('p');
    elementotexto.className = "texto nombre";
    elementotexto.innerHTML = nombre;
    // Justo al crear el elemento nombre le enviamos el nombre a la variable
    nombre_global = nombre;
    let elementocantidad = document.createElement('p');
    elementocantidad.innerHTML = cantidad;
    elementocantidad.className = "texto cantidad";
    let elementoprecio = document.createElement('p');
    elementoprecio.className = "texto precio";
    elementoprecio.innerHTML= "$" + precio;
    // necesitamos mostrar en pantalla el array al momento de estarle agregando elementos y luego ir calculando el total
    //console.clear()
    contenedor.appendChild(elementotexto);
    contenedor2.appendChild(elementocantidad);
    contenedor3.appendChild(elementoprecio);

}
function calcular(precio) {
        ventas += precio
        return ventas;
}
function agregarProducto() {
    let elementoNombre = document.getElementById('nombrePro').value;
    let elementoCantidad = Number(document.getElementById('cantidad').value);
    let elementoPrecio = Number(document.getElementById('precio').value);
    // Condicionales extras

    if(elementoNombre === ''){
        alert("Debes de ingresar el nombre del producto");
    }
    else if (isNaN(elementoCantidad)) {
        console.log("El valor está vacío o no es un número válido");
    }
    else if (isNaN(elementoPrecio)){
        console.log("El valor está vacío o no es un número válido");
    }
    if (elementoNombre === '' || isNaN(elementoCantidad || elementoPrecio)) {
        alert("Ingresa los datos solicitados correctamente");
        return 1;
    }
    crearElementos(elementoNombre, elementoCantidad, elementoPrecio);
    if (!isNaN(elementoPrecio)) {
        document.getElementById('total').innerText = "$ " + calcular(elementoPrecio);
    } else {
        alert("Error en elemento precio");
    }
    if (isNaN( elementoCantidad || elementoPrecio)) {
        console.error("Datos mal ingresados")
    }
}



// Al momento de ingresar la puta pinche perra pagina se carga el dienio basico
// window.onload = cargarMain()
