console.log('hi!');

let reveal = false;

$(document).ready(function(){
	let counter = 0; //count the number of questions
	let questions = $("div[class^='questions']");
	let qcount = questions.length;

	if (!reveal) {

		//level1
	  $(".questions1").each(function(){
	  	$(this).on('mouseover', function(){
		  	// console.log('hover');

		  	if(  $(this).hasClass('reveal1') ){
		  		// this div already has the reveal class
		  	}else{
		  		  $(this).addClass('reveal1');
		  		  counter ++;
		  	}

		    console.log(counter);

		    if(counter == qcount){
		    	console.log('reveal answer');
		    	$('.answer1').addClass('showanswer1');
		    	$('.answer1 p').addClass('showanswer1');
		    	reveal = true;
		    }

		  });
		});

	  //level2
	  $('.questions2').each(function(){
	  	$(this).on('mouseover', function(){
		  	// console.log('hover');

		  	if(  $(this).hasClass('reveal2') ){
		  		// this div already has the reveal class
		  	}else{
		  		  $(this).addClass('reveal2');
		  		  counter ++;
		  	}

		    console.log(counter);

		    if(counter == qcount){
		    	console.log('reveal answer');
		    	$('#fence').addClass('showanswer2');
		    	reveal = true;
		    }

		  });
		});

  		//level3
  		$('.answer3').on('mouseover', function(){
  			$(this).stop();
  		})
  		$('.questions3').each(function(){
	  	$(this).on('mouseover', function(){
		  	// console.log('hover');

		  	if(  $(this).hasClass('reveal3') ){
		  		// this div already has the reveal class
		  	}else{
		  		  $(this).addClass('reveal3');
		  		  counter ++;
		  	}

		    console.log(counter);

		    if(counter == qcount){
		    	console.log('reveal answer');
		    	$('.answer3').addClass('showanswer3');
		    	$('.text3').addClass('hide3');
		    	reveal = true;
		    	setTimeout(function(){ animateDiv(); }, 1000);
		    }

		  });
		});


  		//level4
  		$('.questions4').each(function(){
	  	$(this).on('mouseover', function(){
		  	// console.log('hover');

		  	if(  $(this).hasClass('reveal4') ){
		  		// this div already has the reveal class
		  	}else{
		  		  $(this).addClass('reveal4');
		  		  counter ++;
		  	}

		    console.log(counter);

		    if(counter == qcount){
		    	console.log('reveal answer');
		    	$('.answer4').addClass('showanswer4');
		    	$('.text4').addClass('hide');
		    	reveal = true;

		    	 window.addEventListener("mousemove", function (e) {
				  var to_append = document.getElementsByClassName('loader-container')[0];
				  var all = document.getElementsByClassName('loader-container');

				  var parent_div = document.createElement('div');
				  parent_div.className = "loader-container";
				  var inner_div = document.createElement('div');
				  inner_div.className = "loader";
				  inner_div.innerHTML = "FOOTPRINTS"; 
				  parent_div.appendChild(inner_div)
				  var d = document.body.appendChild(parent_div);

				  parent_div.style.left = (e.clientX - 40)+'px';
				  parent_div.style.top = (e.clientY - 40)+'px';

				  if(document.getElementsByClassName('loader-container').length > 570) {
				    document.body.removeChild(to_append)
				  }
				});
		    }

		  });
		});







  		//level5
  		$('.questions5').each(function(){
	  	$(this).on('mouseover', function(){
		  	// console.log('hover');

		  	if(  $(this).hasClass('reveal5') ){
		  		// this div already has the reveal class
		  	}else{
		  		  $(this).addClass('reveal5');
		  		  counter ++;
		  	}

		    console.log(counter);

		    if(counter == qcount){
		    	console.log('reveal answer');
		    	$('.answer5').addClass('showanswer5');
		    	reveal = true;
		    }

		  });
		});



	}

});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.answer3 ').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};



// $("div:contains('I')").click(function() {
//   $("*").fadeOut();
// });