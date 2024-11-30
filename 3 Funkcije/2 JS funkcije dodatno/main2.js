
function poziv(){
    //preuzima vrednost iz input polja sa id-em "broj"
    const broj = document.getElementsById("broj").value
    f(broj)
}
//f-ja bez argumenata
function f(){
    document.getElementById("demo").innerHTML = "poruka"
}

//f-ja sa argumentom
function f(x){
    document.getElementById("demo").innerHTML = `Hello, ${x}`
}

//f-ja sa 2 argumenta
function f(a,b){
    document.getElementById("demo").innerHTML = `Hello World, ${a}, ${b}`
}
f()