//naredba return
function imeFunkcije(x){
    var result
    result = x + 5
    return result
}
console.log(imeFunkcije(10))

function funkcija(y){
    if(y == 0){
        return;
    }
    document.getElementById("demo").innerHTML = y;
}

//rekurzija
function funkcija1(z){
    if(z == 0){
        funkcija1(6)
    }
    document.getElementById("demo").innerHTML = z 
}