
// $(document).ready(function(){
//  $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//    navContainerClass: 'displayNone',
//  responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
    
// })
    

//  var owl = $('.owl-carousel');
//     $('.pre').click(function() {
     
//     owl.trigger('prev.owl.carousel', [300]);
// })

//     $('.next').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// });

 

function click_board_img(){

	var boards_list = document.querySelectorAll(".list_img img");
	// var img_list = document.querySelectorAll(".list_img img"); 
	// var current_img = document.getElementById("current_img");
	var prev_board_list_item = 0 ;
	 boards_list[0].classList.add("blue_border"); //default border of first element

	boards_list.forEach((elem,index)=>
	{
		
		elem.addEventListener('click',()=>
		{
			if(boards_list[prev_board_list_item]!== undefined)
			{
				boards_list[prev_board_list_item].classList.remove("blue_border");
			}
			elem.classList.add("blue_border");
			prev_board_list_item = index;
			
			// current_img.src = `${img_list[index].getAttribute('src') }`;  //for changing current img of block,but its needed full size imgs 
			 
		})
	})

}


 

function myUtube()
{	
	var player;
	var play = document.getElementById("play");
	var video_block = document.getElementById("video_block");

	play.addEventListener("click",()=>{
		video_block.classList.add("hidden");
		player = new YT.Player('yt', {

			videoId: 'ch_JeDyNaFM',

		});
		if(player)
		{
			var fn = function(){ player.playVideo(); }
			setTimeout(fn, 1000);
		}

	});
}

click_board_img();
myUtube();

 