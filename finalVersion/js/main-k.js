

$(document).ready(function()
{
	NProgress.start();
})

window.onload = function ()
{


	if(!detectmob() || (!detectmob2())){
	setTimeout(()=>
	{
		checkVideoLoad();
		
	},3000);
	
 	}
 	else
 	{
 		 setTimeout(()=>
		    {
		    	NProgress.set(0.4);
		    },1000);
		    setTimeout(()=>
		    {
		    	NProgress.set(0.6);
		    },1500);
		    setTimeout(()=>
		    {
		    	NProgress.set(0.8);
		    },2000);
		    setTimeout(function()
		    {
		    	NProgress.done();
		    	document.getElementById("head").classList.remove("displayNone");

		    },3000);
 	}

    preloader = document.getElementById('page-preloader');
    
    setTimeout(function()
    {
    	if(window.location.href.indexOf("#main") > -1) {
    		mySwiper.slideTo(1);

    	}
    	if(window.location.href.indexOf("#about") > -1) {

    		aboutBlockAnime();
    		mySwiper.slideTo(2);
    		arrayUndelines[0].classList.add('underline2');
    		prev2=0;
    		
    	}
    	if(window.location.href.indexOf("#work") > -1) {
    		mySwiper.slideTo(3);
    		arrayUndelines[1].classList.add('underline2');
    		prev2=1;
    	}
    	if(window.location.href.indexOf("#contacts") > -1) {
    		mySwiper.slideTo(4);
    		arrayUndelines[2].classList.add('underline2');
    		prev2=2;
    	}
    	if(window.location.href.indexOf("#clients") > -1) {
    		mySwiper.slideTo(5);
    		arrayUndelines[3].classList.add('underline2');
    		prev2=3;
    	}
    	if(window.location.href.indexOf("#order") > -1) {
    		mySwiper.slideTo(6);
    		setTimeout(()=>
    		{
    				openForm();
    			},2000);
    	
    		arrayUndelines[4].classList.add('underline2');
    		prev2=4;
    		
    	}
			 


			document.querySelector('header').classList.add('animeForHeader');
			document.querySelector('footer').classList.add('animeForHeader');


		},4000);


 	// setTimeout(()=>{
  //   	animeActiveVideoList(listLines1,lineWidth1);
  //   },2800);
  //   setTimeout(()=>{
  //   	nonActiveVideoList(listLines1,lineWidth1);
  //   	counterChanger=0;
  //   },11200);
  //   addAnimationFirst();
   
    // topBotAnime();

}

	 document.addEventListener('visibilitychange', function(e) {
	document.getElementById("MyVideo").play();
    // console.log(document.hidden);
});

 	let FirstEnter = 0;

	function checkVideoLoad()
	{
		if ( document.getElementById("MyVideo").readyState === 4 ) {
		    // it's loaded
		    setTimeout(()=>
		    {
		    	NProgress.set(0.4);
		    },1000);
		    setTimeout(()=>
		    {
		    	NProgress.set(0.6);
		    },1500);
		    setTimeout(()=>
		    {
		    	NProgress.set(0.8);
		    },2000);
		    setTimeout(function()
		    {
		    	NProgress.done();
		    	document.getElementById("head").classList.remove("displayNone");

		    },3000);
		    setTimeout(()=>
		    {
		     
		    		animeActiveVideoList(listLines1,lineWidth1);

		    	setTimeout(()=>{
		    		nonActiveVideoList(listLines1,lineWidth1);
		    		counterChanger=0;
		    	},5500);
		    	document.getElementById("MyVideo").currentTime = 0;
		    	document.getElementById("MyVideo").play();
		    	// setTimeout(()=>
		    	// {},100);
		    	 
		    	 videoTimer();
		    	 
		    },3500);
		}
		else
		{
			setTimeout(()=>
			{
				checkVideoLoad();
			},1000);
			
		}

	}

	let selectorForMap ="г. Киев,ул. Александра Бойченко, 8";

	const main = document.getElementById('mainSection');
	const arrayButtons = document.querySelectorAll("#nav a");
	const arrayUndelines = document.querySelectorAll("#navL");
	const mainBlock = document.getElementById("mainBlock");	
	let prev = 0;
	let prev2 = 0;

	const man1 = document.getElementById("manL1");
	const man2 = document.getElementById("manL2");
	const man3 = document.getElementById("manL3");
	const text1 = document.getElementById("demo1");
	const text2 = document.getElementById("demo2");
	const text3 = document.getElementById("demo3");
	
	
 		
		



function underlineIt()
{	
	
	

	arrayButtons.forEach((el,index)=>
	{

		el.addEventListener("mouseenter",()=>
		{
			if(typeof arrayUndelines[index]	!== 'undefined'){
			arrayUndelines[index].classList.add("underline");
		}
		})
		el.addEventListener("mouseleave",()=>
		{
			if(typeof arrayUndelines[index]	!== 'undefined'){
			arrayUndelines[index].classList.remove("underline");
		}
		})
	})
 

	for(let b2 = 0;b2<arrayButtons.length;b2++)
	{
		
		arrayButtons[b2].addEventListener('click', function()
		{
			if(typeof arrayUndelines[prev2]	!== 'undefined'){
				arrayUndelines[prev2].classList.remove('underline2');
			}
			if(typeof arrayUndelines[b2]	!== 'undefined'){
				arrayUndelines[b2].classList.add('underline2');
				prev2 = b2;
			}
		});
		main.addEventListener('click', function()
		{
			if(typeof arrayUndelines[b2]	!== 'undefined'){
				arrayUndelines[b2].classList.remove('underline2');
			}
		});
	}

}
underlineIt();



function aboutBlockAnime()
{
	var durationDelay =0;
	if(FirstEnter==0)
	{
		durationDelay=300;
	}
	else
	{
		durationDelay=800;
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

	FirstEnter++;
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
else
{
	return;
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
		title:selectorForMap, // (Необязательно) Текст выводимый в момент наведения на маркер,
		icon: {
			url :"styles/images/marker.png",
			scaledSize: new google.maps.Size(40,50)  
		}       
	});
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
//"г. Киев,ул. Александра Бойченко, 8"
google.maps.event.addDomListener(window, "load", initMap);

 
var video = document.getElementById('MyVideo');
var arrayVideo = [" styles/video/mainFull3.mp4", " styles/video/mainFull3.mp4", "styles/video/mainFull3.mp4" ];
var arrayImages = ["url('styles/images/mobMain1.png')","url('styles/images/mobMain2.png')","url('styles/images/mobMain3.png')"]
var secondsForCurrentTime = ["0","6.5","13.1"];
var arrayImagePos = ["mob_backgr_pos1","mob_backgr_pos2","mob_backgr_pos3"];
var arrayVideoDuration = ["6310","6210","6360"];
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
	
	if(typeof l1	!== 'undefined' &&  typeof l2	!== 'undefined' ){
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

 
	// 	setTimeout(()=>
	// 	{
	// 		botLine.classList.add("animeLineForward_4");
	// 	},0);

	// 	setTimeout(()=>
	// 	{
	// 		botLine.classList.remove("animeLineForward_4");
 
	// },arrayVideoDuration[counterVideo]);




	if(arrayVideoDuration[counterVideo]==6310)
	{
		setTimeout(()=>
		{
			botLine.classList.add("animeLineForward_1");
		},0);

		setTimeout(()=>
		{
			botLine.classList.remove("animeLineForward_1");
 
	},arrayVideoDuration[counterVideo]-100);
	}
	if(arrayVideoDuration[counterVideo]==6210)
	{
		setTimeout(()=>
		{
			botLine.classList.add("animeLineForward_2");
		},0);

		setTimeout(()=>
		{
			botLine.classList.remove("animeLineForward_2");


		},arrayVideoDuration[counterVideo]-100);
	}
	if(arrayVideoDuration[counterVideo]==6360)
	{
		setTimeout(()=>
		{
			botLine.classList.add("animeLineForward_3");
		},0);

		setTimeout(()=>
		{
			botLine.classList.remove("animeLineForward_3");


		},arrayVideoDuration[counterVideo]-100);
	}
	 
}
// const photoLink = document.getElementById("photoLink");
// const videoLink = document.getElementById("videoLink");
// const twoBlocks = document.getElementById("twoBlocks");
 
// 	photoLink.addEventListener("mouseenter",(e)=>
// 	{
// 		e.stopPropagation();
// 		photoLink.classList.remove("widerBack");
// 		photoLink.classList.add("photoLink_wider");
// 	});
// 	photoLink.addEventListener("mouseleave",(e)=>
// 	{
// 		e.stopPropagation();
// 		photoLink.classList.add("widerBack");
// 		setTimeout(()=>
// 		{
// 			photoLink.classList.remove("photoLink_wider");	
// 		},600)
		
// 	});


// 	videoLink.addEventListener("mouseenter",()=>
// 	{
// 		videoLink.classList.remove("widerBack");
// 		videoLink.classList.add("videoLink_wider");
// 	});
// 	videoLink.addEventListener("mouseleave",()=>
// 	{
// 		videoLink.classList.add("widerBack");
// 		setTimeout(()=>
// 		{
// 			videoLink.classList.remove("videoLink_wider");	
// 		},600)
// 	});
 


// function effect3dHover()
// {
// 		let h1Photo = document.querySelector("#photoLink h1");
// 		let h1Video = document.querySelector("#videoLink h1");
// 		var mouseLeft = function(e){
// 			e.stopPropagation();
// 			let x1 = e.clientX/innerWidth;
// 			let y1 = e.clientY/innerHeight;

// 			let move_x;
//    			let move_y;
//    			move_y = (y1<0.5) ? '25px' : '-25px';
//    			move_x = (x1>0.3) ? '-35px' : '35px';
//    // 			if(y1<0.34) 
//    // 			{
//    // 			 move_x ='0px';
//    // 			 move_y = "-20px";
//    // 			}
//    // 			if(y1>0.69) 
//    // 			{
//    // 			 move_x ='0px';
//    // 			 move_y = "20px";
//    // 			}
//    // 			if(x1<0.16) 
//    // 			{
//    // 			 move_x ='-30px';
//    // 			 move_y = "0px";
//    // 			}
//    // 			if(x1>0.4) 
//    // 			{
//    // 			 move_x ='30px';
//    // 			 move_y = "0px";
//    // 			}
//    // 			if(x1>0.38&&y1>0.68)
//    // 			{
//    // 				move_x ='-35px';
//    // 				move_y = "-20px";
//    // 			}
//    // 			if(x1>0.19&&y1>0.38)
//    // 			{
//    // 				move_x ='35px';
//    // 				move_y = "20px";
//    // 			}


// 			// if(x1>0.38&&y1>0.4)
//    // 			{
//    // 				move_x ='-35px';
//    // 				move_y = "20px";
//    // 			}
//    // 			if(x1<0.17&&y1>0.66)
//    // 			{
//    // 				move_x ='35px';
//    // 				move_y = "25px";
//    // 			}
//    // 			if(x1<0.19&&y1<0.4)
//    // 			{
//    // 				move_x ='35px';
//    // 				move_y = "0px";
//    // 			}
//    // 			if(x1>0.4&&y1>0.6)
//    // 			{
//    // 				move_x ='-35px';
//    // 				move_y = "0px";
//    // 			}

// 			h1Photo.style.textShadow = `${move_x} ${move_y} 130px #fff	`;

// 			// console.log(x1 + "and" + y1);
		
// 		}
// 		h1Photo.addEventListener("mousemove",mouseLeft);

// 		var mouseRight = function(e){
// 			e.stopPropagation();
// 			let x2 = e.clientX/innerWidth;
// 			let y2 = e.clientY/innerHeight;

// 			let move_x2 = (x2>0.5) ? '-15px' : '15px';
//    			let move_y2 = (y2>0.5) ? '-10px' : '10px';
//    			// if(x2<0.5&&y2)
//    			if(x2<0.3) 
//    			{

//    			 move_x ='-35px';
//    			}
// 			h1Video.style.textShadow = `${move_x2} ${move_y2} 120px #fff	`;

// 				// console.log(x2 + "and" + y2);
// 		}
// 		h1Video.addEventListener("mousemove",mouseRight);
		
// 		photoLink.addEventListener("mouseleave",(e)=>
// 		{
// 			h1Photo.style.textShadow = `10px 10px 150px #fff	`;
			
// 		});
// 		videoLink.addEventListener("mouseleave",(e)=>
// 		{
		
// 			h1Video.style.textShadow = `10px 10px 150px #fff	`;
// 		});
// }
 // effect3dHover();

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
		 	
		 	video.currentTime = secondsForCurrentTime[counterVideo];
			// video.src = arrayVideo[counterVideo];
			if(video.paused)
			{
				 
			 video.play();
			 }
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
			 
				 
			},11100);
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
ChangingLang(en6,ru6,ua6);

function ChangingLang(en,ru,ua)
{
	
	$(en).on('click', function() {
		$('[data-en]').each(function() {
			$(this).text($(this).attr('data-en'));

			selectorForMap = "KYIV,st. Alexandra Boychenko, 8";
			  $('.input1').attr('placeholder', "Phone number");
			   $('.input2').attr('placeholder', "Your Name");
		}); 
		initMap();
	});

	$(ru).on('click', function() {
		$('[data-ru]').each(function() {
			$(this).text($(this).attr('data-ru'));
			selectorForMap = "г. Киев,ул. Александра Бойченко, 8";
			    $('.input1').attr('placeholder', "Ваше имя");
			    $('.input2').attr('placeholder', "Ваш мобильный номер");
	
		}); 
		initMap();
	});
	$(ua).on('click', function() {
		$('[data-ua]').each(function() {
			$(this).text($(this).attr('data-ua'));
			selectorForMap = "м. Київ, вул. Олександра Бойченка, 8";
			   $('.input1').attr('placeholder', "Ваше ім'я");
			    $('.input2').attr('placeholder', "Ваш мобільний номер");

		}); 
		initMap();
	});

 

}
	 
  
    
  
 




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


 	





		function openForm(){

			var search = $('.search'),
			input1 = $('.input1'),
			input2 = $('.input2'),
			input3 = $('.input3'),
			send_form = $('.send_form');


			setTimeout(()=>{
				search.addClass('open');


				input1.fadeIn(800);
				input2.fadeIn(800);
				input3.fadeIn(800);
				send_form.fadeIn(500);

			},300);
			
		}


		function closeForm(){


			var search = $('.search'),
			input1 = $('.input1'),
			input2 = $('.input2'),
			input3 = $('.input3'),
			send_form = $('.send_form');

			search.removeClass('open');

			input1.fadeOut(400);
			input2.fadeOut(400);
			input3.fadeOut(400);
			send_form.fadeOut(300);


		}




		function gradientForm(){
			var originalBG = $(".search").css("background");

			$('.search').mousemove(function(e) {

				x = e.pageX - this.offsetLeft;
				y = e.pageY - this.offsetTop;
				xy = x + y;
				bgWebKit = "linear-gradient(" + xy + "deg, #0184ff 11%, #f99bff 100%)";


				$(this).css({
					background: bgWebKit
				});


			}).css(function() {
				$(this).css({
					background: originalBG
				});
			});
		}
		gradientForm();