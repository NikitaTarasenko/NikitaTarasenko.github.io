window.onload = function()
{
	var logo = document.getElementById('china-logo');
	var arrayOfLogos = [ "'../Project1/styles/images/slide_02.jpg'","'../Project1/styles/images/slide_03.jpg'","'../Project1/styles/images/logoChina.png'"];
	var n =0;
	logo.style.backgroundImage = "url(" + arrayOfLogos[2] +")";
	// logo.style.backgroundSize = "auto ";
	function slider(){

		setTimeout(function()
		{

			logo.style.backgroundImage = "url(" + arrayOfLogos[n] +")";
			// logo.style.backgroundSize = "auto ";
			// console.log(n);
			n++;

			if(n<3)
			{

				slider();
			}
			else
			{
				n=0;
				slider();
			}
			
		},4000);
		
	}
	slider();


	$(document).ready(function(){

		$("#navmenu").on("click","a", function (event) {

			event.preventDefault();
			var id  = $(this).attr('href'),



        //узнаем высоту от начала страницы до блока на который ссылается якорь

        top = $(id).offset().top;



        //анимируем переход на расстояние - top за 1500 мс

        $('html,body').animate({scrollTop: top}, 1000);

    });

	});
	$(document).ready(function(){

		$("#hid").on("click", function (event) {



			$('body,html').animate({scrollTop: "0"}, 1000);

		});

	});

}
// ----------------burger-button animation


	$('.burger-btn').on('click', function(e)
	{
		e.preventDefault;

		$(this).toggleClass('burger-btn-acitve');
		$('.menu').toggleClass('menu-mob');
		
	});




function initMap() {
	
	var centerLatLng = new google.maps.LatLng(50.456821, 30.495766);
	
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 15,
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
		{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
		{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
		{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
		{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
		{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
		{"featureType":"water","elementType":"all","stylers":[{"color":"#a00013"},{"visibility":"on"}]}]           
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
		position: centerLatLng,               // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
		map: map,                             // Карта на которую нужно добавить маркер
		title: "г. Киев,пер. Бехтеревский, 17", // (Необязательно) Текст выводимый в момент наведения на маркер,
		icon: "..//Project1/styles/images/marker.png"             // (Необязательно) Путь до изображения, которое будет выводится на карте вместо стандартного маркера
	});
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);

function scrollingTop()
{
	var scrolled = document.documentElement.scrollTop;
	var hidden = document.getElementById("hid");
		// console.log(scrolled);
		if(scrolled>300)
		{
			hidden.style.visibility ="visible";
			
		}
		else
		{
			hidden.style.visibility ="hidden";
		}
		// hidden.addEventListener("click",function()
		// {

		// 	document.body.scrollTop = 0; // For Safari
  //   		document.documentElement.scrollTop = 0;
		// },true);

	}

	window.onscroll  = function(){scrollingTop()};


