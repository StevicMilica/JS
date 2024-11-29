var x = 5
//document.write(x)
console.log(x)
x = 15
document.write(x)

let promenljiva = "Danas je lep dan"
promenljiva = "Danas je kisan dan"
console.log(promenljiva)

const nepromenljiva = "Suncan dan"
//nepromenljiva = "Kisan dan" ERROR 
console.log(nepromenljiva)

//a je u globalnom prostoru
const a = 10
{
    b = 20
    const c = 5
}
console.log(a)//10
console.log(b);//20
console.log(c);//error
{
    var c = 5
}
console.log(c)//5

var k = 1
function mojaFunkcija(){
    var n = 2
}
console.log(k);//1
//console.log(n);error

let ime = "Milica"
{
    let ime = 'Marko'
    console.log(ime)
}
console.log(ime);//Milica

let ime2 = "Milica"
{
    ime2 = "Marko"
}
console.log(ime2);//Marko

let y = 1
function mojaFunkcija1(){
    y = 5
}
console.log(y);//1







