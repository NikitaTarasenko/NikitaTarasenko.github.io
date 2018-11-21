 
$(document).ready(function()
{
	NProgress.start();
})
$(window).load(function()
{
	setTimeout(()=>
	{
		NProgress.set(0.4);
	},1000);
	setTimeout(()=>
	{
		NProgress.set(0.6);
	},2000);
	setTimeout(()=>
	{
		NProgress.set(0.8);
	},3000);
	setTimeout(function()
	{
		NProgress.done();

		startAnimeCategories();

	},4000);

})
function openWind(src)
{
	location.href = `Oko-Prodaction.html${src}`;

}



const en3 = document.querySelector("#en3");
const ua3 = document.querySelector("#ua3");
const ru3 = document.querySelector("#ru3");
 
ChangingLang(en3,ru3,ua3);
 

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


}
underlineIt();


function startAnimeCategories()
{
	let categ_item1 = document.getElementById("categ_item1");
	let categ_text1 = document.getElementById("categ_text1");
	let categ_item2 = document.getElementById("categ_item2");
	let categ_text2 = document.getElementById("categ_text2");
	let categ_item3 = document.getElementById("categ_item3");
	let categ_text3 = document.getElementById("categ_text3");
	let categ_item4 = document.getElementById("categ_item4");
	let categ_text4 = document.getElementById("categ_text4");
	let categ_item5 = document.getElementById("categ_item5");
	let categ_text5 = document.getElementById("categ_text5");

	let swiper_categ = document.getElementById("swiper-categ");
	// setTimeout(()=>
	// {
	// 	categ_text1.classList.add("categories__content__item_text_visib");
	// 	categ_item1.classList.remove("categories__content__item_disapired");
	// 	categ_item1.classList.add("categ_item1");
		
	// },1400);
	setTimePhotoAnime(categ_text1,categ_item1,"categ_item1",1400);
	setTimePhotoAnime(categ_text2,categ_item2,"categ_item2",1600);
	setTimePhotoAnime(categ_text3,categ_item3,"categ_item3",1900);
	setTimePhotoAnime(categ_text4,categ_item4,"categ_item4",1600);
	setTimePhotoAnime(categ_text5,categ_item5,"categ_item5",1400);

	setTimeout(()=>
	{
		swiper_categ.classList.remove("hiddenBlock");
	},2500);


	categ_item2.addEventListener("click",()=>
{
	console.log("2");
})

}

function setTimePhotoAnime(text,item,curclass,delay)
{
	setTimeout(()=>
	{
		item.classList.add("categories__content__item_disapired");
	},500);
	setTimeout(()=>
	{	

		text.classList.add("categories__content__item_text_visib");
		item.classList.remove("categories__content__item_disapired");
		item.classList.add(curclass);
		
	},delay);
}