function duzinaNiza() {
    var brojNiza = document.getElementById("brojClanovaNiza").value;
    var niz = [];
    niz.length = parseInt(brojNiza);
    var div = document.getElementById("niz");
    for (let index = 0; index < niz.length; index++) {

        div.innerHTML += "<input type='text' class='elementNiza'/><br><br><br>"

    }

};

function mnozenje() {

    var items = document.getElementsByClassName("elementNiza");
    var itemCount = items.length;
    var total = 1;
    for (var i = 0; i < itemCount; i++) {

        total *= parseInt(items[i].value);
    }

    if (total < 0) {
        document.getElementById("vrednost").innerHTML = "Greska!";

    } else(
        document.getElementById("vrednost").innerHTML = "Proizvod svih unetih vrednosti je " + total)


};