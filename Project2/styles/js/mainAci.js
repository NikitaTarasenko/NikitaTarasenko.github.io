 window.onload = function()
 {
 	const header = document.getElementById('head');

 	var lang = document.getElementById("lang");
 	var lang_list = document.getElementById("langList");
 	var trngl = document.getElementById("triangle");
 	var flag = false;
 	let yourLang = document.querySelectorAll("#langList li");
 	let cur = document.getElementById("currentLang");
 	let height = $(window).height();

 	 
	 
 	lang.addEventListener("click",function(e)
 	{
 		if(flag==false)
 		{
 		lang_list.classList.add("animeFadeIn");
 		trngl.classList.remove("triangleOff");
 		trngl.classList.add("triangleOn");
 		flag= true;
 		}
 		else
 		{
 			lang_list.classList.remove("animeFadeIn");
	 		trngl.classList.add("triangleOff");
	 		trngl.classList.remove("triangleOn");
	 		flag=false;
 		}
 	},true);

 	yourLang.forEach((el,index)=>
 	{
	 
 		el.addEventListener("click", function()
 		{
 			if(index==0)
 			{
 			 cur.innerHTML = `<p>EN</p>`;
 			}
 			if(index==1)
 			{
 			 cur.innerHTML = `<p>RU</p>`;
 			}
 			if(index==2)
 			{
 			 cur.innerHTML = `<p>Pl</p>`;
 			}

 		},true);
 	})

	
	 
	var t1 = $("#t1");
	$(window).scroll(function(){

		if ( ($(this).scrollTop()+height) >= $(".pt1").offset().top)
		 {
		 	$(".pt1").addClass("animeFadeIn");
		 	
		}

		if ( ($(this).scrollTop()+height) >= $("#t1").offset().top)
		 {
		 	t1.addClass("animeFadeIn");
		}

		setTimeout(()=>
		{
				if ( ($(this).scrollTop()+height) >= $("#t2").offset().top)
			 {
			 	$("#t2").addClass("animeFadeIn");
			}
		},600);
		
		setTimeout(()=>
		{
			if ( ($(this).scrollTop()+height) >= $("#t3").offset().top)
		 	{
		 		$("#t3").addClass("animeFadeIn");
			}
		},900);
		if ( ($(this).scrollTop()+height) >= $("#t4").offset().top)
		 {
		 	$("#t4").addClass("animeFadeIn");
		}
		if ( ($(this).scrollTop()+height) >= $("#t5").offset().top)
		 {
		 	$("#t5").addClass("animeFadeIn");

		 	setTimeout(function()
		 	{
		 		setTimeout(()=>
		 		{
		 			$("#mt1").addClass("animeFadeIn");
		 		},100);
		 		setTimeout(()=>
		 		{
		 			$("#mt2").addClass("animeFadeIn");
		 		},300);
		 		setTimeout(()=>
		 		{
		 			$("#mt3").addClass("animeFadeIn");
		 		},600);
		 		setTimeout(()=>
		 		{
		 			$("#mt4").addClass("animeFadeIn");
		 		},900);
		 		setTimeout(()=>
		 		{
		 			$("#mt5").addClass("animeFadeIn");
		 		},1200);
		 		setTimeout(()=>
		 		{
		 			$("#mt6").addClass("animeFadeIn");
		 		},1500);
		 		setTimeout(()=>
		 		{
		 			$("#mt7").addClass("animeFadeIn");
		 		},1800);
		 	},500);	
		}
		// if ( ($(this).scrollTop()+height) >= $("#b3").offset().top)
		//  {
		//  	$("#b3").addClass("animeFadeIn");
		// }
		if ( ($(this).scrollTop()+height) >= $("#t6").offset().top)
		 {
		 	$("#t6").addClass("animeFadeIn");
		}
		if ( ($(this).scrollTop()+height) >= $("#t6_2").offset().top)
		 {
		 	$("#t6_2").addClass("animeFadeIn2");
		}
		if ( ($(this).scrollTop()+height) >= $("#t7").offset().top)
		 {
		 	$("#t7").addClass("animeFadeIn2");
		}
		if ( ($(this).scrollTop()+height) >= $("#t7_2").offset().top)
		 {
		 	$("#t7_2").addClass("animeFadeIn2");
		 	$("#t8").addClass("animeFadeIn2");
		}
		 
		 	
		 
});






	

	function Scrolling()
	{
		 
		$(window).scroll(function(){

			let scrolled = window.pageYOffset;
			let link1 = document.getElementById("l1");
			let link2 = document.getElementById("l2");
			let link3 = document.getElementById("l3");
			if(scrolled >=300&&scrolled<1600)
			{
				$(link1).css("color"," #f7a81b");
			}
			
			if ( (($(this).scrollTop()+height) >= $("#b1").offset().top)&&scrolled >=300&&scrolled<1500)
			{
				$(link1).css("color"," #f7a81b");
			}
			else
			{
				$(link1).css("color"," #000");
			}
			if ( (($(this).scrollTop()+height) >= $("#b2").offset().top)&&scrolled >=1500&&scrolled<2200)
			{
				$(link2).css("color"," #f7a81b");
			}
			else
			{
				$(link2).css("color"," #000");
			}
			if ( (($(this).scrollTop()+height) >= $("#b3").offset().top)&&scrolled >=2200)
			{
				$(link3).css("color"," #f7a81b");
			}
			else
			{
				$(link3).css("color"," #000");
			}
		 
		});	
		
	}
	
	Scrolling();
 
	function jQScroll()
	{
		var position = $(window).scrollTop();
		

		$(window).scroll(function() {
			  var scroll = $(window).scrollTop();
			  if (scroll > position) {

			  	header.classList.remove('stick_header');
			  	header.classList.add('rel_header');
			    // console.log("scrolling downwards");

			  } 
			  else

			   {

			  	header.classList.remove('rel_header');
			  	header.classList.add('stick_header');
			    // console.log("scrolling upwards");
			  }
			  position = scroll;
			});
	}
	jQScroll();
 

	$(document).ready(function(){

		$("#navmenu").on("click","a", function (event) {

			event.preventDefault();
			var id  = $(this).attr('href'),



         

        	top = $(id).offset().top;



       

        $('html,body').animate({scrollTop: top-50}, 1000);

    });

	});



	var flag2 = false;
	let bur = document.getElementById("navmenumob");

	$('.burger-btn').on('click', function(e)
	{
		e.preventDefault;

		$(this).toggleClass('burger-btn-acitve');
		
 		if(flag2==false)
 		{
		
		bur.classList.remove("hidden_mob1");
		bur.classList.add("visb_mob");
		flag2=true;
	}
	else
	{
		bur.classList.add("hidden_mob1");
		bur.classList.remove("visb_mob");
		flag2=false;
	}
		
	});


 }





	// $(document).ready(function(){

	// 	$("#hid").on("click", function (event) {



	// 		$('body,html').animate({scrollTop: "0"}, 1000);

	// 	});

	// });

 
	 