function racunajSve() {

    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;

    var q = document.getElementById("prviDomaci").value;
    var w = document.getElementById("drugiDomaci").value;
    var e = document.getElementById("treciDomaci").value;
    var r = document.getElementById("cetvrtiDomaci").value;
    var t = document.getElementById("petiDomaci").value;
    var u = document.getElementById("sestiDomaci").value;
    var i = document.getElementById("sedmiDomaci").value;
    var o = document.getElementById("osmiDomaci").value;
    var p = document.getElementById("devetiDomaci").value;
    var a = document.getElementById("desetiDomaci").value;
    var s = document.getElementById("jedanaestiDomaci").value;
    var d = document.getElementById("dvanaestiDomaci").value;
    var f = document.getElementById("trinaestiDomaci").value;
    var g = document.getElementById("cetrnaestiDomaci").value;
    var h = document.getElementById("petnaestiDomaci").value;

    var ukupno = parseInt(q) + parseInt(w) + parseInt(e) + parseInt(r) + parseInt(u) + parseInt(t) + parseInt(i) + parseInt(o) + parseInt(p) + parseInt(a) + parseInt(s) + parseInt(d) + parseInt(f) + parseInt(g) + parseInt(h);

    var prviTest = document.getElementById('prviTest').value;
    var drugiTest = document.getElementById('drugiTest').value;
    var treciTest = document.getElementById('treciTest').value;
    var cetvrtiTest = document.getElementById('cetvrtiTest').value;
    var petiTest = document.getElementById('petiTest').value;

    var ukupnoTest = parseInt(prviTest) + parseInt(drugiTest) + parseInt(treciTest) + parseInt(cetvrtiTest) + parseInt(petiTest);

    var projektniZadatak = document.getElementById("projektniZadatak").value;
    var negativniPoeni = document.getElementById("negativniPoeni").value;

    var sveUkupno = ukupno + ukupnoTest + parseInt(projektniZadatak) - parseInt(negativniPoeni);

    if (sveUkupno > 35) {
        document.getElementById("rezultat").innerHTML = ime + " " + prezime + " - " + "<b>Ima uslov</b>"
    } else document.getElementById("rezultat").innerHTML = ime + " " + prezime + " - " + "<span style='color:#ff0fff'>Nema uslov</span>";





}
function racunajKonacno() {


    var q = document.getElementById("prviDomaci").value;
    var w = document.getElementById("drugiDomaci").value;
    var e = document.getElementById("treciDomaci").value;
    var r = document.getElementById("cetvrtiDomaci").value;
    var t = document.getElementById("petiDomaci").value;
    var u = document.getElementById("sestiDomaci").value;
    var i = document.getElementById("sedmiDomaci").value;
    var o = document.getElementById("osmiDomaci").value;
    var p = document.getElementById("devetiDomaci").value;
    var a = document.getElementById("desetiDomaci").value;
    var s = document.getElementById("jedanaestiDomaci").value;
    var d = document.getElementById("dvanaestiDomaci").value;
    var f = document.getElementById("trinaestiDomaci").value;
    var g = document.getElementById("cetrnaestiDomaci").value;
    var h = document.getElementById("petnaestiDomaci").value;

    var ukupno = parseInt(q) + parseInt(w) + parseInt(e) + parseInt(r) + parseInt(u) + parseInt(t) + parseInt(i) + parseInt(o) + parseInt(p) + parseInt(a) + parseInt(s) + parseInt(d) + parseInt(f) + parseInt(g) + parseInt(h);

    var prviTest = document.getElementById('prviTest').value;
    var drugiTest = document.getElementById('drugiTest').value;
    var treciTest = document.getElementById('treciTest').value;
    var cetvrtiTest = document.getElementById('cetvrtiTest').value;
    var petiTest = document.getElementById('petiTest').value;

    var ukupnoTest = parseInt(prviTest) + parseInt(drugiTest) + parseInt(treciTest) + parseInt(cetvrtiTest) + parseInt(petiTest);

    var projektniZadatak = document.getElementById("projektniZadatak").value;
    var negativniPoeni = document.getElementById("negativniPoeni").value;

    var sveUkupno = ukupno + ukupnoTest + parseInt(projektniZadatak) - parseInt(negativniPoeni);
    var ispit = document.getElementById("ispit").value;
    var kompletnaOcena = parseInt(ispit) + sveUkupno;

    document.getElementById("konacna").innerHTML = kompletnaOcena;

    if (kompletnaOcena <= 50) {
        document.getElementById("konacniRezultat").innerHTML = "Ocena je 5";
    } else if (kompletnaOcena > 50 && kompletnaOcena <= 60) {
        document.getElementById("konacniRezultat").innerHTML = "Ocena je 6";
    } else if (kompletnaOcena > 60 && kompletnaOcena <= 70) {
        document.getElementById("konacniRezultat").innerHTML = "Ocena je 7";
    } else if (kompletnaOcena > 70 && kompletnaOcena <= 80) {
        document.getElementById("konacniRezultat").innerHTML = "Ocena je 8";
    } else if (kompletnaOcena > 80 && kompletnaOcena <= 90) {
        document.getElementById("konacniRezultat").innerHTML = "Ocena je 9";
    } else if (kompletnaOcena > 90 && kompletnaOcena <= 100) {
        document.getElementById("konacniRezultat").innerHTML = "Ocena je 10";
    };

}
