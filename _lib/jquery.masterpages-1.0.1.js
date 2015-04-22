/*!
 * jQuery Master Pages v1.0.1
 */

$(document).ready(function(){
	loadMasterPages($("script[MasterPageFile]").attr('MasterPageFile'));
});

function loadMasterPages(location){

	$.get(location, function(page){
		
		pagePlaceholders = $(document).find("Content");			

		var masterPage = document.open("text/html", "replace");
		masterPage.write(page);
		masterPage.close();

		$(masterPage).find("ContentPlaceHolder").each(function(){
			var masterPlace = this;
			pagePlaceholders.each(function(){
				if(masterPlace.id == $(this).attr("ContentPlaceHolderID")){
					$(masterPlace).replaceWith(this);
				}
			});
		});
	})
}
