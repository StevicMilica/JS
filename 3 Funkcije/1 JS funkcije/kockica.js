function baci(){
    //generisemo nasumican broj izmedju 0 i 1
    let rand = Math.random()
    //prvo mnozimo rand * 6 da bi dobili broj izmedju 0 i 6
    //math.floor zaokruzuje ovaj broj na najblizi nizi ceo broj sto daje raspon od 0 do 5
    //dodajemo 1 da bismo dobili broj izmedju 1 i 6  
    rand = Math.floor(rand * 6) + 1
    //postavljamo izvor slike elementa kocka na putanju assets/slikaX.png
    //gde je X broj od 1 do 6
    document.kocka.src = `assets/slika${rand}.png`
}