//

//

document.getElementById("purchaseBtn").addEventListener("click", function () {
	// this.style.backgroundColor = "blue";
	// this.style.color = "white";

	let isActive = this.classList.contains("aktivan");
	console.log(isActive);
	if (isActive == true) {
		this.classList.remove("aktivan");
	} else {
		this.classList.add("aktivan");
	}
});

//
// kada se klikne na dugme dodati klasu aktivan
// vezba: kad se opet klikne na dugme obristai klasu aktivan

//