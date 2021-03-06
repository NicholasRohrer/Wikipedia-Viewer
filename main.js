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

// shows the populated panels to the user
function showPanels() {
	$('.panel-group').slideDown(500);
}

// makes wikipedia API call and populates the panels
function searchWikipedia() {

	var searchTerm = $('#searchInput').val();
	
	if (searchTerm !== "") {
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

		$.getJSON(url, function(data) {

			var x = 0;
			var y = 0;

			// populates html elements with API data
			for (var i = 0; i < 10; i++) {
				
				$('#title' + x).html(data[1][x]);
				$('#content' + y).html(data[2][y]);
				$('#url' + x).attr("href", data[3][x]);

				x++;
				y++;

			}
		})
		
		showPanels();
	}
}

// click magnifying glass to hide and bring up search input
$searchIcon.on("click", toggleSearch);

// search Wikipedia on click of search button
$btn1.on("click", searchWikipedia);

// search Wikipedia on click of enter key
$searchInput.keyup(function(event) {
	event.preventDefault();
	if (event.keyCode == 13)
		searchWikipedia();
});


