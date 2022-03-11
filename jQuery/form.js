$(document).ready(function(){
	$('#submit').on('click', function(){
		// creating a value to store in local storage
		let fname = $('#fname').val();
		let email = $('#email').val();
		let phone = $('#phone').val();
		let tours = $('#tours').val();
		let startDate = $('#startDate').val();
		let endDate = $('#endDate').val();
		let yes = $('#yes').val();
		let no = $('#no').val();
		let interest = $('#interest').val();
		let contactEmail = $('#contactEmail').val();
		let contactPhone = $('#contactPhone').val();
		let source = $('#sourceFinding').val();
		// setting item to keys and its value
		localStorage.setItem('fullName', fname);
		localStorage.setItem('Email', email);
		localStorage.setItem('phone', phone);
		localStorage.setItem('tours', tours);
		localStorage.setItem('startDate', startDate);
		localStorage.setItem('endDate', endDate);
		localStorage.setItem('flexibleDateYes', yes);
		localStorage.setItem('flexibleDateNo', no);
		localStorage.setItem('message', interest);
		localStorage.setItem('contactThemByEmail', contactEmail);
		localStorage.setItem('contactThemByPhone', contactPhone);
		localStorage.setItem('howTheyFindUs', source);
	});
});