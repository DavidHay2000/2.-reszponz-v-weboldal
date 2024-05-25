function kalkulal(){
    var nev = document.getElementById("nevInput").value;
    var email = document.getElementById("emailInput").value;
    var chb = document.getElementById("szerzodes");
    if (nev == "" || email == "" || !chb.checked) {
        alert("A név és e-mail mező kitöltése, valamint az adatvédelmi tájékoztató elfogadása kötelező!")
    }
    else{
        var szektor = document.getElementById("typeInput").value;
    var szemelyek = document.getElementById("szemelyek").value;
    var fel = document.getElementById("eredmeny");
    var eredmeny = 0;
    if (szektor.value == "A") {
        eredmeny = 250000 * szemelyek.value
    }
    if (szektor.value == "B") {
        eredmeny = 225000 * szemelyek.value
    }
    if (szektor.value == "C") {
        eredmeny = 200000 * szemelyek.value
    }
    if (szektor.value == "D") {
        eredmeny = 175000 * szemelyek.value
    }
    if (szektor.value == "E") {
        eredmeny = 250000 * szemelyek.value
    }
    if (szektor.value == "F") {
        eredmeny = 125000 * szemelyek.value
    }
    if (szektor.value == "G") {
        eredmeny = 100000 * szemelyek.value
    }

        console.log(eredmeny);
        fel.innerHTML = eredmeny;
    }

    
    

}