function checkJump(heights) {
  let up = false;
  let down = false;

  // Recorremos el array de alturas
  for (let i = 1; i < heights.length; i++) {
    if (heights[i] > heights[i - 1]) {
      // Si estamos subiendo, marcamos que hay una subida
      if (down) return false; // Si ya estábamos bajando, no es válido
      up = true;
    } else if (heights[i] < heights[i - 1]) {
      // Si estamos bajando, marcamos que hay una bajada
      down = true;
    } else {
      // Si las alturas son iguales, no cambiamos la dirección
      continue;
    }
  }
  // Debe haber una subida y una bajada, no puede ser solo uno de ellos
  return up && down;
}
const heights = [1, 3, 8, 5, 2];
const heights1 = [1, 7, 3, 5];
