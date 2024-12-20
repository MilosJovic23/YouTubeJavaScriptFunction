//

//

let ime = "Nikola";
let prezime = "Petrovic";

// console.log(ime + " " + prezime);

function ispisiIme(korisnickoIme, prezime) {
	console.log(korisnickoIme + "|" + prezime);
}

ispisiIme("Toma", "Nikolic");

ispisiIme(ime, prezime);

// vezba :doradit funkciju tako da prihvata i prezime

// ispisiIme(ime + " " + prezime);

// Vezba: Npaisati funkciju kojoj proslediti cena ,a racuna se cena poreza
//

function cenaSaPorezom(cena) {
	let ukupnaCena = cena * 0.2 + cena;
	return ukupnaCena;
}

// let cenaHleba = cenaSaPorezom(100);

// let cenaMleka = cenaSaPorezom(200);

// let cenaJogurta = cenaSaPorezom(533);

// let cenaJabuka = cenaSaPorezom(222);

// let cenaMeda = cenaSaPorezom(100);

// console.log(cenaHleba, cenaJabuka, cenaJogurta, cenaMeda, cenaMleka);

// let ukupnaCena = cenaHleba + cenaJogurta + cenaMeda;

// console.log(ukupnaCena);

///

///

let hleb = 90;
let mleko = 110;
let jogurt = 120;

function cenaProzivoda(imeProizvoda) {
	if (imeProizvoda == "hleb") {
		return 90;
	} else if (imeProizvoda == "mleko") {
		return 110;
	} else if (imeProizvoda == "jogurt") {
		return 120;
	} else {
		throw new Error("Proizvod " + imeProizvoda + " Nema na stanjnu");
	}
}

let cenaHleba = cenaProzivoda("hleb");
let cenaJogurta = cenaProzivoda("jogurt");
let cenaMleka = cenaProzivoda("mleko");
let cenaNovina = cenaProzivoda("Novine");

console.log(cenaHleba + cenaJogurta + cenaMleka);
