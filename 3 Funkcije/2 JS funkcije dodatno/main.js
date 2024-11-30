//NAMED function
function myFunction(){
    console.log("Code bustler");
}
myFunction()

//ANONYMUS function
let greet = function(name){
    console.log(`Hello ${name}`);
}
greet("Milica")//Hello Milica

//ARROW function - ES6
let greet1 = () => {console.log('Hello')}
//greet1()

//IIFE function
//Izvrsava se nakon njene kreacije. Koristi se za 
//kreiranje privatne oblasti vazenja
(function (){
    let str = "Good Evening"
    console.log(str);
})()

//HIGHER ORDER function
//f-je koje prihvataju jednu ili vise f-ja kao argumente ili vracaju f-ju
//map(), filter(), reduce()
let array = [10,20,30]
let newArray = array.map((Element) => Element + 10)
console.log(newArray);//20,30,40

//CONSTRUCTOR function
//koristi se kao sablon za kreiranje objekata sa slicnim atributima i metodama
//Aktiviraju se koriscenjem kljucne reci "new" za kreiranje instanci (objekata)

function person(name,age){
    this.name = name
    this.age = age
}
const user1 = new person("Milica", 25)
console.log(`Zdravo svima ja sam ${this.name} i ja imam ${this.age} godina.`);


