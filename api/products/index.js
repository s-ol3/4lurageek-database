/* export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://4lurageek-database-git-main-marthas-projects-1651249b.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Responder OK para solicitudes OPTIONS
  } else if (req.method === 'PUT') {
    // Lógica para procesar la solicitud PUT
    res.status(200).json({ message: 'Solicitud PUT procesada correctamente' });
  } else {
    res.status(405).end(); // Método no permitido para otros tipos de solicitud
  }
} */


/* export default function handler(req, res) {
  if (req.method === 'GET') {
    // Lógica para obtener los productos
    const data = require('./products.json');
    res.status(200).json(data);
  } else {
    res.status(405).end(); // Método no permitido
  }
} */

/* export default function handler(req, res) {
  // Permitir solicitudes desde el origen de tu aplicación web
  res.setHeader('Access-Control-Allow-Origin', 'https://4lurageek-database.vercel.app/');
  // Permitir métodos GET, PUT y OPTIONS
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  // Permitir el encabezado Content-Type
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Responder con OK para las solicitudes OPTIONS
    res.status(200).end();
  } else if (req.method === 'PUT') {
    // Lógica para procesar la solicitud PUT
    res.status(200).json({ message: 'Solicitud PUT procesada correctamente' });
  } else {
    // Manejar otros métodos de solicitud
    res.status(405).end(); // Método no permitido
  }
} */


/* export default function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Permitir solicitudes CORS OPTIONS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
  } else if (req.method === 'GET') {
    // Lógica para obtener los productos
    const data = require('./products.json');
    res.status(200).json(data);
  } else if (req.method === 'PUT') {
    // Lógica para actualizar los productos
    const newData = JSON.parse(req.body);
    // Guardar newData en el archivo products.json
    require('fs').writeFileSync('./api/products/products.json', JSON.stringify(newData));
    res.status(200).end();
  } else {
    res.status(405).end(); // Método no permitido
  }
} */


/* export default function handler(req, res) {
  // Permitir solicitudes desde cualquier origen
  //res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'https://4lurageek-database-1quq0a3bz-marthas-projects-1651249b.vercel.app');

  // Permitir métodos GET, PUT y OPTIONS
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  // Permitir el encabezado Content-Type
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Responder con OK para las solicitudes OPTIONS
    res.status(200).end();
  } else if (req.method === 'GET') {
    // Lógica para obtener los productos
    const data = require('./products.json');
    res.status(200).json(data);
  } else if (req.method === 'PUT') {
    // Lógica para actualizar los productos
    const newData = JSON.parse(req.body);
    // Guardar newData en el archivo products.json
    require('fs').writeFileSync('./api/products/products.json', JSON.stringify(newData));
    res.status(200).end();
  } else {
    res.status(405).end(); // Método no permitido
  }
} */


export default function handler(req, res) {
  // Permitir solicitudes desde cualquier origen (cambia '*' por el origen específico de tu aplicación web si es necesario)
  res.setHeader('Access-Control-Allow-Origin', 'https://4lurageek-database.vercel.app/api/products/');
  // Permitir métodos GET, PUT y OPTIONS
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  // Permitir el encabezado Content-Type
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Responder con OK para las solicitudes OPTIONS
    res.status(200).end();
  } else if (req.method === 'GET') {
    // Lógica para obtener los productos
    const data = require('./products.json');
    res.status(200).json(data);
  } else if (req.method === 'PUT') {
    // Lógica para actualizar los productos
    const newData = JSON.parse(req.body);
    // Guardar newData en el archivo products.json
    require('fs').writeFileSync('./api/products/products.json', JSON.stringify(newData));
    res.status(200).end();
  } else {
    res.status(405).end(); // Método no permitido
  }
} 
























/* export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir acceso desde cualquier origen (cambia '*' por el origen específico de tu aplicación web si es necesario)
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT'); // Permitir métodos GET y PUT
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Permitir el encabezado Content-Type
  res.setHeader('Content-Type', 'application/json'); // Establecer el tipo de contenido de la respuesta como JSON

  if (req.method === 'GET') {
    // Lógica para obtener los productos
    const data = require('./products.json');
    res.status(200).json(data);
  } else if (req.method === 'PUT') {
    // Lógica para actualizar los productos
    const newData = JSON.parse(req.body);
    // Guardar newData en el archivo products.json
    require('fs').writeFileSync('./api/products/products.json', JSON.stringify(newData));
    res.status(200).end();
  } else {
    res.status(405).end(); // Método no permitido
  }
}  */
































/* 
 export default function handler(req, res) {
    if (req.method === 'GET') {
      // Lógica para obtener los productos
      const data = require('./products.json');
      res.status(200).json(data);
    } else if (req.method === 'PUT') {
      // Lógica para actualizar los productos
      const newData = JSON.parse(req.body);
      // Guardar newData en el archivo products.json
      require('fs').writeFileSync('./api/products/products.json', JSON.stringify(newData));
      res.status(200).end();
    } else {
      res.status(405).end(); // Método no permitido
    }
  }  */
  
