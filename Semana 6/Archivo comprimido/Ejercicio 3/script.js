var el = document.querySelector(".box");


el.addEventListener("click", clickedBox, false);

function clickedBox(evt) {
	console.log("clicked on box.")
}
