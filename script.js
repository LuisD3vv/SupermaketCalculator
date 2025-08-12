// variables globales
let ventas = 0;
let nombre_global;
/*
* Estas variables están aqui ya que son acomulables y no deben depender del valor local de una funcion
* */
function aumento (precio){
    ventas += precio;
    return ventas;
}

const agregarProducto = () => {
    let precio = document.querySelector('#precioProducto').value;
    let tratado = aumento(Number(precio))
    let total = document.querySelector('#TotalActual')
    total.innerHTML = `$${tratado}`;
    total.style.color = 'green';
}
// Al momento de ingresar la puta pinche perra pagina se carga el dienio basico
// window.onload = cargarMain()
