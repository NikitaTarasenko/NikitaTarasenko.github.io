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