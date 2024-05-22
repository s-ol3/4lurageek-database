// URL de la API de productos en Vercel
const productosAPI = 'https://4lurageek-database.vercel.app/api/products/';

// Función para mostrar los productos
async function mostrarProductos() {
  try {
    const respuesta = await fetch(productosAPI, {
      method: 'GET', // Use the 'GET' method for retrieving data
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const productos = await respuesta.json();

    if (productos.length === 0) {
      // No hay productos para mostrar
      document.getElementById('productos-container').innerHTML = '<p>No hay productos disponibles.</p>';
      return;
    }

    const productosHTML = productos.map(producto => {
      return `
        <div class="product-card" data-id="<span class="math-inline">\{producto\.id\}"\>
<img class\="product\-img" src\="</span>{producto.img}" alt="<span class="math-inline">\{producto\.name\}"\>
<h4 class\="product\-name"\></span>{producto.name}</h4>
          <div class="product-content-box">
            <div class="product-content">
              <h3 class="product-price">$${producto.price}</h3>
              <div class="splitters"></div>
              <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    document.getElementById('productos-container').innerHTML = productosHTML;

    // Agregar eventos de eliminación a los botones
    const botonesEliminar = document.querySelectorAll('.product-card .btn-delete');
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', eliminarProducto);
    });
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
}

// Función para eliminar un producto
async function eliminarProducto(event) {
  const idProducto = event.target.closest('.product-card').dataset.id;

  try {
    const respuesta = await fetch(productosAPI + idProducto, {
      method: 'DELETE'
    });

    if (respuesta.ok) {
      event.target.closest('.product-card').remove();
    } else {
      console.error('Error al eliminar el producto:', respuesta.status);
    }
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
}

// Función para agregar un producto
async function agregarProducto(event) {
  event.preventDefault();

  const nombre = document.getElementById('name').value;
  const precio = parseFloat(document.getElementById('price').value);
  const imagen = document.getElementById('image').value;

  if (!nombre || !precio || !imagen) {
    return alert('Completa todos los campos');
  }

  const nuevoProducto = {
    name: nombre,
    price: precio,
    img: imagen
  };

  try {
    const respuesta = await fetch(productosAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoProducto)
    });

    if (respuesta.ok) {
      const productoAgregado = await respuesta.json();

      const productoHTML = `
        <div class="product-card" data-id="<span class="math-inline">\{productoAgregado\.id\}"\>
<img class\="product\-img" src\="</span>{productoAgregado.img}" alt="<span class="math-inline">\{productoAgregado\.name\}"\>
<h4 class\="product\-name"\></span>{productoAgregado.name}</h4>
          <div class="product-content-box">
            <div class="product-content">
              <h3 class="product-price">$${productoAgregado.price}</h3>
              <div class="splitters"></div>
              <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('productos-container').innerHTML += productoHTML;

      // Add event listener to the newly added product's delete button
      const botonEliminarAgregado = document.querySelector('.product-card:last-child .btn-delete');
      botonEliminarAgregado.addEventListener('
