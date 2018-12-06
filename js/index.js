var slideTracker = 1,
		radioButtons = document.getElementsByClassName('side-buttons');

function slideThrough(element){
	console.log(element);
	if(element.id == 'left-arrow')
		{
			if(slideTracker <= 1)
				{
					slideTracker = 4;
				}
			slideTracker -= 1;
		}else{
			slideTracker += 1;
		}
	switch(slideTracker){
		case 1:
			$('.logos').css('transform', 'translateX(0vw)').css('transition', 'transform 1s');
			$("#slide1").prop("checked", true);
			break;
		case 2:
			$('.logos').css('transform', 'translateX(-100vw)').css('transition', 'transform 1s');
			$("#slide2").prop("checked", true);
			break;
		case 3:
			$('.logos').css('transform', 'translateX(-200vw)').css('transition', 'transform 1s');
			$("#slide3").prop("checked", true);
			break;
		case 4:
			$('.logos').css('transform', 'translateX(0vw)').css('transition', 'transform 1s');
			slideTracker = 1;
			$("#slide1").prop("checked", true);
			break;
	}
}

setInterval(function(){ slideThrough({})}, 5000);

//Loop through the slides using arrows
$('.arrows').click(function(){
	slideThrough(this);
});		

//Loop through the slides using buttons
$('.slide-buttons').click(function(){
	switch(this.id){
			case "slide1":
				$('.logos').css('transform', 'translateX(0vw)').css('transition', 'transform 1s');
				slideTracker = 1;
				break;
		case "slide2":
				$('.logos').css('transform', 'translateX(-100vw)').css('transition', 'transform 1s');
				slideTracker = 2;
				break;
		case "slide3":
				$('.logos').css('transform', 'translateX(-200vw)').css('transition', 'transform 1s');
				slideTracker = 3;
				break;
	}
});