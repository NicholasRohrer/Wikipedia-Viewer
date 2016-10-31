$(document).ready();

//cache the DOM
var $searchIcon = $('#searchIcon');
var $searchInput = $('#searchInput');
var $searchClose = $('#searchClose');
var $buttons = $('.buttons');

// toggle search bar for user
function toggleSearch() {
	$searchInput.slideToggle(300, removeText);
	$buttons.slideToggle(300);
}

// delete any text user has input
function removeText() {
	$searchInput.val('');
}

// click magnifying glass to hide and bring up search input
$searchIcon.on("click", toggleSearch);

