const zameni = (x) =>{
    const grad = x.options[x.selectedIndex].value
    //console.log(grad);
    console.log(x);
    document.getElementById("frame").src = `https://naslovi.net/vremenska-prognoza/widget/${grad}?big=1&bgcolor=BDCAFF&textcolor=000000`
}

