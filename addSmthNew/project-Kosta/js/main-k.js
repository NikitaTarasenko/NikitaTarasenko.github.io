
	
	

window.onload = function ()
{
	 
		preloader = document.getElementById('page-preloader');

		
		setTimeout(function()
		{
			// if(!preloader.classList.contains('done'))
			// {
			// 	preloader.classList.add('done');
				
			
			// }

		// 		if(!detectmob() || (!detectmob2())){
		// document.getElementById("MyVideo1").src = "styles/video/videoMain1.mp4";
		// document.getElementById("MyVideo2").src = "styles/video/videoMain2.mp4";
		// document.getElementById("MyVideo3").src = "styles/video/videoMain33.mp4";
		// document.getElementById("MyVideo4").src = "styles/video/GO.mp4";
		// document.getElementById("MyVideo5").src = "styles/video/Gangsta_sport.mp4";
		// }
			addAnimationFirst();
		 
			document.querySelector('header').classList.add('animeForHeader');
			document.querySelector('footer').classList.add('animeForHeader');

		},4000);
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

	const man1 = document.getElementById("manL1");
	const man2 = document.getElementById("manL2");
	const man3 = document.getElementById("manL3");
	const text1 = document.getElementById("demo1");
	const text2 = document.getElementById("demo2");
	const text3 = document.getElementById("demo3");
	
	
 		
		



function underlineIt()
{	
	const main = document.getElementById('mainSection');
	const arrayButtons = document.querySelectorAll("#nav a");
	const arrayUndelines = document.querySelectorAll("#navL");
	const mainBlock = document.getElementById("mainBlock");
	let prev = 0;
	let prev2 = 0;

	arrayButtons.forEach((el,index)=>
	{
		el.addEventListener("mouseenter",()=>
		{
			arrayUndelines[index].classList.add("underline");
		})
		el.addEventListener("mouseleave",()=>
		{
			arrayUndelines[index].classList.remove("underline");
		})
	})
	// for(let b = 0;b<arrayButtons.length;b++)
	// {
		
	// 	arrayButtons[b].addEventListener('mouseenter', function()
	// 	{
	// 		arrayUndelines[prev].classList.remove('underline');
	// 		arrayUndelines[b].classList.add('underline');
	// 		prev = b;
	// 		arrayButtons[b].addEventListener("mouseleave", ()=>
	// 		{

	// 			arrayButtons[b].classList.remove("underline2");

	// 		})
	// 	});
		

	// 	main.addEventListener('mouseenter', function()
	// 	{
	// 		arrayUndelines[b].classList.remove('underline');
	// 	});

	// }

	for(let b2 = 0;b2<arrayButtons.length;b2++)
	{
		
			arrayButtons[b2].addEventListener('click', function()
		{
			arrayUndelines[prev2].classList.remove('underline2');
			arrayUndelines[b2].classList.add('underline2');
			prev2 = b2;
		});
		main.addEventListener('click', function()
		{
			arrayUndelines[b2].classList.remove('underline2');
		});
	}

}
underlineIt();


let FirstEnter = 0;
function aboutBlockAnime()
{
	var durationDelay =0;
	if(FirstEnter==0)
	{
		durationDelay=200;
	}
	else
	{
		durationDelay=1000;
	}
	setTimeout(()=>
	{
		
		 	man1.classList.add("man-logo-Anime");
		 	text1.classList.add("man-title-Anime");
		
		
		 
			man2.classList.add("man-logo-Anime2");
			text2.classList.add("man-title-Anime2");
	
		
	
				man3.classList.add("man-logo-Anime3");
				text3.classList.add("man-title-Anime3");
		
	
	},durationDelay);
	FirstEnter++;
}
function aboutAnimeOff()
{
	if(man1.classList.contains("man-logo-Anime"))
	{
	setTimeout(()=>
	{
		 
		man1.classList.remove("man-logo-Anime");
		man2.classList.remove("man-logo-Anime2");
		man3.classList.remove("man-logo-Anime3");
		text1.classList.remove("man-title-Anime");
		text2.classList.remove("man-title-Anime2");
		text3.classList.remove("man-title-Anime3");
	},100);
}

}

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
	// if(listLines1.classList.contains("classForChangerAnime"))
	// {
	l1.classList.remove('classForChangerAnime');
	l2.classList.remove("changingLineAnime");
	l1.classList.add("staticClassForChanger");
	l2.classList.add("staticChangingLine");
// }

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
	 
}
const photoLink = document.getElementById("photoLink");
const videoLink = document.getElementById("videoLink");
const twoBlocks = document.getElementById("twoBlocks");
 
	photoLink.addEventListener("mouseenter",(e)=>
	{
		e.stopPropagation();
		photoLink.classList.remove("widerBack");
		photoLink.classList.add("photoLink_wider");
	});
	photoLink.addEventListener("mouseleave",(e)=>
	{
		e.stopPropagation();
		photoLink.classList.add("widerBack");
		setTimeout(()=>
		{
			photoLink.classList.remove("photoLink_wider");	
		},600)
		
	});


	videoLink.addEventListener("mouseenter",()=>
	{
		videoLink.classList.remove("widerBack");
		videoLink.classList.add("videoLink_wider");
	});
	videoLink.addEventListener("mouseleave",()=>
	{
		videoLink.classList.add("widerBack");
		setTimeout(()=>
		{
			videoLink.classList.remove("videoLink_wider");	
		},600)
	});
 


function effect3dHover()
{
		let h1Photo = document.querySelector("#photoLink h1");
		let h1Video = document.querySelector("#videoLink h1");
		var mouseLeft = function(e){
			e.stopPropagation();
			let x1 = e.clientX/innerWidth;
			let y1 = e.clientY/innerHeight;

			let move_x;
   			let move_y;
   			move_y = (y1<0.5) ? '25px' : '-25px';
   			move_x = (x1>0.3) ? '-35px' : '35px';
   // 			if(y1<0.34) 
   // 			{
   // 			 move_x ='0px';
   // 			 move_y = "-20px";
   // 			}
   // 			if(y1>0.69) 
   // 			{
   // 			 move_x ='0px';
   // 			 move_y = "20px";
   // 			}
   // 			if(x1<0.16) 
   // 			{
   // 			 move_x ='-30px';
   // 			 move_y = "0px";
   // 			}
   // 			if(x1>0.4) 
   // 			{
   // 			 move_x ='30px';
   // 			 move_y = "0px";
   // 			}
   // 			if(x1>0.38&&y1>0.68)
   // 			{
   // 				move_x ='-35px';
   // 				move_y = "-20px";
   // 			}
   // 			if(x1>0.19&&y1>0.38)
   // 			{
   // 				move_x ='35px';
   // 				move_y = "20px";
   // 			}


			// if(x1>0.38&&y1>0.4)
   // 			{
   // 				move_x ='-35px';
   // 				move_y = "20px";
   // 			}
   // 			if(x1<0.17&&y1>0.66)
   // 			{
   // 				move_x ='35px';
   // 				move_y = "25px";
   // 			}
   // 			if(x1<0.19&&y1<0.4)
   // 			{
   // 				move_x ='35px';
   // 				move_y = "0px";
   // 			}
   // 			if(x1>0.4&&y1>0.6)
   // 			{
   // 				move_x ='-35px';
   // 				move_y = "0px";
   // 			}

			h1Photo.style.textShadow = `${move_x} ${move_y} 130px #fff	`;

			// console.log(x1 + "and" + y1);
		
		}
		h1Photo.addEventListener("mousemove",mouseLeft);

		var mouseRight = function(e){
			e.stopPropagation();
			let x2 = e.clientX/innerWidth;
			let y2 = e.clientY/innerHeight;

			let move_x2 = (x2>0.5) ? '-15px' : '15px';
   			let move_y2 = (y2>0.5) ? '-10px' : '10px';
   			// if(x2<0.5&&y2)
   			if(x2<0.3) 
   			{

   			 move_x ='-35px';
   			}
			h1Video.style.textShadow = `${move_x2} ${move_y2} 120px #fff	`;

				// console.log(x2 + "and" + y2);
		}
		h1Video.addEventListener("mousemove",mouseRight);
		
		photoLink.addEventListener("mouseleave",(e)=>
		{
			h1Photo.style.textShadow = `10px 10px 150px #fff	`;
			
		});
		videoLink.addEventListener("mouseleave",(e)=>
		{
		
			h1Video.style.textShadow = `10px 10px 150px #fff	`;
		});
}
 effect3dHover();

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
			 
			
		},arrayVideoDuration[counterVideo] - 750);
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
					changeNameOfTrack(arrayImagesNames[counterVideo]);
				},arrayVideoDuration[counterVideo] - 750);
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

const en3 = document.querySelector("#en3_1");
const ua3 = document.querySelector("#ua3_1");
const ru3 = document.querySelector("#ru3_1");

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