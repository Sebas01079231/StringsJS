# STRINGS
representan un texto que se puede asignar a una variable.

# 3 formas de crear strings:

  const nombreVariable = '';
  const nombreVariable2 = String('');
  const nombreVariable3 = new String('');

# Metodos strings

     
    Slice Y Substring -> 
        -substring ajusta automáticamente los valores de menor a mayor mientras de slice no lo admite
        -Substring no admite valores negativos

    typeof -> me dice el tipo de dato que es, en esta caso string
        console.log(typeof numero1);
        // output: string

    .length ->
        me permite conocer la cantidad de letras de la cadena de texto de la variable

        console.log(producto.length);

    .indexof() -> 
        método que se utiliza en para buscar la primera ocurrencia de un elemento en arrays y strings. Este método devuelve el índice de la posición donde se encuentra el elemento buscado, o '-1' si no se encuentra.

            const mensaje = 'Hola, mundo!';
            console.log(mensaje.indexof('mundo'));
            // Output: 6

    .includes() -> 
        método que se utiliza para determinar si un array o un string contiene un determinado elemento. Este método devuelve un valor booleano (true o false) dependiendo de si el elemento se encuentra en el array o string.

            const mensaje = 'Hola, mundo!';
            const resultado = mensaje.includes('mundo');
            console.log(resultado); // Output: true

    .replace() -> 
        se utiliza para buscar y reemplazar una parte de un string por otra. Este método recibe dos parámetros: el primero es el patrón que se desea buscar, y el segundo es el texto que se desea reemplazar.

            const producto = 'Monitor 20 Pulgadas';
            console.log(producto.replace('Pulgadas', '"'));
            //Output: Monitor 20"

    .slice() -> 
        extrae sección de un string y la devolve como un nuevo string, sin modificar el string original. Este método recibe dos parámetros: el índice inicial y el índice final de la sección que se desea extraer.

            const producto = 'Monitor 20 Pulgadas';    
            console.log(producto.slice(0, 10));
            //Output: Monitor 20

        Si se omite el segundo parámetro fin, se extraerán los caracteres a partir del índice inicio hasta el final del string.
            const producto = 'Monitor 20 Pulgadas';    
            console.log(producto.slice(8));
            //Output: 20 Pulgadas

    .Substring() -> 
        Es casi lo mismo que .slice(). algunas diferencias son: 

            -substring() no admite índices negativos para indicar posiciones relativas desde el final del string. Si se proporciona un índice negativo, substring() lo tratará como si fuera 0.

            -También se puede utilizar substring() para intercambiar los valores de los parámetros inicio y fin y obtener el mismo resultado, ya que substring() ajustará automáticamente los valores para que el primer parámetro sea menor o igual al segundo. Esto no lo admite slice()
                const str = "Hoy es un buen día";
                console.log(str.substring(3, 0)); 
                //Output: "Hoy"  

    .repeat() -> 
        se utiliza para crear y devolver una nueva cadena que consiste en la concatenación de la cadena original repetida un número determinado de veces. Este método toma un parámetro numérico NATURAL que indica la cantidad de veces que se debe repetir la cadena original.

            const texto = ' En promocion'.repeat(3);
            console.log(texto);
            //Output:  En promocion En promocion En promocion

    .split() -> 
        se utiliza para dividir una cadena de texto en un array de subcadenas, basándose en un separador especificado.

            var cadena = "manzana,pera,banana";
            var arrayCadena = cadena.split(",");
            console.log(arrayCadena); 
            //output: ["manzana", "pera", "banana"]

    .toUpperCase -> 
        Me permite transormar el texto a mayusculas
            const producto = 'Monitor 20 Pulgadas';
            console.log(producto.toUpperCase());
            //output: MONITOR 20 PULGADAS

    .toLowerCase -> 
        Me permite trasformar el texto a minusculas. este suele ser mas util que toUpperCase, por ejemplo cuando en un formulario solicitamos un correo, para asegurarnos que todo este en minusculas podemos poner este metodo

            console.log(producto.toLowerCase());

    toString() -> 
        se utiliza para convertir un valor en una cadena de texto.
        El método toString() está disponible para muchos tipos de valores en JavaScript, incluyendo números, booleanos, fechas, arreglos y objetos.

            const numero = 123;
            const cadena = numero.toString();
            console.log(cadena); 
            // Output: "123"

    Contatenacion de strings:
        .concat() -> 
            es un método que se utiliza en JavaScript para concatenar dos o más arrays o strings. Este método devuelve un nuevo array o string que contiene los elementos de los arrays o strings originales combinados en el orden en que se pasan como argumentos.

            console.log(producto.concat(precio));
            console.log(producto.concat('En descuento'));

        con operador '+' ->
            El operador + se utiliza para concatenar dos o más strings. 
                const nombre = 'Juan';
                const apellido = 'Pérez';
                console.log(nombre + apellido); 
                // Output: "Juan Pérez" 

        Template literals `` -> 
            son una forma de concatenar strings y variables de forma más legible y fácil de leer. Para utilizar template literals, se encierra el texto en backticks (`) y las variables se indican con el signo de dólar y llaves (${variable}).

                const nombre = 'Juan';
                const apellido = 'Pérez';

                console.log(`${nombre} ${apellido}`;) // Output: "Juan Pérez"

    Eliminacion de espacios:
    .trim() -> 
        Este método elimina los espacios en blanco al inicio y al final de un string y devuelve el string resultante.
            const producto = '          Monitor 20 Pulgadas          ';
            console.log(producto.trim()); 
            // Output:"Monitor 20 Pulgadas"

    .trimStart() y .trimEnd() -> 
        eliminan los espacios en blanco al inicio y al final de un string respectivamente. Estos métodos pueden ser útiles si se desea eliminar los espacios en blanco de una parte específica del string.
            console.log(producto.trimStart());
            // Output:"Monitor 20 Pulgadas        "

            console.log(producto.trimEnd());
            // Output:"     Monitor 20 Pulgadas"
