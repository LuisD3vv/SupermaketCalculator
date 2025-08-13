// variables globales
let ventas = 0;
let nombre_global;
/*
* Estas variables están aqui ya que son acomulables y no deben depender del valor local de una funcion
* */
const generarElementos  = (nombre,cantidad,precio) => {
    // try {
    //
    // }catch (error) {
    //     console.log(error);
    // }
    console.log(nombre,cantidad,precio);
    const contenedor = document.querySelector('#genCantidad');

    let td_1 = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");

    // agregar atributos

    td_1.class = "nombre";
    td_2.class = "cantidad";
    td_3.class = "precio";

    td_1.textContent = nombre;
    td_2.textContent = cantidad;
    td_3.textContent = precio;

    try {
        contenedor.appendChild(td_1);
        contenedor.appendChild(td_2);
        contenedor.appendChild(td_3);
    }catch (error) {
        console.log(error);
        console.log("No se han podido insertar los elementos")
    }

}

function productoTabla (nombre,cantidad,precio) {

    const productos = [
        {
            nombre: undefined,
            cantidad: 0,
            precio: 0
        }
    ]
    try {
        productos.push({nombre, cantidad, precio});
    }catch (error) {
        console.log(error);
        console.log("No se han podido ingresar los elementos")
    }

    generarElementos(nombre,cantidad,precio);
    console.log(nombre,cantidad,precio);
    console.table(productos);

}
function aumento (precio){
    ventas += precio;
    return ventas;
}
const agregarProducto = () => {
    const nombre = document.querySelector('#nombreProducto').value;
    const cantidad = document.querySelector('#cantidadProducto').value;
    const precio = document.querySelector('#precioProducto').value;
    productoTabla(nombre,cantidad,precio);
    let tratado = aumento(Number(precio))
    let total = document.querySelector('#TotalActual')
    total.innerHTML = `$${tratado.toFixed(2)}`;
}

// Al momento de ingresar la puta pinche perra pagina se carga el dienio basico
// window.onload = cargarMain()
