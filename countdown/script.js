import Countdown from './countdown.js';

const diasParaNatal = new Countdown('24 december 2020 23:59:59 GMT-0300');
const diasParaAnoNovo = new Countdown('31 december 2020 23:59:59 GMT-0300');
console.log(diasParaNatal.total);
// setInterval(() => console.log(diasParaAnoNovo.total), 1000)
