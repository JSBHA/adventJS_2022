function checkPart(part) {
  // Verificar si la cadena ya es un palíndromo
  if (part === [...part].reverse().join("")) return true;

  // Usar find() para intentar eliminar un solo carácter
  return (
    [...part].find((char, index) => {
      let newPart = part.slice(0, index) + part.slice(index + 1);
      return newPart === [...newPart].reverse().join("");
    }) !== undefined
  );
}

console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));
