const producto = '          Monitor 20 Pulgadas          ';

console.log(producto);
console.log(producto.length);


// eliminar del inicio
console.log( producto.trimStart());

// Eliminar final
console.log( producto.trimEnd());

// Eliminar inicio y final
console.log(producto.trimStart().trimEnd());
// shorthand trim
console.log(producto.trim());