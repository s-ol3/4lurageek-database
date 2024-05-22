//const productosData = 'https://4lurageek-database.vercel.app/products.json';

const productosData = 'https://4lurageek-database.vercel.app/api/products/';

// Función para mostrar los productos en la página
function mostrarProductos() {
  fetch(productosData)
    .then(response => response.json())
    .then(data => {
      const productosContainer = document.getElementById('productos-container');
      data.forEach(producto => {
        const productoHTML = `
        <div class="product-card">
        <img class="product-img" src="${producto.img}" alt="${producto.name}">
        <h4 class="product-name">${producto.name}</h4>
        <div class="product-content-box">
          <div class="product-content">
            <h3 class="product-price">$${producto.price}</h3>
            <div class="splitters"></div>
            <button><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>
        `;
        productosContainer.innerHTML += productoHTML;
      });
    })
    .catch(error => console.error('Error al obtener los productos:', error));
}

// Llama a la función para mostrar los productos al cargar la página
window.addEventListener('DOMContentLoaded', mostrarProductos);



// Variable para almacenar los productos
let productos = [];

// Función para mostrar los productos
function mostrarProductos() {
  const productosContainer = document.getElementById('productos-container');
  productosContainer.innerHTML = ''; // Limpiar el contenedor

  // Recorrer la lista de productos y generar el HTML
  productos.forEach(producto => {
    const productoHTML = `
      <div class="product-card">
        <img class="product-img" src="${producto.img}" alt="${producto.name}">
        <h4 class="product-name">${producto.name}</h4>
        <div class="product-content-box">
          <div class="product-content">
            <h3 class="product-price">$${producto.price}</h3>
            <div class="splitters"></div>
            <button onclick="eliminarProducto(${producto.id})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>
    `;
    productosContainer.innerHTML += productoHTML;
  });
}

// Función para agregar un producto
function agregarProducto(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
  const nombre = document.querySelector('input[name="name"]').value;
  const precio = parseFloat(document.querySelector('input[name="price"]').value);
  const imagen = document.querySelector('input[name="image"]').value;

  // Crear un nuevo objeto producto
  const nuevoProducto = {
    id: productos.length + 1, // Generar un nuevo ID
    name: nombre,
    price: precio,
    img: imagen
  };

  // Agregar el nuevo producto a la lista
  productos.push(nuevoProducto);

  // Mostrar los productos actualizados
  mostrarProductos();

  // Limpiar el formulario
  document.querySelector('form').reset();
}

// Función para eliminar un producto
function eliminarProducto(id) {
  // Filtrar los productos para mantener solo aquellos que no coinciden con el ID dado
  productos = productos.filter(producto => producto.id !== id);

  // Mostrar los productos actualizados
  mostrarProductos();
}

// Event listener para agregar un producto cuando se envía el formulario
document.querySelector('#form-btn-add').addEventListener('click', agregarProducto);

// Llamada inicial para mostrar los productos al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  // Obtener los datos de los productos del JSON
  fetch(productosData)
    .then(response => response.json())
    .then(data => {
      productos = data; // Almacenar los productos obtenidos
      mostrarProductos(); // Mostrar los productos
    })
    .catch(error => console.error('Error al obtener los productos:', error));
});
