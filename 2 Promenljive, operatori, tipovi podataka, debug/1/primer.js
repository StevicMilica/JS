//racunanje godina, meseci, dana
//10.000 dana

const ukupnoDana = 10000
const godina = Math.floor(ukupnoDana / 365)
console.log("Ukupno dana: " + ukupnoDana);
console.log("Ukupno godina: " + godina);

let ostaloDana = ukupnoDana % 365
console.log("Ostalo dana: " + ostaloDana);

const meseci = Math.floor(ostaloDana / 30) 
ostaloDana = ostaloDana % 30
console.log("Meseci: " + meseci);

const poruka = `${ukupnoDana} dana se sastoji od ${godina} godina, ${meseci} meseci i ${ostaloDana} ostalo dana.`
console.log(poruka);





