//const productosData = 'https://4lurageek-database.vercel.app/api/products/';

const productosData ='https://4lurageek-database.vercel.app/api/products/'
let productos = []; // Variable global para almacenar los productos

function mostrarProductos() {
  fetch(productosData)
    .then(response => response.json())
    .then(data => {
      productos = data; // Actualizar la variable global con los productos obtenidos
      const productosContainer = document.getElementById('productos-container');
      productosContainer.innerHTML = ''; // Limpiar contenedor antes de mostrar productos
      data.forEach(producto => {
        const productoHTML = `
          <div class="product-card">
            <img class="product-img" src="${producto.img}" alt="${producto.name}">
            <h4 class="product-name">${producto.name}</h4>
            <div class="product-content-box">
              <div class="product-content">
                <h3 class="product-price">$${producto.price}</h3>
                <div class="splitters"></div>
                <button class="btn-delete" data-id="${producto.id}"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>
        `;
        productosContainer.innerHTML += productoHTML;
      });
      // Asignar evento de clic para eliminar productos
      document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', eliminarProducto);
      });
    })
    .catch(error => console.error('Error al obtener los productos:', error));
}

function agregarProducto(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const nuevoProducto = {
    id: Math.floor(Math.random() * 1000), // Generar un ID único (simulación)
    name: formData.get('name'),
    price: parseFloat(formData.get('price')),
    img: formData.get('image')
  };

  fetch(productosData, {
    method: 'PUT',
    mode: 'no-cors',  //------------------------------------------------
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([...productos, nuevoProducto]) // Usar la variable global
  })
  .then(() => {
    mostrarProductos();
  })
  .catch(error => console.error('Error al agregar el producto:', error));
}

function eliminarProducto(event) {
  const id = event.target.dataset.id;
  const newData = productos.filter(producto => producto.id != id); // Usar la variable global

  fetch(productosData, {
    method: 'PUT',
    mode: 'no-cors',  //------------------------------------------------
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(() => {
    mostrarProductos();
  })
  .catch(error => console.error('Error al eliminar el producto:', error));
}

document.querySelector('.formulario').addEventListener('submit', agregarProducto);
window.addEventListener('DOMContentLoaded', mostrarProductos);
