// ano, mês em indice, dia, hora-minutos

var d = new Date(2018, 8, 12, 22,45); // Instânciando a data

console.log(d);

/* var date = new Date("july 20 2023 10:30");

console.log(date);

var date = new Date("07/20/1999");
console.log(date); */

console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getDay()); // Indice do dia da semana
console.log(d.getMonth()); // Indice do mês
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());