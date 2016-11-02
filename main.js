$(document).ready();

//cache the DOM
var $searchIcon = $('#searchIcon');
var $searchInput = $('#searchInput');
var $searchClose = $('#searchClose');
var $buttons = $('.buttons');
var $btn1 = $('#btn1');

// toggle search bar and buttons for user
function toggleSearch() {
	$searchInput.slideToggle(300, removeText);
	$buttons.slideToggle(300);
}

// delete any text user has input
function removeText() {
	$searchInput.val('');
}

function searchWikipedia() {
	var searchTerm = $('#searchInput').val();
	console.log(searchTerm);

	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

	$.getJSON(url, function(data) {
		console.log(data);
		console.log(data[1][0]);
	})
}

//var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"

// click magnifying glass to hide and bring up search input
$searchIcon.on("click", toggleSearch);

// search Wikipedia on click of search button
$btn1.on("click", searchWikipedia);

// search Wikipedia on click of enter key
$('#searchInput').keyup(function(event) {
	event.preventDefault();
	if (event.keyCode == 13)
		searchWikipedia();
});

