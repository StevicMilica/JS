//f-ja koja ne vraca vrednost
function sabiranje(){
    console.log(5 + 10);
}
sabiranje()

//f-ja sa parametrima (ulaznim vrednostima)
function zbir(a,b){
    console.log(a + b);
}
//u pozivu f-je za parametre prosledjujemo vrednosti (argumente)
zbir(1,2)
zbir(5,10)
zbir(10,20)

//f-je koje vracaju vrednost
function mnozenje(x,y){
    //koristi se kljucna rec "return"
    return x * y
}
//mnozenje(4,5) ne radi
console.log(mnozenje(2,3));

/* f-ja koja vraca vrednost mora da se dodeli promenljivoj ili konstanti ili da se 
prosledi konzoli; da se prosledi nekom html elementu. */

const proizvod = mnozenje(4,5)
console.log(proizvod);



function concatenate(ime,prezime){
    return `${ime} ${prezime}`
}
function stampaj(){
    document.write(concatenate("Milica","Stevic"))
}

