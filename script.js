// variables globales
let ventas = 0;
let nombre_global;
/*
* Estas variables están aqui ya que son acomulables y no deben depender del valor local de una funcion
* */
const generarElementos  = (nombre,cantidad,precio) => {

    console.log(`Nombre => ${nombre} | Cantidad => ${cantidad} | Precio => ${precio}`);

    // guardar los datos como string
    localStorage.setItem("nombreG",nombre);
    localStorage.setItem("cantidadG",cantidad);
    localStorage.setItem("precioG",precio);
    // window.location.href = "productos.html";
}

function productoTabla (nombre,cantidad,precio) {

    const productos = [
        {
            nombre: undefined,
            cantidad: 0,
            precio: 0
        }
    ];
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
    const nombre= document.querySelector('#nombreProducto').value;
    const cantidad = document.querySelector('#cantidadProducto').value;
    const precio = document.querySelector('#precioProducto').value;
    productoTabla(nombre,Number(cantidad),Number(precio));
    let tratado = aumento(Number(precio))
    let total = document.querySelector('#TotalActual')
    total.innerHTML = `$${tratado.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {

})

// Al momento de ingresar la puta pinche perra pagina se carga el dienio basico
// window.onload = cargarMain()
