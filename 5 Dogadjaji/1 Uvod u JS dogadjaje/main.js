//Dogadjaji
//ispis  trenutne koordinate misa prilikom pomeranja
document.onmousemove = e => console.log("x: " + e.clientX, "y: " + e.clientY);

//ispis brojcane vrednosti pritisnutog znaka na tastaturi
document.onkeydown = e => console.log(e.keyCode);

 