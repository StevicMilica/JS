//fja preuzima vrednost iz input polja i prosledjuje fji f
function poziv(){
    //dodeljujemo vrednost iz input polja konstanti broj
    const broj = document.getElementById("broj").value
    f(broj)
}
/*pozivamo fju f i prosledjujemo vrednost broj kao argument. Izvrsava se 
poslednja fja pod tim imenom jer JS ne podrzava overload tj koriscenje
jednog imena fje vise puta
*/


function f(){
    //u elementu sa id-em "demo" umesto demo prikazuje poruku
    document.getElementById("demo").innerHTML = "poruka"//poruka
}

function f(x){
    //x je vrednost poslednjeg elementa
    document.getElementById("demo").innerHTML = `Poruka, ${x}`;//poruka, broj x
}

function f(x,y){
    document.getElementById("demo").innerHTML = `Hello, ${x} ${y}`
}