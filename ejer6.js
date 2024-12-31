function createCube(size) {

    //La parte superior (head)
    let head = [];
    //La parte inferior (foot)
    let foot= [];
    
    // Cambiar el bucle para que vaya hasta 'size' inclusive
    for (let i = 1; i <= size; i++){
         // Parte superior: corregir la construcción del patrón
        head.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size));

        // Parte inferior: corregir la construcción del patrón
        foot.push(' '.repeat(i - 1) + '\\/'.repeat(size - (i - 1)) + '_/'.repeat(size));
    }

    // Concatenamos ambas partes y las unimos con saltos de línea
    return [...head, ...foot].join('\n');

  }
  
  console.log(createCube(3));
  console.log(createCube(2));
  console.log(createCube(1));
 

