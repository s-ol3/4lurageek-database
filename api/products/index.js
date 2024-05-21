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
  }
  