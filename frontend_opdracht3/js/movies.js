/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('movies.js loaded.')

var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json"
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	var movies = request.response;
	setElements(movies);
}

function setElements(jsonObject) {
	var movies = jsonObject;
	for (var i = 0; i < movies.length; i++) {
		var article = document.createElement('article');
		var img = document.createElement('img');
		img.src = movies[i].cover;
		var button = document.createElement('button');
		button.classList.add('film' + i);
		var h3 = document.createElement('h3');
		var p = document.createElement('p');
		img.textContent = movies[i].cover;
		h3.textContent = movies[i].title;
		p.textContent = movies[i].simple_plot;

		article.appendChild(img)
		article.appendChild(button)
		article.appendChild(h3)
		article.appendChild(p)

		articles.appendChild(article)
	}
}
