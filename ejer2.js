function countHours(year, holidays) {
  let totalHorasExtras = 0;

  //Recorrer los dias festivos
  holidays.forEach((holiday) => {
    // Crear una fecha a partir del año y el día festivo
    const date = new Date(`${year}-${holiday}`);

    // Obtener el día de la semana: 0 es domingo, 1 es lunes
    const diaSemana = date.getDay();

    //Si el día festivo es de lunes a viernes, contar 2 horas extra
    if (diaSemana >= 1 && diaSemana <= 5) {
      totalHorasExtras += 2;
    }
  });
  return totalHorasExtras;
}

console.log(countHours(year, holidays));
const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
