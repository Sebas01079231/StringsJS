const producto = 'Monitor 20 Pulgadas ';
const precio = '20 USD';

// concat
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));



// operador +
console.log(producto + 'con precio de: ' + precio); //output: "Monitor 20 Pulgadas 20 USD"
const nombre = 'Sebastian ';
const apellido = 'Hernandez';
console.log(nombre + apellido); // Output: "Sebastian Hernandez"

// template literals ``
console.log(`El producto ${producto} tiene un precio de: $${precio}`);