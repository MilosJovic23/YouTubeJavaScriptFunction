// das
let imeProizvoda  = "Tastatura"; // string
let cena = 50; // integer
let tezina = 255.55; // float
let porez = 0.2;
let iznosPorez = cena * porez;
let proizvodValidan = false;
let godinaProizvodnje = 2019;
//
console.log(imeProizvoda, cena, tezina);
// array
let korpa = ["mleko", "hleb", "jogurt"];
console.log(korpa[1], korpa[0], korpa[2]);
korpa.push = "jaja";
console.log(korpa);
//
if (cena == 60) {
	console.log("cena je 60evra");
} else {
	console.log("cena je nesto drugo");
}
if (proizvodValidan == true) {
	console.log("Proizvod je validan");
} else {
	console.log("proizvod nije validan");
}
//
if (imeProizvoda == "Slusalice") {
	console.log("Najbolje slusalice u gradu");
} else if (imeProizvoda == "Tastatura") {
	console.log("Mehanicka tastatura u gradu");
} else {
	console.log("nijedan od ponudjenih");
}
//
let tipProizvoda = null;
//
if (godinaProizvodnje >= 2020) {
	console.log("Nov Proizvod");
	tipProizvoda = "nov";
} else {
	console.log("star proizvod");
	tipProizvoda = "star";
}
console.log(tipProizvoda);
// prompt , "unestite ime proizvoda " -> ubaciti u kropu -> ako je ime proizvoda hleb ispisati prouku "fali ti parizer" ako nije hleb "di je leba"

let proizvod = prompt("unesi ime nekog proizvoda");
if (proizvod.length <= 1) {
	console.log("proizvod ne moze sadrzati manje od 2 slova");
} else {
	console.log(proizvod);
}
