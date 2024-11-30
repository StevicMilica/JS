//metoda niza map prima povratnu f-ju kao parametar
//povratna f-ja prima trenutni clan niza i vraca novu vrednost
const brojevi = [1,2,3]
const mapirano = brojevi.map(function(n){
    return n * n
})
console.log(mapirano);//0:1, 1:4, 2:9; length:3

//Strelicasta f-ja
const brojevi1 = [1,2,3]
const mapirano1 = brojevi.map(n => n * n)
console.log(mapirano1);//0:1, 1:4, 2:9; length:3

//Arrow f-ja
const brojevi2 = [1,2,3]
const kvadriraj = n => n * n
const mapirano2 = brojevi2.map(kvadriraj)
console.log(mapirano2);

//povratne f-je dogadjaja - anonimna funkcija
document.body.addEventListener('click', function(){
    document.body.style.backgroundColor = "lightblue"
})
//ILI
function promeniBoju(){
    document.body.style.backgroundColor = "violet"
}
document.body.addEventListener("dblclick", promeniBoju)

//jos jedan nacin
function promeniBoju1(boja){
    document.body.style.backgroundColor = boja
}
document.body.addEventListener('mousedown', function(){
    promeniBoju1('red')
})

//uklanjanje handleClick
//pasus.removeEventListener('click', handleClick)

/*
Da bismo uklonili slusac dogadjaja, moramo da prosledimo istu imenovanu
f-ju koju smo prethodno dodali.
Ako ponovo napisemo anonimnu f-ju istog sadrzaja, ne uklanjamo slusac dogadjaja.

ERROR
pasus.removeEventListener('click', function(){
//telo funkcije})
 */

/*
sprecavanje podrazumevanog ponasanja HTML-a: preventDefault()

Sprecavanje slanja forme: selektujemo form element i dodajemo f-ju 
koja ce biti izvrsena kada se klikne na "submit"

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    })
 */

    //koristi se kada ne zelimo da se refresuje stranica

//sprecavanje otvaranja linka
const allLinks = document.getElementsByTagName('dugme')
for(let i = 0; i < allLinks.length; i++){
    allLinks[i].addEventListener('click', function(e){
        if(!confirm('Zelite li da pratite ovaj link?'))
            e.preventDefault()
    })
}