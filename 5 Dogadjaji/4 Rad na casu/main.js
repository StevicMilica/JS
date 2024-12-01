const digitron = (forma, znak) =>{
    let x = forma.broj1.value
    let y = forma.broj2.value

    if(znak == "+"){
        forma.rezultat.value = Number(x) + Number(y)
    }else if(znak == "-"){
        forma.rezultat.value = x - y
    }else if(znak == "*"){
        forma.rezultat.value = x * y
    }else if(znak == "/"){
        forma.rezultat.value = x / y
    }
}