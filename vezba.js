//
//
//

// i-iteration - ponavljanje
// i++ - povecaj vrednost i za jedan

// for (let i = 0; i < 55; i++) {
// 	console.log("trenutni broj je broj " + i);
// }

// while

let godine = 1;

while (godine < 18) {
	console.log("Maloletni ste.imate Trenutno: " + godine);
	godine++;
}
//
//
// nparaviti korpu sa 0 proizvoda

// let proizvod = [""];

// while (proizvod <= 10) {
// 	proizvod.push("");
// 	proizvod++;
// 	console.log(proizvod);
// }

//

let korpa = [
	"hleb",
	"mleko",
	"jogurt",
	"cvarci",
	"med",
	"parizer",
	"hleb",
	"mleko",
	"jogurt",
	"cvarci",
	"med",
	"parizer",
	"hleb",
	"mleko",
	"jogurt",
	"cvarci",
	"med",
	"parizer",
];
// let brojProizvoda = 0;

// for (brojProizvoda in korpa) {
// 	console.log(korpa[brojProizvoda]);
// }

//
// for each

korpa.forEach(function (vrednost, index) {
	console.log(vrednost);
});
// vise stavki

// Vezba: array sa 10 korisnika, koristeci forEach petlju izlistati njihova imena

let osobe = ["Nemanja", "Zoran", "Sanja", "Skitarko", "Marina", "Niko"];

// for (osoba in osobe) {
// 	let imeOsobe = osobe[osoba];
// 	if (imeOsobe == "Marina") {
// 		break;
// 	}
// 	console.log(imeOsobe);
// }

let ucenici = ["Marina", "Marko", "Stefan", "Moco", "Aleksandar", "Nenad"];

for (ucenik in ucenici) {
	let imeUcenika = ucenici[ucenik];

	if (imeUcenika == "Aleksandar") {
		continue;
	}
	console.log(imeUcenika);
}
// ako su imena Marko Aleksandar Nenad preskoci ispis
