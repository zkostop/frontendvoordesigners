/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('like.js loaded.');

// Like Buttons
var film1 = document.querySelector(".film1");
var film2 = document.querySelector(".film2");
var film3 = document.querySelector(".film3");
var film4 = document.querySelector(".film4");

var aantalLikes = 0;
var mijnFavorieten = document.querySelector(".aantalLikes");
mijnFavorieten.innerHTML = "(" + aantalLikes + ")";

film1.addEventListener("click", function () {
	film1.classList.toggle('liked');
	if (film1.classList.contains('liked')) {
		alert("U heeft de film toegevoegd aan uw favorieten");
		aantalLikes++;
	} else {
		aantalLikes--;
	}
	mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
});

film2.addEventListener("click", function () {
	film2.classList.toggle('liked');
	if (film2.classList.contains('liked')) {
		alert("U heeft de film toegevoegd aan uw favorieten");
		aantalLikes++;
	} else {
		aantalLikes--;
	}
	mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
});

film3.addEventListener("click", function () {
	film3.classList.toggle('liked');
	if (film3.classList.contains('liked')) {
		alert("U heeft de film toegevoegd aan uw favorieten");
		aantalLikes++;
	} else {
		aantalLikes--;
	}
	mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
});

film4.addEventListener("click", function () {
	film4.classList.toggle('liked');
	if (film4.classList.contains('liked')) {
		alert("U heeft de film toegevoegd aan uw favorieten");
		aantalLikes++;
	} else {
		aantalLikes--;
	}
	mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
});
