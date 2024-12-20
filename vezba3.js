//
//
document.getElementById("register").addEventListener("click", function () {
	let ime = document.getElementById("korisnickoIme").value;
	let sifra = document.getElementById("lozinka").value;

	if (dozvoljenaImena.includes(ime) && sifra == "admin123") {
		document.getElementById("greska").innerText = "USPESNO STE SE ULOGOVALI!";
	} else {
		document.getElementById("greska").innerText = "pogresni kredencijali";
	}
});

//
//
// proveriti da li je ime admin i sifra admin123
// ako jeste ispisati USPESNO STE SE ULOGOVALI!
// ako nije POGRESNI KREDENCIJALI!

//
//
// dozvoljena imena "admin" "moderator" "toma" sa sifrom "admin123"
const dozvoljenaImena = ["admin", "moderator", "toma"];
