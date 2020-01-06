 
			window.onload = ()=>
			{
				checkVideoLoad();
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


			const testDis5 = document.querySelector(".video-block5");
			setTimeout(()=>
			{
				testDis5.classList.remove("displayNone");
			},10000);



			const arrowTop = document.querySelector("#arrowUp");
			// arrowTop.classList.add("displayNone");

			function checkVideoLoad()
			{
				if ( video1.readyState === 4 &&  video2.readyState === 4 &&  video3.readyState === 4 &&  video4.readyState === 4 &&  video5.readyState === 4) {
		  
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
		    	document.getElementById("vb11").classList.remove("displayNone");
		    	document.getElementById("vb11").classList.add("displayNoneAnime");
		    	 
		    },3000);
		    
		}
		else
		{
			setTimeout(()=>
			{
				checkVideoLoad();
			},1000);
			
		}

	}
		 	 	
			function hoverAbsForMoreInfo(currentInfo,gradient)
			{
				var absoluteVideoArray = [blockForHover,blockForHover2,blockForHover3,blockForHover4,blockForHover5];

				absoluteVideoArray.forEach((element,index)=>
				{
					element.addEventListener("mouseenter",()=>
					{
						document.getElementById(`${currentInfo}`).classList.add("opacityNone");
					})
					element.addEventListener("mouseleave",()=>
					{
						document.getElementById(`${currentInfo}`).classList.remove("opacityNone");
					})
					
				});
				document.getElementById(`${currentInfo}`).addEventListener("click",()=>
				{
					document.getElementById(`${gradient}`).classList.add("gradient_hidden");
					document.getElementById(`${gradient}`).addEventListener('mouseleave',()=>
					{
							document.getElementById(`${gradient}`).classList.remove("gradient_hidden");
					})
				});
			}

			 hoverAbsForMoreInfo("moreInfo1","gradient1");
			  hoverAbsForMoreInfo("moreInfo2","gradient2");
			   hoverAbsForMoreInfo("moreInfo3","gradient3");
			    hoverAbsForMoreInfo("moreInfo4","gradient4");
			     hoverAbsForMoreInfo("moreInfo5","gradient5");


			$('#wc').scroll(function(){

				if ( ($(this).scrollTop()+$('#wc').height()) > ($('#wc').height())*2)
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
       		

			function openWind(src)
			{
				location.href = `Oko-Prodaction.html${src}`;
			 
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

	// for(let b2 = 0;b2<arrayButtons.length;b2++)
	// {
		
	// 		arrayButtons[b2].addEventListener('click', function()
	// 	{
	// 		arrayUndelines[prev2].classList.remove('underline2');
	// 		arrayUndelines[b2].classList.add('underline2');
	// 		prev2 = b2;
	// 	});
	// 	main.addEventListener('click', function()
	// 	{
	// 		arrayUndelines[b2].classList.remove('underline2');
	// 	});
	// }

}
underlineIt();



 			function FirstPartHoverOn(top,bot,mid,vAbs,video)
			{
					top.classList.add('makeItDisapir');
					bot.classList.add('makeItDisapir');
					mid.classList.add('worksAnime1');
					vAbs.classList.add('worksAnime1');
					setTimeout(()=>
					{
						var playPromise = video.play();

						if (playPromise !== undefined) {
							playPromise.then(_ => {
								 video.play();
							})
							.catch(error => {

								console.log("error")
							});
						}

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
				var pausePromise = video.pause();

						if (pausePromise !== undefined) {
							pausePromise.then(_ => {
								 video.pause();
							})
							.catch(error => {
								
								console.log("error")
							});
						}
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
	        closerModal.classList.add('displayNone');
	        const videoModal_1 = document.querySelector("#video_modal1");


	        const vvPlayer = document.querySelector(".iFrame");
	        var iframe = document.querySelector('iframe');
	        var player = new Vimeo.Player(iframe);

			// vvPlayer.addEventListener("mouseenter",()=>
			// {
			// 	console.log("on");
			// })
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
			



function modalWindows(blockHover,curSrc)
{
	    let vv = document.getElementById("vv");
		videoModal_1.classList.add('makeitDisapir');

	 		if(!detectmob()||!detectmob2())
	 		{
	 			vv.addEventListener("mouseenter",()=>
	 			{
	 				closerModal.classList.remove("displayNone");
	 			},true);

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
			
		
const vb1 = document.getElementById("vb11");
const vb2 = document.getElementById("vb2");
const vb3 = document.getElementById("vb3");
const vb4 = document.getElementById("vb4");
const vb5 = document.getElementById("vb5");

// vb1.classList.add("displayNone");
// vb1.classList.add("displayNoneAnime")
vb2.classList.add("displayNone");
vb3.classList.add("displayNone");
vb4.classList.add("displayNone");
vb5.classList.add("displayNone");





				$('#wc').scroll(function(){
				
				if(($(this).scrollTop()+$('#wc').height()  > $('#wc').height())&&(($(this).scrollTop()+$('#wc').height()) < (($('#wc').height())*2)-10) )
				{
					vb1.classList.remove("displayNone");
					vb1.classList.add("displayNoneAnime")
					vb2.classList.add("displayNone")
				 
				}
					if(($(this).scrollTop()+$('#wc').height() > (($('#wc').height())*2)+100)&&(($(this).scrollTop()+$('#wc').height()) <= (($('#wc').height())*3)-10))
				{

					vb1.classList.add("displayNone");
					vb2.classList.remove("displayNone");
					vb2.classList.add("displayNoneAnime")
					vb3.classList.add("displayNone");
					 
				}
					if(($(this).scrollTop()+$('#wc').height() >= (($('#wc').height())*3)+100)&&(($(this).scrollTop()+$('#wc').height()) <= (($('#wc').height())*4)-10))
				{
					vb2.classList.add("displayNone");
					vb3.classList.remove("displayNone");
					vb3.classList.add("displayNoneAnime")
					vb4.classList.add("displayNone");
					// console.log("bin3")
				}
					if(($(this).scrollTop()+$('#wc').height() >= (($('#wc').height())*4)+100)&&(($(this).scrollTop()+$('#wc').height()) <= (($('#wc').height())*5)+100))
				{
					vb3.classList.add("displayNone");	
					vb4.classList.remove("displayNone");
					vb4.classList.add("displayNoneAnime")
					vb5.classList.add("displayNone");
					// console.log("bin4")
				}
					if(($(this).scrollTop()+$('#wc').height() >= (($('#wc').height())*5)+300)&&(($(this).scrollTop()+$('#wc').height()) <= (($('#wc').height())*6)-10))
				{
					vb4.classList.add("displayNone");
					vb5.classList.remove("displayNone");
					vb5.classList.add("displayNoneAnime")
					// console.log("bin5")
				}
				// if ( ($(this).scrollTop()+$('#wc').height()) > $("#b1").offset().top)
				// {	

				// 	console.log("1")
				// }

				// if ( ($(this).scrollTop()+$('#wc').height()) > $("#b2").offset().top)
				// {	

				// 	console.log("2")
				// }

				// if ( ($(this).scrollTop()+$('#wc').height()) > $("#b3").offset().top)
				// {	

				// 	console.log("3")
				// }
				 
			});
			// console.log($("#b1").offset().top)
			// console.log($("#b2").offset().top)
			// console.log($("#b3").offset().top)
			// console.log(($('#wc').height())*2)







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


		var originalBG = $(".gradient").css("background");

      	$('.gradient').mousemove(function(e) {

      		x = e.pageX - this.offsetLeft;
      		y = e.pageY - this.offsetTop;
      		xy = x + y;
      		bgWebKit = "linear-gradient(" + xy + "deg, #0184ff 11%, #f99bff 100%)";

      		$(this).css({
      			'background': bgWebKit
      		})
      	}).mouseleave(function() {
      		$(this).css({
      			background: originalBG
      		});
      	});
      	