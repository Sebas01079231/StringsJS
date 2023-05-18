const producto = 'Monitor 20 Pulgadas';


// replace (remplazar)
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// slice (cortar)
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));//no hace nada

// Alternativa a slice, Substring
console.log(producto.substring(0,2));
console.log(producto.substring(2, 1));//cambia los valores slice(1,2);  


const usuario = 'Sebas';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0,1));




