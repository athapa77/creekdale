$(document).ready(function(){
	// creating a variable that stores the value
	let fname = localStorage.fullName;
	let email = localStorage.Email;
	let phone = localStorage.phone;
	let tours = localStorage.tours;
	let startDate = localStorage.startDate;
	let endDate = localStorage.endDate;
	// storing the value using innerHtml
	document.getElementById('name').innerHTML = fname;
	document.getElementById('tours').innerHTML = tours;
	document.getElementById('startDate').innerHTML = startDate;
	document.getElementById('endDate').innerHTML = endDate;
	document.getElementById('email').innerHTML = email;
	document.getElementById('phone').innerHTML = phone;
});