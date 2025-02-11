function countTime(leds) {
  // Convertimos el array en una cadena y luego lo dividimos por cada '1'
  let led = leds.join("").split("1");

  // Unimos el primer grupo de ceros con el último para simular el ciclo de LEDs
  led[0] += led.pop();

  // Calculamos el tamaño del grupo más largo de ceros consecutivos
  return Math.max(...led.map((ledOn) => ledOn.length)) * 7;
}

console.log(countTime([0, 1, 1, 0, 1]));
console.log(countTime([0, 0, 0, 1]));
console.log(countTime([0, 0, 1, 0, 0]));
