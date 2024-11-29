//deklaracija promenljive
var x
//inicijalizacija promenljive
x = 10
//deklaracija i inicijalizacija promenljive
var y = true
//deklaracija i inicijalizacija promenljive izrazom
var z = 6 * x
//dodela vrednosti promenljivoj
z = "Poruka"

console.log(x);
console.log(z);
console.log(y);

typeof  3.14

var a = undefined
var b//isto je undefined
var c = null//nema vrednost

c = (c==null) && (b==undefined)

var y = new Number(123)//objekat
var s = new String ("poruka")//objekat

//[{ime:'Pera', godina:34}, {ime:'Milica', godina:35}]
//[1,2,3,4]


var a = 3
console.log("Ovo je vrednost promenljive a: " + a)

console.log("pozdrav");
console.log(123);
console.log(true);
var pozdrav = "poruka"
console.log(pozdrav);

console.log([1,2,3,4]);
console.log({a:1,b:2});
console.table({a:1,b:2})
//console.clear()brisanje konzole
console.warn("Ovo je upozorenje")
console.error("Ovo je greska")

console.time("Pozz")
console.log("Pozdrav svima");
console.log("Pozdrav svima");
console.log("Pozdrav svima");
console.timeEnd("Pozz")

//provera tipa podataka u JS-u
//prosti tipovi
const ukljucenoSvetlo = true
console.log(typeof ukljucenoSvetlo);//boolean

const zarada = 50000
console.log(typeof zarada);//broj

const text = "Hello World!"
console.log(typeof text);//string

//slozeni tipovi
const nizUzastopnihBrojeva = [1,2,3,4,5]
console.log(typeof nizUzastopnihBrojeva);//objekat

const stolica = {brojNogu:4, nova:false, opis:"Drveni sto"}
console.log(typeof stolica);//objekat

//konverzija tipa u JS-u
const sedam = '7'//string
console.log(Number(sedam));//broj

//niz u string
const niz = ['banana', 'jabuka', 'jagoda', 'malina']//niz
console.log(typeof niz);//objekat
console.log(String(niz));
console.log(typeof niz);

//prevodjenje u boolean vrednost 
/*


true:
 - '0'
 - ' '
 - 'false'
 - 'undefined' 
*/
//FALSE
console.log(Boolean(""));//false - prazan string
console.log(Boolean(null));//false - null vrednost
console.log(Boolean(undefined));//false - undefined vrednost
console.log(Boolean(0));//false - broj 0
console.log(Boolean(NaN));//false - broj NaN

//TRUE
console.log(Boolean("false"));//true
//console.log(Booleanl(undefined));
console.log(Boolean(" "));//true


//ispitivanje parnosti broja
/*
broj % 2 == 0 //paran
broj % 2 == 1 //neparan
broj % 2 != 0//nije nula
*/
broj = 7
console.log("Da li je broj paran?");
console.log(broj % 2 == 0);


//operator konkatenacije
let k = "zivot"
let n = k + " "+ "je" + " " + "lep"
console.log(n);
     
let t = 11 + 6
console.log(t);//17
t = "11" + 6
console.log(t);//116

//operator izbora
let r = 50
let h = r < 100 ? console.log(r) : "greska"
let q = (r > 30) && (r < 80) ? (r == 50 ? 0:r): Math.floor(r*3)
console.log(h);
console.log(q);

const rezultat = 0.2 + 0.1
console.log(rezultat);

//zaoktuzivanje
const rezultat1 = 0.2 + 0.1
console.log(rezultat1.toFixed(1));

const rezultat3 = 10 / 3
console.log(rezultat3);

//const rezultat4 = 015
//console.log(rezultat4);//oktalni brojni sistem jer pocinje nulom
