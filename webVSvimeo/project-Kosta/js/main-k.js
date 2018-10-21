
		console.log("fix1");
		// document.querySelector("#MyVideo").src = " styles/video/videoMain1-2.mp4";

		// document.querySelector("#MyVideo").src = " styles/video/videoMain2-2.mp4";
		// document.querySelector("#MyVideo").src = " styles/video/videoMain3-2.mp4";

window.onload = function ()
{
	console.log("11111111");
		preloader = document.getElementById('page-preloader');

		if(!detectmob() || (!detectmob2())){
		document.getElementById("MyVideo1").src = "styles/video/videoMain1.mp4";
		document.getElementById("MyVideo2").src = "styles/video/videoMain2.mp4";
		document.getElementById("MyVideo3").src = "styles/video/videoMain33.mp4";
		document.getElementById("MyVideo4").src = "styles/video/videoMain33.mp4";
		document.getElementById("MyVideo5").src = "styles/video/videoMain33.mp4";
	}
		setTimeout(function()
		{
			if(!preloader.classList.contains('done'))
			{
				preloader.classList.add('done');
				
				// document.getElementById("MyVideoForLoad2").classList.add("displayNone");
				// document.getElementById("MyVideoForLoad3").classList.add("displayNone");
			
			}
			addAnimationFirst();
		 
			document.querySelector('header').classList.add('animeForHeader');
			document.querySelector('footer').classList.add('animeForHeader');

		},2000);
		setTimeout(()=>{
				animeActiveVideoList(listLines1,lineWidth1);
			},2800);
	setTimeout(()=>{
				nonActiveVideoList(listLines1,lineWidth1);
				counterChanger=0;
			},11200);

		videoTimer();
		topBotAnime();
		
		
		 
}
 


			const video1  = document.querySelector("#MyVideo1");
			const video2  = document.querySelector("#MyVideo2");
			const video3  = document.querySelector("#MyVideo3");
			const video4  = document.querySelector("#MyVideo4");
			const video5  = document.querySelector("#MyVideo5");

			const blockForHover = document.querySelector('#videoAbsol1Second');
			const blockForHover2 = document.querySelector('#videoAbsol2Second');
			const blockForHover3 = document.querySelector('#videoAbsol3Second');
			const blockForHover4 = document.querySelector('#videoAbsol4Second');
			const blockForHover5 = document.querySelector('#videoAbsol5Second');


			const vAbs1   = document.querySelector("#videoAbsol1");
			const vAbs2   = document.querySelector("#videoAbsol2");
			const vAbs3   = document.querySelector("#videoAbsol3");
			const vAbs4   = document.querySelector("#videoAbsol4");
			const vAbs5   = document.querySelector("#videoAbsol5");

			const topPart = document.querySelector('.top_part');
			const midPart = document.querySelector('.mid_part');
			const botPart = document.querySelector('.bot_part');



			const topPart2 = document.querySelector('.video-block2 .top_part');
			const midPart2 = document.querySelector('.video-block2 .mid_part');
			const botPart2 = document.querySelector('.video-block2 .bot_part');



			const topPart3 = document.querySelector('.video-block3 .top_part');
			const midPart3 = document.querySelector('.video-block3 .mid_part');
			const botPart3 = document.querySelector('.video-block3 .bot_part');


			const topPart4 = document.querySelector('.video-block4 .top_part');
			const midPart4 = document.querySelector('.video-block4 .mid_part');
			const botPart4 = document.querySelector('.video-block4 .bot_part');

			const topPart5 = document.querySelector('.video-block5 .top_part');
			const midPart5 = document.querySelector('.video-block5 .mid_part');
			const botPart5 = document.querySelector('.video-block5 .bot_part');






			const arrowTop = document.querySelector("#arrowUp");
			arrowTop.classList.add("displayNone");

		
		 	 
			

			$('#wc').scroll(function(){

				if ( ($(this).scrollTop()+$('#wc').height()) > $("#woman").offset().top)
				{
					arrowTop.classList.remove("displayNone");

				}
				else
				{
					arrowTop.classList.add("displayNone");
				}
			});

			$(document).ready(function(){

				$("#arrowUp").on("click", function (event) {

					 
			
					$('#wc').animate({scrollTop:0}, 1000);

				});

			});
       		



	


 			function FirstPartHoverOn(top,bot,mid,vAbs,video)
			{
					top.classList.add('makeItDisapir');
					bot.classList.add('makeItDisapir');
					mid.classList.add('worksAnime1');
					vAbs.classList.add('worksAnime1');
					setTimeout(()=>
					{
						video.play();
					},10);
					
			}
			function LastPartHoverOn(top,bot,mid,vAbs)
			{
					mid.classList.add('makeItDisapir');
					vAbs.classList.remove('worksAnime1');
					mid.classList.remove('worksAnime1');
					top.classList.remove('makeItDisapir');
					bot.classList.remove('makeItDisapir');
			}
			function FirstHoverOff(top,bot,mid,vAbs)
			{
				mid.classList.remove('makeItDisapir');
				top.classList.add('makeItDisapir'); //removing waves animation
				bot.classList.add('makeItDisapir'); //removing waves animation
				vAbs.classList.add('worksAnime2');
				mid.classList.add('worksAnime2');
			}
			function LastHoverOff(top,bot,mid,vAbs,video)
			{

				top.classList.add('makeItDisapir');
				bot.classList.add('makeItDisapir');
				mid.classList.remove('worksAnime2');

				vAbs.classList.remove('worksAnime2');
				video.pause();
			}


			let flag1 = 0;
			if(!detectmob() || (!detectmob2()))
			{
				
				blockForHover.addEventListener('mouseenter',function()
				{

				blockForHover.removeEventListener('mouseleave',function(){});
				HoverOnVideo1();
				setTimeout(()=>
				{
					blockForHover.addEventListener('mouseleave',function(){});
				},1000);
			});
				blockForHover.addEventListener('mouseleave',function()
				{
				blockForHover.removeEventListener('mouseenter',function(){});
				HoverOffVideo1();
				setTimeout(()=>
				{
					blockForHover.addEventListener('mouseenter',function(){});
				},1000);
			});
			}

		function HoverOnVideo1()
		{

			if(flag1==0)
			{
				setTimeout(()=>
				{
					FirstPartHoverOn(topPart,botPart,midPart,vAbs1,video1);
				},0);
				

				setTimeout(function()
				{

					LastPartHoverOn(topPart,botPart,midPart,vAbs1);
					flag1=1;
				},955);
				}
				else
							{
								setTimeout(()=>
								{
									blockForHover.addEventListener('mouseenter',function()
										{
											
											blockForHover.removeEventListener('mouseleave',function(){});
											HoverOnVideo1();
											setTimeout(()=>
											{
												blockForHover.addEventListener('mouseleave',function(){});
												flag1=0;
											},1000);
										});
								},100);
							}
		}
	function HoverOffVideo1()
		{
				if(flag1 ==1)
				{
								setTimeout(()=>{
									FirstHoverOff(topPart,botPart,midPart,vAbs1);
									// blockForHover.removeEventListener('mouseenter',function(){});
								},10);
									
									setTimeout(function()
									{
										LastHoverOff(topPart,botPart,midPart,vAbs1,video1);
										// blockForHover.addEventListener('mouseenter',function(){});
										flag1=0;
										
									},1500);
								}
							else
							{
								setTimeout(()=>
								{
									HoverOffVideo1();
									flag1=1;
								},900);
							}
		}

			

	let flag22 = 0;
		if(!detectmob()||!detectmob2())
		{

			
			blockForHover2.addEventListener('mouseenter',function()
			{
				
				blockForHover2.removeEventListener('mouseleave',function(){});
				HoverOnVideo2();
				setTimeout(()=>
				{
					blockForHover2.addEventListener('mouseleave',function(){});
				},1000);
			});
			blockForHover2.addEventListener('mouseleave',function()
			{
				blockForHover2.removeEventListener('mouseenter',function(){});
				HoverOffVideo2();
				setTimeout(()=>
				{
					blockForHover2.addEventListener('mouseenter',function(){});
				},1000);
			});

		}

		function HoverOnVideo2()
		{

			if(flag22==0)
			{
				setTimeout(()=>
				{
					
			
					FirstPartHoverOn(topPart2,botPart2,midPart2,vAbs2,video2);
				},0);
				

				setTimeout(function()
				{
					LastPartHoverOn(topPart2,botPart2,midPart2,vAbs2);
					flag22=1;
					
				},955);

			
				}
				else
							{
								setTimeout(()=>
								{
									blockForHover2.addEventListener('mouseenter',function()
										{
											
											blockForHover2.removeEventListener('mouseleave',function(){});
											HoverOnVideo2();
											setTimeout(()=>
											{
												blockForHover2.addEventListener('mouseleave',function(){});
												flag22=0;
											},1000);
										});
								},100);
							}
		}
	function HoverOffVideo2()
		{

							if(flag22==1)
							{
									setTimeout(()=>{
									
									FirstHoverOff(topPart2,botPart2,midPart2,vAbs2);
								},0);
									
									setTimeout(function()
									{

										LastHoverOff(topPart2,botPart2,midPart2,vAbs2,video2);
										flag22=0;

									},1600);

								}
							else
							{
								setTimeout(()=>
								{
									
									HoverOffVideo2();
									 flag22=1;
								},900);
							}


		}
			let flag3 = 0;
		if(!detectmob()||!detectmob2())
		{

		
			blockForHover3.addEventListener('mouseenter',function()
			{
				
				blockForHover3.removeEventListener('mouseleave',function(){});
				HoverOnVideo3();
				setTimeout(()=>
				{
					blockForHover3.addEventListener('mouseleave',function(){});
				},1000);
			});
			blockForHover3.addEventListener('mouseleave',function()
			{
				blockForHover3.removeEventListener('mouseenter',function(){});
				HoverOffVideo3();
				setTimeout(()=>
				{
					blockForHover3.addEventListener('mouseenter',function(){});
				},1000);
			});
		}

		function HoverOnVideo3()
		{

			if(flag3==0)
			{
				setTimeout(()=>
				{
					FirstPartHoverOn(topPart3,botPart3,midPart3,vAbs3,video3);
				},0);
				

				setTimeout(function()
				{

					LastPartHoverOn(topPart3,botPart3,midPart3,vAbs3);
					flag3=1;
				},955);
				}
				else
							{
								setTimeout(()=>
								{
									blockForHover3.addEventListener('mouseenter',function()
										{
											
											blockForHover3.removeEventListener('mouseleave',function(){});
											HoverOnVideo3();
											setTimeout(()=>
											{
												blockForHover3.addEventListener('mouseleave',function(){});
												flag3=0;
											},1000);
										});
								},100);
							}
		}
	function HoverOffVideo3()
		{
			if(flag3 ==1)
			{
				setTimeout(()=>{
					FirstHoverOff(topPart3,botPart3,midPart3,vAbs3);
				},10);

				setTimeout(function()
				{
					LastHoverOff(topPart3,botPart3,midPart3,vAbs3,video3);
					flag3=0;

				},1600);
			}
			else
			{
				setTimeout(()=>
				{
					HoverOffVideo3();
					flag3=1;
				},900);
			}
		}


			let flag4 = 0;
		if(!detectmob()||!detectmob2())
		{

		
			blockForHover4.addEventListener('mouseenter',function()
			{
				
				blockForHover4.removeEventListener('mouseleave',function(){});
				HoverOnVideo4();
				setTimeout(()=>
				{
					blockForHover4.addEventListener('mouseleave',function(){});
				},1000);
			});
			blockForHover4.addEventListener('mouseleave',function()
			{
				blockForHover4.removeEventListener('mouseenter',function(){});
				HoverOffVideo4();
				setTimeout(()=>
				{
					blockForHover4.addEventListener('mouseenter',function(){});
				},1000);
			});
		}

		function HoverOnVideo4()
		{

			if(flag4==0)
			{
				setTimeout(()=>
				{
					FirstPartHoverOn(topPart4,botPart4,midPart4,vAbs4,video4);
				},0);
				

				setTimeout(function()
				{

					LastPartHoverOn(topPart4,botPart4,midPart4,vAbs4);
					flag4=1;
				},955);
				}
				else
							{
								setTimeout(()=>
								{
									blockForHover4.addEventListener('mouseenter',function()
										{
											
											blockForHover4.removeEventListener('mouseleave',function(){});
											HoverOnVideo4();
											setTimeout(()=>
											{
												blockForHover4.addEventListener('mouseleave',function(){});
												flag4=0;
											},1000);
										});
								},100);
							}
		}
	function HoverOffVideo4()
		{
			if(flag4 ==1)
			{
				setTimeout(()=>{
					FirstHoverOff(topPart4,botPart4,midPart4,vAbs4);
				},10);

				setTimeout(function()
				{
					LastHoverOff(topPart4,botPart4,midPart4,vAbs4,video4);
					flag4=0;

				},1600);
			}
			else
			{
				setTimeout(()=>
				{
					HoverOffVideo4();
					flag4=1;
				},900);
			}
		}


		let flag5 = 0;
		if(!detectmob()||!detectmob2())
		{

		
			blockForHover5.addEventListener('mouseenter',function()
			{
				
				blockForHover5.removeEventListener('mouseleave',function(){});
				HoverOnVideo5();
				setTimeout(()=>
				{
					blockForHover5.addEventListener('mouseleave',function(){});
				},1000);
			});
			blockForHover5.addEventListener('mouseleave',function()
			{
				blockForHover5.removeEventListener('mouseenter',function(){});
				HoverOffVideo5();
				setTimeout(()=>
				{
					blockForHover5.addEventListener('mouseenter',function(){});
				},1000);
			});
		}

		function HoverOnVideo5()
		{

			if(flag5==0)
			{
				setTimeout(()=>
				{
					FirstPartHoverOn(topPart5,botPart5,midPart5,vAbs5,video5);
				},0);
				

				setTimeout(function()
				{

					LastPartHoverOn(topPart5,botPart5,midPart5,vAbs5);
					flag5=1;
				},955);
				}
				else
							{
								setTimeout(()=>
								{
									blockForHover5.addEventListener('mouseenter',function()
										{
											
											blockForHover5.removeEventListener('mouseleave',function(){});
											HoverOnVideo5();
											setTimeout(()=>
											{
												blockForHover5.addEventListener('mouseleave',function(){});
												flag5=0;
											},1000);
										});
								},100);
							}
		}
	function HoverOffVideo5()
		{
			if(flag5 ==1)
			{
				setTimeout(()=>{
					FirstHoverOff(topPart5,botPart5,midPart5,vAbs5);
				},10);

				setTimeout(function()
				{
					LastHoverOff(topPart5,botPart5,midPart5,vAbs5,video5);
					flag5=0;

				},1600);
			}
			else
			{
				setTimeout(()=>
				{
					HoverOffVideo5();
					flag5=1;
				},900);
			}
		}






			// This is the URL of the video you want to load
        var videoUrl = 'https://vimeo.com/295411343';
        // This is the oEmbed endpoint for Vimeo (we're using JSON)
        // (Vimeo also supports oEmbed discovery. See the PHP example.)
        var endpoint = 'https://www.vimeo.com/api/oembed.json';
        // Tell Vimeo what function to call
        var callback = 'embedVideo';
        // Put together the URL
        var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=640';
        // This function puts the video on the page
        function embedVideo(video) {
            document.getElementById('embed').innerHTML = unescape(video.html);
        }
        // This function loads the data from Vimeo
        function init() {
            var js = document.createElement('script');
            js.setAttribute('type', 'text/javascript');
            js.setAttribute('src', url);
            document.getElementsByTagName('head').item(0).appendChild(js);
        }
        // Call our init function when the page loads
        init();

			const closerModal = document.querySelector(".video-closer");

			const videoModal_1 = document.querySelector("#video_modal1");


			const vvPlayer = document.querySelector(".iFrame");

			vvPlayer.addEventListener("mouseenter",()=>
			{
				console.log("on");
			})
// 			// const vid3 = document.querySelector('#v3');

// 			const videoModal_2 = document.querySelector("#video_modal2");
// 			const vid2 = document.querySelector('#v2');

// 			const videoModal_3 = document.querySelector("#video_modal3");
// 			const vid1 = document.querySelector('#v1');

// 			const videoModal_4 = document.querySelector("#video_modal4");
// 			const vid4 = document.querySelector('#v4');

			 
				// closerModal.classList.add('displayNone');
			 
			modalWindows( blockForHover,"https://player.vimeo.com/video/295411343" );
			modalWindows( blockForHover2,"https://player.vimeo.com/video/295406065" );
			modalWindows( blockForHover3, "https://player.vimeo.com/video/295627398" );
			modalWindows( blockForHover5, "https://player.vimeo.com/video/296165150" );
			modalWindows( blockForHover4, "https://player.vimeo.com/video/296166689" );
			

 var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);
// const vv = document.getElementById("vv");
function modalWindows(blockHover,curSrc)
{
		videoModal_1.classList.add('makeitDisapir');
	 		if(!detectmob()||!detectmob2())
	 		{
				 

				vvPlayer.addEventListener("mouseenter",()=>
				{
					 closerModal.classList.add('displayNone');
					
				},true);
				vvPlayer.addEventListener("mouseleave",()=>
				{
					 closerModal.classList.remove('displayNone');
					 
				},true);
			}


				closerModal.addEventListener('click',function()
			{	
				videoModal_1.classList.add('displayNone');
				videoModal_1.classList.remove("showit");
				
				 closerModal.classList.add('displayNone');
				// video.pause();
				player.pause();
				// video.src = "";
			});
			blockHover.addEventListener('click',function()
			{	
				
				if(detectmob()||(detectmob2()))
	 		{
				closerModal.classList.remove('displayNone');

				

			}

				
				videoModal_1.classList.remove("makeitDisapir");
				iframe.src = curSrc;
				videoModal_1.classList.add("showit");
			
			});
			
}			  
	


function underlineIt()
{	
	const main = document.getElementById('mainSection');
	const arrayButtons = document.querySelectorAll("#nav a");
	const arrayUndelines = document.querySelectorAll("#navL");
	
	let prev = 0;

	for(let b = 0;b<arrayButtons.length;b++)
	{
		
		arrayButtons[b].addEventListener('click', function()
		{
			arrayUndelines[prev].classList.remove('underline');
			arrayUndelines[b].classList.add('underline');
			prev = b;
		});
		main.addEventListener('click', function()
		{
			arrayUndelines[b].classList.remove('underline');
		});
	}

}
underlineIt();

function changeNameOfTrack(name)
{
	let textVideo = document.querySelector(".nameOfTrack");
	textVideo.innerHTML = `${name}`;
}


let clArr = ["0","0","0","0","0","0","0"];

function animeForClients()
{
	const clientsArray = document.querySelectorAll(".ex");
	 
	
	clientsArray.forEach(function(e,index)
	{
		// clArr[index] = 0;
		e.addEventListener("mouseenter",function()
		{

			if(clArr[index]==0)
			{

			 
			 clientsArray[index].classList.add('animeForClients');
		 	
		 	setTimeout(()=>
		 	{
		 		clientsArray[index].classList.remove('animeForClients');
		 		clArr[index]=1;
		 	},2000);
			}
		 	
			 
		})
		e.addEventListener("mouseleave",function()
		{
			 
			 if(clArr[index]==1)
			 {

			 
		 	clientsArray[index].classList.add('animeForClients2');
		 	setTimeout(()=>
		 	{
		 		clientsArray[index].classList.remove('animeForClients2');
		 		clArr[index]=0;
		 	},2000);
		 	}
		 	
			 
		})
		
	})
	// if(m==clientsArray.length-1)
	// 	{
	// 		animeForClients();
			 
	// 	}
}
 animeForClients();
function initMap() {
	
	var centerLatLng = new google.maps.LatLng(50.462161, 30.619765);
	
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 15,
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#191919"}]},
		{"featureType":"landscape","elementType":"all","stylers":[{"color":"#000000"}]},
		{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
		{"featureType":"road","elementType":"all","stylers":[{"saturation":-50},{"lightness":65},{"color":"#2a2a2a"}]},
		{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#2f2f2f"}]},
		{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"},{"color":"#191919"}]},
		{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
		{"featureType":"water","elementType":"all","stylers":[{"color":"#a00013"},{"visibility":"off"}]}]           
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
		position: centerLatLng,               // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
		map: map,                             // Карта на которую нужно добавить маркер
		title: "г. Киев,ул. Александра Бойченко, 8", // (Необязательно) Текст выводимый в момент наведения на маркер,
		icon: {
			url :"styles/images/marker.png",
			scaledSize: new google.maps.Size(40,50)  
		}       
	});
}
// Ждем полной загрузки страницы, после этого запускаем initMap()

google.maps.event.addDomListener(window, "load", initMap);

// jQuery(document).ready(function($) {
//   $(window).load(function() {
//     setTimeout(function() {
//       $('#preloader').fadeOut('slow', function() {});
//     }, 2000);

//   });
// });
// $(document).ready(function()
// {

// var hash = window.location.hash.substr(1);
// var href = $('#nav li a').each(function(){
// 	var href = $(this).attr('href');
// 	if(hash==href.substr(0,href.length-5)){
// 		var toLoad = hash+'.html #content';
// 		$('#content').load(toLoad);
// 	} 
// });

// $('#nav li a').click(function(){

// 	var toLoad = $(this).attr('href')+' #content';
// 	$('#content').hide('fast',loadContent);
// 	$('#load').remove();
// 	$('#wrapper').append('<span id="load">LOADING...</span>');
// 	$('#load').fadeIn('normal');
// 	window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
// 	function loadContent() {
// 		$('#content').load(toLoad,'',showNewContent())
// 	}
// 	function showNewContent() {
// 		$('#content').show('slow',hideLoader());
// 	}
// 	function hideLoader() {
// 		$('#load').fadeOut('normal');
// 	}


// });
// });
var video = document.getElementById('MyVideo');
var arrayVideo = [" styles/video/videoMain1-2.mp4", " styles/video/videoMain2-2.mp4", "styles/video/videoMain3-2.mp4" ];
var arrayImages = ["url('styles/images/mobMain1.png')","url('styles/images/mobMain2.png')","url('styles/images/mobMain3.png')"]
var arrayImagePos = ["mob_backgr_pos1","mob_backgr_pos2","mob_backgr_pos3"];
var arrayVideoDuration = ["12000","9400","8300"];
var arrayVideoNames = ["UKRAINE","KYIV IS MY CITY","WOMAN"];
var arrayImagesNames = ["UKRAINE","KYIV IS MY CITY","WOMAN"];
var counterVideo = 0;
var counterChanger = -1;
var fixIt = 0;
// video.src = arrayVideo[2];


// video.src = arrayVideo[0];
let lineWidth1 = document.querySelector("#chgLine1");
let listLines1 = document.querySelector("#listLines1");

let lineWidth2 = document.querySelector("#chgLine2");
let listLines2 = document.querySelector("#listLines2");

let lineWidth3 = document.querySelector("#chgLine3");
let listLines3 = document.querySelector("#listLines3");

let fkn_dot = document.querySelector(".changer_dot");

let changerArrayL1 = [listLines1,listLines2,listLines3,listLines1];
let changerArrayL2 = [lineWidth1,lineWidth2,lineWidth3,lineWidth1];

function animeActiveVideoList(l1,l2)
{
	
	l1.classList.remove('classForChangerAnimeOff');	
	l2.classList.remove("changingLineAnimeOff");
	l1.classList.remove('staticClassForChangerOff');
	l2.classList.remove("staticChangingLineOff");

	
	
	
	l1.classList.add("classForChangerAnime");
	l2.classList.add("changingLineAnime");
	setTimeout(function()
{
	l1.classList.remove('classForChangerAnime');
	l2.classList.remove("changingLineAnime");
	l1.classList.add("staticClassForChanger");
	l2.classList.add("staticChangingLine");


},995);


}


function nonActiveVideoList(l1,l2)
{	
		l1.classList.remove("staticClassForChanger");
		l2.classList.remove("staticChangingLine");
		l1.classList.remove("classForChangerAnime");
		// l1.classList.add("changingLineAnime");
		l2.classList.remove("changingLineAnime");
		l1.classList.add('classForChangerAnimeOff');
		l2.classList.add("changingLineAnimeOff");
		

	setTimeout(function()
	{
		l1.classList.add('staticClassForChangerOff');
		l2.classList.add("staticChangingLineOff");
		l1.classList.remove("staticClassForChanger");
		l2.classList.remove("staticChangingLine");
	
	},995);
}	


let topLine = document.querySelector("#topLine");
let botLine = document.querySelector('#botLine');
let counterAnimeLines = 0;


function topBotAnime(){

	// setTimeout(()=>
	// {
	// 	if(counterAnimeLines==0||counterAnimeLines==2)
	// 	{
	// 		topLine.classList.add("animeLineForward");
	// 		botLine.classList.add("animeLineReverse");
	// 	}
	// 	else
	// 	{
	// 		topLine.classList.add("animeLineReverse");
	// 		botLine.classList.add("animeLineForward");
	// 	}
		
	// },0);
	if(arrayVideoDuration[counterVideo]==12000)
	{
		setTimeout(()=>
		{
			botLine.classList.add("animeLineForward_12");
		},0);

		setTimeout(()=>
		{
			botLine.classList.remove("animeLineForward_12");

		// if(counterAnimeLines<3)
		// {
		// 	counterAnimeLines++;
		// 	topBotAnime();
		// }
		// else
		// {
		// 	counterAnimeLines=0;
		// 	topBotAnime();
		// }
	},arrayVideoDuration[counterVideo]);
	}
	if(arrayVideoDuration[counterVideo]==9400)
	{
		setTimeout(()=>
		{
			botLine.classList.add("animeLineForward_9");
		},0);

		setTimeout(()=>
		{
			botLine.classList.remove("animeLineForward_9");


		},arrayVideoDuration[counterVideo]);
	}
	if(arrayVideoDuration[counterVideo]==8300)
	{
		setTimeout(()=>
		{
			botLine.classList.add("animeLineForward_8");
		},0);

		setTimeout(()=>
		{
			botLine.classList.remove("animeLineForward_8");


		},arrayVideoDuration[counterVideo]);
	}
	// setTimeout(()=>
	// {
	// 	topLine.classList.remove("animeLineForward");
	// 	botLine.classList.remove("animeLineReverse");
		
	// 	topLine.classList.remove("animeLineReverse");
	// 	botLine.classList.remove("animeLineForward");
	
	
		
	// 	if(counterAnimeLines<3)
	// {
	// 	counterAnimeLines++;
	// 	topBotAnime();
	// }
	// else
	// {
	// 	counterAnimeLines=0;
	// 	topBotAnime();
	// }
	// },8000);
	
}

function detectmob2() {
   if(window.innerWidth <= 890|| window.innerHeight <= 600 ) {
   
     return true;
   } else {
   		 
     return false;
   }
}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
 	
    return true;
  }
 else {
 	 
    return false;
  }
}
let firstTime = 1;
let mobSlider = document.getElementById("mob_MyVideo");


function videoTimer()
{
	if(!detectmob() || (!detectmob2()))
	{
		 
		 
			video.src = arrayVideo[counterVideo];
		 
	topBotAnime();
	changeNameOfTrack(arrayVideoNames[counterVideo]);
	setTimeout(()=>{
				animeActiveVideoList(changerArrayL1[counterChanger],changerArrayL2[counterChanger]);
			},500);
	setTimeout(()=>{
				nonActiveVideoList(changerArrayL1[counterChanger],changerArrayL2[counterChanger]);
			},(arrayVideoDuration[counterVideo] - 800));
	setTimeout(function()
		{
			addAnimation();
			changeNameOfTrack(arrayVideoNames[counterVideo]);
			// setTimeout(()=>{
			// 	animeActiveVideoList(listLines2,lineWidth2);
			// },1500);
			
		},arrayVideoDuration[counterVideo] - 750);
	setTimeout(function()
	{
		
	 
		counterVideo++;
		counterChanger++;
		
		
		

		if(counterVideo<3)
		{
			setTimeout(function()
		{
			addAnimation();
			changeNameOfTrack(arrayVideoNames[counterVideo]);
		},arrayVideoDuration[counterVideo] - 750);
			videoTimer();

		}
		else
		{
		
			counterVideo=0;
			counterChanger=0;
			setTimeout(function()
		{
			addAnimation();
			changeNameOfTrack(arrayVideoNames[counterVideo]);
		},arrayVideoDuration[counterVideo] - 750);
			videoTimer();
		}
	},arrayVideoDuration[counterVideo]);
	}
	else
	{

		mobSlider.classList.remove("displayNone");
		mobSlider.style.backgroundImage = `${arrayImages[counterVideo]}`;
		mobSlider.classList.add(arrayImagePos[counterVideo]);
		video.classList.add("displayNone");

		changeNameOfTrack(arrayImagesNames[counterVideo]);

		setTimeout(()=>{
			animeActiveVideoList(changerArrayL1[counterChanger],changerArrayL2[counterChanger]);
		},500);
		setTimeout(()=>{
			nonActiveVideoList(changerArrayL1[counterChanger],changerArrayL2[counterChanger]);
		},(arrayVideoDuration[counterVideo] - 800));
		setTimeout(function()
		{
			addAnimation();
			changeNameOfTrack(arrayImagesNames[counterVideo]);
			 
			
		},arrayVideoDuration[counterVideo] - 800);
		setTimeout(function()
		{

			mobSlider.classList.remove(arrayImagePos[counterVideo]);
			counterVideo++;
			counterChanger++;




			if(counterVideo<3)
			{
				setTimeout(function()
				{
					addAnimation();
					changeNameOfTrack(arrayImagesNames[counterVideo]);
				},arrayVideoDuration[counterVideo] - 800);
				videoTimer();

			}
			else
			{

				counterVideo=0;
				counterChanger=0;
				setTimeout(function()
				{
					addAnimation();
					changeNameOfTrack(arrayImagesNames[counterVideo]);
				},arrayVideoDuration[counterVideo] - 800);
				videoTimer();
			}
		},arrayVideoDuration[counterVideo]);
		
	}
}

const lang_main = document.querySelector('#lang_main');

lang_main.classList.add("class_z-index_900");
// function ChangeZindex()
// {
	 
		
// 		console.log("900");
// 	 setTimeout(()=>
// 	{
// 		console.log("1100");
// 		lang_main.classList.remove("class_z-index_900");
// 		lang_main.classList.add("class_z-index_1100");
// 	},1400);
	
// 	setTimeout(()=>
// 	{
// 		console.log("900");
// 		lang_main.classList.remove("class_z-index_1100");
// 		lang_main.classList.add("class_z-index_900");
// 	},5200);

// }
var flagAnime = true;	
var extraCounter = 0;
var extraCounter2 = 1;
var lines = document.querySelectorAll("#block");
var but = document.querySelector("video");
function addAnimation(delay)
{
	 
	 	

		if(extraCounter==3)
		{
			extraCounter2= 0;
		}
		var count = 0;
		for(var i=0;i<lines.length;i++)
		{
			lines[i].classList.add('blockForAnime');
			setTimeout(()=>
			{
				 
				lang_main.classList.remove("class_z-index_900");
				lang_main.classList.add("class_z-index_1100");
			},1400);
			count++;
		}
		
		setTimeout(function()
		{
			if(count==lines.length)
			{
				for(var i=0;i<lines.length;i++)
				{
					lines[i].classList.remove('blockForAnime');

				}
			}
		},1400);
	
			setTimeout(()=>

			{
				 
				lang_main.classList.remove("class_z-index_1100");
				lang_main.classList.add("class_z-index_900");
			 	
			},arrayVideoDuration[extraCounter + extraCounter2]);
	
		extraCounter++;

}
function addAnimationFirst()
{
	var count2 = 0;
		for(var i=0;i<lines.length;i++)
		{
			lines[i].classList.add('blockForAnime');
			setTimeout(()=>
			{
				
				lang_main.classList.remove("class_z-index_900");
				lang_main.classList.add("class_z-index_1100");
			},1400);
			count2++;
		}
		
		setTimeout(function()
		{
			if(count2==lines.length)
			{
				for(var i=0;i<lines.length;i++)
				{
					lines[i].classList.remove('blockForAnime');

				}
			}
		},1400);

			setTimeout(()=>

			{
				 
				lang_main.classList.remove("class_z-index_1100");
				lang_main.classList.add("class_z-index_900");
			 
				 
			},9100);
}
const en = document.querySelector("#en");
const ua = document.querySelector("#ua");
const ru = document.querySelector("#ru");

const en2 = document.querySelector("#en2");
const ua2 = document.querySelector("#ua2");
const ru2 = document.querySelector("#ru2");

const en3 = document.querySelector("#en3");
const ua3 = document.querySelector("#ua3");
const ru3 = document.querySelector("#ru3");

const en4 = document.querySelector("#en4");
const ua4 = document.querySelector("#ua4");
const ru4 = document.querySelector("#ru4");

const en5 = document.querySelector("#en5");
const ua5 = document.querySelector("#ua5");
const ru5 = document.querySelector("#ru5");




ChangingLang(en,ru,ua);
ChangingLang(en2,ru2,ua2);
ChangingLang(en3,ru3,ua3);
ChangingLang(en4,ru4,ua4);
ChangingLang(en5,ru5,ua5);


function ChangingLang(en,ru,ua)
{
	
	$(en).on('click', function() {
		$('[data-en]').each(function() {
			$(this).text($(this).attr('data-en'));
		}); 
	});

	$(ru).on('click', function() {
		$('[data-ru]').each(function() {
			$(this).text($(this).attr('data-ru'));
		}); 
	});
	$(ua).on('click', function() {
		$('[data-ua]').each(function() {
			$(this).text($(this).attr('data-ua'));
		}); 
	});

 

}
	


 									//эквалайзер
	(function ($) {
    var methods = {
        init: function (options) {
			var p = {
				row:7,			//кол-во столбцов
				col:6,			//кол-во колонок
				speed:20,		//скорость подсветки кубиков
				freq:400,		//частота сигнала
				on:true			//включено по умолчанию (true,false)
			};
			if (options) {
				$.extend(p, options); 
			}
			var eqWrap = $(this).addClass('eqWrap');
			for(c=0;c<p.col;c++){
				var eqColEl = $('<div>').addClass('eqCol').appendTo(eqWrap); 
				for(r=0;r<p.row;r++){
					$('<div>').addClass('eqItem').appendTo(eqColEl); 	
				}
			}
			var 
			eqCol = $('.eqCol',eqWrap),
			eqItem = $('.eqItem',eqWrap),
			randomNumber = function (m,n){
				m = parseInt(m);
				n = parseInt(n);
				return Math.floor( Math.random() * (n - m + 1) ) + m;
			},
			eqUp = function(colEl,val){
				var 
				speed = p.speed,
				v = p.row - val,
				i=p.row,
				j=0,
				flag2=true,
				eachItemUp = function(){
					$('.eqItem',colEl).eq(i-1).nextAll().stop().css({opacity:'1'});
					if($('.eqItem',colEl).eq(i-1).css('opacity') == 1){
						flag2 = false
					}else{
						flag2 = true	
					}
					$('.eqItem',colEl).eq(i-1).stop(true).animate({opacity:'1'},p.speed,function(){
						if($('.eqItem',colEl).index(this) == v){
							if(flag2){
								eqDown(colEl,val);
							}
						}else{
							i--;
							j++;
							if(i>v){
								eachItemUp()	
							}
						}
					})	
					
				}
				eachItemUp()
			},
			eqDown = function(colEl,val){
				var 
				v = p.row - val,
				i = (p.row-val),
				j = 0,
				speed = p.speed*2,
				eachItemDown = function(){
					if(i == (p.row-val)){
						$('.eqItem',colEl).eq(i).animate({opacity:'0'},speed*10)
						setTimeout(function(){
							i++;
							j++;
							if(i<p.row){
								eachItemDown();
							}		
						},speed)
					}else{
						$('.eqItem',colEl).eq(i).animate({opacity:'0'},speed,function(){
							i++;
							j++;
							if(i<p.row){
								eachItemDown();
							}	
						})
					}
				}
				eachItemDown();
			},
			eqInterval = function(){
				eqCol.each(function(){
					eqUp($(this),randomNumber(0,p.row))	
				})
			}
			eqInterval()
			if(p.on){
				var eqIntervalId = setInterval(eqInterval,p.freq)
				$(this).data({
					'eqIntId':eqIntervalId,
					'eqInt':eqInterval,
					'freq':p.freq,
					'on':p.on
				})
			}else{
				$(this).data({
					'eqIntId':eqIntervalId,
					'eqInt':eqInterval,
					'freq':p.freq,
					'on':p.on
				})
			}
		},start: function () {
			if(!$(this).data('on')){
				$(this).data('eqInt')();
				var eqIntervalId = setInterval($(this).data('eqInt'),$(this).data('freq'));
				$(this).data({
					'eqIntId':eqIntervalId,
					'on':true
				})
			}
		},
        stop: function () {
			if($(this).data('on')){
				clearInterval($(this).data('eqIntId'));
				$('.eqItem',$(this)).animate({opacity:0})
				$(this).data({
					'on':false
				})
			}
		}
	};
    $.fn.liEqualizer = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод ' + method + ' в jQuery.liEqualizer не существует');
        }
    };
})(jQuery); 

$(function(){
				$('.anyClass2').liEqualizer({
		row:7,			//кол-во столбцов
		col:4,			//кол-во колонок
		speed:30,		//скорость подсветки кубиков
		freq:400,		//частота сигнала
		on:true			//включено по умолчанию (true,false)
	});
				$('.start').click(function(){
					$('.anyClass2').liEqualizer('start');
					return false;	
				})
				$('.stop').click(function(){
					$('.anyClass2').liEqualizer('stop');
					return false;	
				})
			});




let nav_links_mob = document.querySelectorAll("#nav_mob li");
 var burgerClicked = false;
var flagMob = false;
	let bur = document.getElementById("navmenumob");

	$('.burger-btn').on('click', function(e)
	{

		e.preventDefault;
		if(burgerClicked == false){
		document.querySelector(".burger-btn").classList.add('burger-btn-acitve');
		burgerClicked = true;
		
		nav_links_mob.forEach(function(e)
		{
			e.addEventListener("click",()=>{
				document.querySelector(".burger-btn").classList.remove('burger-btn-acitve');
				bur.classList.add("hidden_mob1");
				bur.classList.remove("visb_mob");
				flagMob=false;
				burgerClicked = false;
			});
		})
	}
	else
	{
		document.querySelector(".burger-btn").classList.remove('burger-btn-acitve');
		burgerClicked = false;
	}
		if(flagMob==false)
		{

			bur.classList.remove("hidden_mob1");
			bur.classList.add("visb_mob");
			flagMob=true;
		}
		else
		{
			bur.classList.add("hidden_mob1");
			bur.classList.remove("visb_mob");
			flagMob=false;
		}
		
	});