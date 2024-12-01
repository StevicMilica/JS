
select.addEventListener("change", (e) =>{
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    const grad = e.target.value

    naslovi.src = `https://naslovi.net/vremenska-prognoza/widget/${grad}?big=1&bgcolor=BDCAFF&textcolor=000000`
})

/*
callback f-ja (povratnog poziva), kada u pozivu jedne f-je 
prosledimo kao argument definiciju druge f-je.
 */

document.onkeydown = e =>{
    console.log(e.key);
}