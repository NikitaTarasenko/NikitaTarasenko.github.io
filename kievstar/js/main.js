
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: '09VfqTmQicA',
					// events:{
					// 	onReady: ()=>{
					// 		player.cueVideoById('lPVjpD-ngKI');
					// 	}
					// }

				});
}


function onPlayerReady(event) {
	event.target.playVideo();
}


function stopVideo() {
	player.stopVideo();
}


const showYt = document.querySelector('#showList');
const youT = document.querySelector('.main__body__video iframe');
const main__head = document.querySelector('.main__head');
const listCategories = document.querySelectorAll('.main__head__item');
const listInfo = document.querySelector('.main__body__info');
const listInfo__items = document.querySelectorAll('.main__body__info li')

const listInfoBlock = document.querySelector('.main__body__info ul');
let prevCateg = 0;
let prevIndex = 0;
let link ='https://www.youtube.com/watch?v=09VfqTmQicA' ;


const burger = document.querySelectorAll('.menu_btn');
const menu = document.querySelector('.fixedDropMenu');
const body = document.querySelector('body');

navCateg();


burger.forEach((item)=>
{
	item.addEventListener('click',(e)=>{
		menu.classList.add('fixedDropMenu__show');
		e.stopPropagation();
		document.querySelector('.fixedDropMenu__show').addEventListener('click',(e)=>{
			e.stopPropagation();
		})
		body.addEventListener('click',()=>{
			menu.classList.remove('fixedDropMenu__show');
		})
	})
})


function navCateg(){
	listCategories.forEach((item,index)=>{
		item.addEventListener('click',()=>{

			listCategories[prevCateg].classList.remove('main__head__item_selected');
			item.classList.add('main__head__item_selected');
			prevCateg = index;

			reDirectTo();

		});
	});

}

function reDirectTo(){

	if(document.querySelector('#physics').classList.contains('main__head__item_selected')){

		link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3gXBiazf0LUXu7UaQQZ8spV";
		player.loadVideoById('lPVjpD-ngKI');
		changeInfo('0');
		mainBlockAnime();
	}
	else if(document.querySelector('#chemistry').classList.contains('main__head__item_selected')){

		link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3iZFlaPZSP6Ggt0Ss3GHsh6";
		player.loadVideoById('09VfqTmQicA');
		changeInfo('1');
		mainBlockAnime();
	}
	else if(document.querySelector('#math').classList.contains('main__head__item_selected')){

		link = " https://www.youtube.com/playlist?list=PLBoNQWTfdR3iEmM8cIcueNcDa-pya63S6";
		player.loadVideoById('4o2nMBGmmGs');
		changeInfo('2');
		mainBlockAnime();
	}
	else if(document.querySelector('#inform').classList.contains('main__head__item_selected')){

		link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3hct_ewWli29THGIuV8kBed";
		player.loadVideoById('1kwpgBCWjCs');
		changeInfo('3');
		mainBlockAnime();
	}
	else if(document.querySelector('#bilogy').classList.contains('main__head__item_selected')){

		link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3jjFi7u8uFxktp8L6eUKpfZ";
		player.loadVideoById('hk_zBxCY2ak');
		changeInfo('4');
		mainBlockAnime();
	}
}

function linkIt(){

	window.open(link); 
}

function changeInfo(index){


	listInfo.classList.remove(`case${prevIndex}`);
	listInfo.classList.add(`case${index}`);

	if(index == 0)
	{
		prevIndex = 0;
		listInfoBlock.innerHTML= `<li>Властивості газів</li>
		<li> Парові двигуни</li>
		<li>Двигуни зовнішнього та внутрішнього згоряння</li>
		<li>Електричний струм та магнітне поле</li>
		`;
		mainBlockAnime();
	}
	else if(index == 1)
	{
		prevIndex = 1;
		listInfoBlock.innerHTML= `<li>Метали та їх властивості</li>
		<li>Окисно-відновні реакції</li>
		<li>Гідриди. Водневі сполуки s- і p-елементів, їх типи</li>
		<li>Ковалентний зв’язок</li>
		<li>Іонний зв’язок</li>
		`
	}
	else if(index == 2)
	{
		prevIndex = 2;
		listInfoBlock.innerHTML= `<li>Математичні моделі</li>
		<li>Шифри</li>
		<li>Математика швидкостей</li>
		<li>Хаос та фрактали</li>
		<li>Логарифми</li>
		<li>«Прості» складні задачі</li>
		`
	}
	else if(index == 3)
	{
		prevIndex = 3;
		listInfoBlock.innerHTML= `<li>Старт програмування</li>
		<li>WEB – розробки</li>
		<li>Інтернет речей</li>
		<li>Хаос та фрактали</li>
		<li>Кібербезпека</li>
		<li>Від проекту до стартапу</li>
		`
	}
	else if(index == 4)
	{
		prevIndex = 4;
		listInfoBlock.innerHTML= `<li>Клітина та її складові</li>
		<li>Клітинний цикл</li>
		<li>ДНК, гени та геноми</li>
		<li>Тканини</li>
		<li>Статеве розмноження</li>
		<li>Анатомія рослин</li>
		`
	}

	

}

function mainBlockAnime(){
	let listInfo__items = document.querySelectorAll('.main__body__info li');
	var listInfoDelay = 100;

	listInfo__items.forEach((item)=>{
		setTimeout(()=>{
			item.classList.add('main__body__info__li_active');

		},listInfoDelay);
		listInfoDelay+=200;
	})
}
// animations

const shadowBg = document.querySelector('.first');
const first__h1= document.querySelector('.first__h1');
const circles = document.querySelectorAll('.first__content__item__img');
const secondH1 = document.querySelector('.afterVideo__h1');
const circles__text = document.querySelectorAll('.first__content__item__text');
const blueBlock = document.querySelector('.bluePart');

const blueBlock__img = document.querySelector('.bluePart__img img');
const teachers__block = document.querySelector('.teachers__block');
const mobTeachers = document.querySelector('.mobTeachers');
const teachers = document.querySelectorAll('.teachers__block__item');
const contacts__left = document.querySelector('.contacts__left');
const contacts__right = document.querySelector('.contacts__right');

if(window.innerWidth > 480){
	setTimeout(()=>{
		shadowBg.classList.add("first__loaded");

	},500);
}

setTimeout(()=>{
	first__h1.classList.remove('opacityNone');
},900);

setTimeout(()=>{
	first__h1.classList.add('opacityNone');
	secondH1.classList.add('afterVideo__h1__show');

},4000);

var setTimeout1= 2500;
var setTimeout2 = 3600;
if(window.innerWidth < 480)
{
	setTimeout1= 1500;
    setTimeout2 = 2600;
}

setTimeout(()=>{
	circles[0].classList.add('first__content__item__img__show');
	setTimeout(()=>{
		circles[1].classList.add('first__content__item__img__show');
		setTimeout(()=>{
			circles[2].classList.add('first__content__item__img__show');
		},300);
	},300);
},setTimeout1);

setTimeout(()=>{
	circles__text[0].classList.add('first__content__item__text__show');
	setTimeout(()=>{
		circles__text[1].classList.add('first__content__item__text__show');
		setTimeout(()=>{
			circles__text[2].classList.add('first__content__item__text__show');
		},400);
	},400);
},setTimeout2);


var scroll2 = false;

$(window).scroll(function() {
	
	var bT = $(blueBlock).offset().top,
	bH = $(blueBlock).outerHeight(),
	teachersT = $('.teachers__title').offset().top -200,
	teachersH = $('.teachers__title').outerHeight();
	contactsT = $('.contacts').offset().top - 100,
	contactsH = $('.contacts').outerHeight(),
	mainT = $('.main__body ').offset().top + 200,
	mainH = $('.main__body').outerHeight(),
	wH = $(window).height(),
	wS = $(this).scrollTop();

	if(window.innerWidth < 480){
		bH = $(blueBlock).outerHeight() -300;
		contactsH = $('.contacts').outerHeight() -100;
	}

	if (wS > (bT+bH-wH)){
		scroll1();
	}
	if(wS > (teachersT+teachersH-wH)){
		scroll2();

	}
	if(wS > (contactsT+contactsH-wH)){
		scroll3();
	}
	if (wS > (bT+bH-wH)){
		mainBlockAnime();
	}
	scrollHeader();
});



var header = document.querySelector('.fixedHeader');
var sticky = header.offsetTop;

function scrollHeader() {
	if (window.pageYOffset > sticky + 340) {
		header.classList.add("fixedHeader__show");
	} else {
		header.classList.remove("fixedHeader__show");
	}
}

var scroll3 =  (function contactsAnime(){

	var delay =0;
	var executed = false;
	return ()=>{
		if(!executed){
			executed = true;
			contacts__left.classList.add('contacts__left__show');
			contacts__right.classList.add('contacts__right__show');
		}
	}
})();

var scroll2 = (function teachersAnime(){
	var delay =0;
	var executed = false;
	return ()=>{
		if(!executed){
			executed = true;
			teachers.forEach((item,index)=>{
				setTimeout(()=>{
					item.classList.add('teachers__block__item__show');
				},delay);
				delay+= 200;
			})
		}
	}
})();


var scroll1 = (function blueTextAnime(){

	var executed = false;
	return ()=>{
		if(!executed){
			executed = true;
			var text = document.querySelector('#text');
			var newDom = '';
			var animationDelay = 4;
			setTimeout(()=>{
				blueBlock__img.classList.add('bluePart__img__show');
			},300);

			text.classList.remove('opacityNone');

			for(let i = 0; i < text.innerText.length; i++)
			{

				newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';

			}

			text.innerHTML = newDom;
			var length = text.children.length;

			for(let i = 0; i < length; i++)
			{
				text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
			}
		}
	}
})();


if(window.innerHeight > 960){
	scroll1();
}


$('a[href^="#"]').click(function(e){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top -100}, 600);
e.preventDefault();
return false;
});


if(window.innerWidth < 1000){
	initSwipper();

}
if(window.innerWidth < 500)
{
	teachers__block.classList.add('displayNone');
	mobTeachers.classList.remove('displayNone');
	initTeachersSwiper();
}
function initSwipper()
{
	main__head.classList.add('swiper-container');
	listCategories.forEach((item)=>{
		item.classList.add('swiper-slide');
	})

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 0,

		speed: 800,
		breakpoints: {
			700:
			{
				slidesPerView: 3
			},
			450:
			{
				slidesPerView: 2
			}
		},
		autoplay: {
			delay: 600,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});


}

function initTeachersSwiper()
{
	console.log('dsds')
}
	// var swiper = new Swiper('.s2', {
	// 	slidesPerView: 1,
	// 	spaceBetween: 0,
	// 	loop: true,
	// 	centeredSlides: true
		 
 //      pagination: {
 //        el: '.swiper-pagination2',
 //      },
 //  });

 

// function goLink(){
// 	listCategories.forEach((item,index)=>
// 	{
// 		if(item.classList.contains('main__head__item_selected')) {

// 			link = '';
// 			switch(index){
// 				case 0:

// 				link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3gXBiazf0LUXu7UaQQZ8spV";
// 				break;

// 				case 1:

// 				link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3iZFlaPZSP6Ggt0Ss3GHsh6";
// 				break;

// 				case 2:

// 				link = " https://www.youtube.com/playlist?list=PLBoNQWTfdR3iEmM8cIcueNcDa-pya63S6";
// 				break;


// 				case 3:

// 				link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3hct_ewWli29THGIuV8kBed";
// 				break;

// 				case  4:

// 				link = "https://www.youtube.com/playlist?list=PLBoNQWTfdR3jjFi7u8uFxktp8L6eUKpfZ";
// 				break;

// 			}
// 		}
// 	});
// 	console.log(link);
// }




