function validacijaForme() {

    var ime = document.getElementById("ime1").value;
    var prezime = document.getElementById("prezime1").value;
    var textarea = document.getElementById("textarea").value;
    var broj = document.getElementById("broj").value;

    for (let x = 0; x < ime.length; x++) {

        if (ime[x] === " " || !isNaN(ime[x])) {
            document.getElementById("imeUnos").innerHTML = "Unesite pravilno ime"

        }

    }
    for (let y = 0; y < prezime.length; y++) {

        if (prezime[y] === " " || !isNaN(prezime[y])) {
            document.getElementById("prezimeUnos").innerHTML = "Unesi pravilno prezime"
        }
    }

    if (textarea.length > 500 || textarea.length < 100 && textarea.length !== 0) {
        document.getElementById("textarea1").innerHTML = "Uneli ste premali ili preveliki broj karaktera"
    }

    for (let z = 0; z < broj.length; z++) {

        if (isNaN(broj[z]) && broj[z] !== "+") {
            document.getElementById("broj1").innerHTML = "Unesi ispravan broj"

        }

    }

}