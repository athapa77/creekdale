// Making the document ready
$(document).ready(function(){
	
	// $('body').hide(); // Hides the body tag
	// $('body').fadeIn(2000); // Makes the body fade in 2 seconds.
	
	let currentSlide = 1;
	setInterval(function(){ // Executes the function in the interval of 5 seconds
		$('#slider').animate({'margin-left' : '-=1280px'}, 1500, function(){ //Animates '#slider' on pushing margin-left by -1280px in 1.5 second
			currentSlide++; // Increase the current slider by 1
			if(currentSlide == $('.slides').length){ 
				currentSlide = 1;
				$('#slider').css('margin-left',0);
			}
		});
	}, 5000);
	// creating a function that toggles between the division
	function showAndHide(){
		$('.showDetails-trekking').hide(); // hiding the given class
		$('.viewDetail-trekking').on('click', function(){  //Executing the function on click on the given class
			$('.showDetails-trekking').slideToggle(1000);  //Toggles the '.showDetails-trekking' on click
			$(this).removeClass('viewDetail-trekking').addClass('hoverIn'); //Removes the style of a class and addes new style by css class on clicking
			$(this).text("DETAIL VIEWED"); // Changes the text to DETAIL VIEWED on clicking
		});
		$('.showDetails-culture').hide(); // hiding the given class
		$('.viewDetail-culture').on('click', function(){  // Executing the function on click on the given class
			$('.showDetails-culture').slideToggle(1000); //Toggles the '.showDetails-trekking' on click
			$(this).removeClass('viewDetail-culture').addClass('hoverIn'); // Removes the style of a class and addes new style by css class on clicking
			$(this).text("DETAIL VIEWED"); // Changes the text to DETAIL VIEWED on clicking
		});
		$('.showDetails-family').hide(); // hiding the given class
		$('.viewDetail-family').on('click', function(){ // Executing the function on click on the given class
			$('.showDetails-family').slideToggle(1000); //Toggles the '.showDetails-trekking' on click
			$(this).removeClass('viewDetail-family').addClass('hoverIn'); // Removes the style of a class and addes new style by css class on clicking
			$(this).text("DETAIL VIEWED"); // Changes the text to DETAIL VIEWED on clicking
		});
		
		$('.showDetails').hide(); // hiding the given class
		$('.viewDetail').on('click', function(){ // Executing the function on click on the given class
			$('.showDetails').slideToggle(1000); //Toggles the '.showDetails-trekking' on click
			$(this).removeClass('viewDetail').addClass('hoverIn'); // Removes the style of a class and addes new style by css class on clicking
			$(this).text("DETAIL VIEWED"); // Changes the text to DETAIL VIEWED on clicking
		});
	}
	showAndHide(); // Calling the function
	// Creating a function that uses event handler
	function transform(){
		$('.figure').mouseenter(function(){ // Moving the mouse on a given class will execute the function
			$(this).css('transform', 'scale(1.35)'); //Transforms the given class with scale of 1.35
		});
		$('.figure').mouseleave(function(){ // If the mouse cursor is outside the margin, the given function wi
			$(this).css('transform', 'scale(1)'); //Transforms the given class with scale of 1
		});
	}
	transform(); //Calling the function
	
	
	let canvas = document.getElementById("canvas"); 
	let context = canvas.getContext("2d");
	let x = 235; 
	let dx = 4;
	let y =200;
	let dy = 4;
	let z = 270;
	let dz = 4
	let a = 235;
	let da = 4;
	function animate(){
		requestAnimationFrame(animate);
		context.clearRect(0, 0, 1024, 150);
		context.beginPath();
		context.arc(x, 70, 57, 0, Math.PI*2, true);
		context.fillStyle = "yellow";
		context.fill();
		context.beginPath();
		context.arc(y, 50, 10, 0, Math.PI*2, true);
		context.fillStyle = "black";
		context.fill();
		context.beginPath();
		context.arc(z, 50, 10, 0, Math.PI*2, true);
		context.fill();
		context.beginPath();
		context.arc(a, 45, 50, Math.PI*0.35, Math.PI*0.65);
		context.strokeStyle = "black";
		context.stroke();
		if(x + 57 > 1024 || x - 57 < 0){
			dx = -dx;
			dy = -dy;
			dz = -dz;
			da = -da;
		}
		x += dx;
		y += dy;
		z += dz;
		a += da;
	}
	animate();
});