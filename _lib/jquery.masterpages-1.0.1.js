/*!
 * jQuery Master Pages v1.0.1
 * 
 * Copyright 2015
 * Authors: Victor Silva, Alyson Freitas, and Edgard Leal
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Project: https://github.com/victorlss/jquery-master-pages
 */
$(document).ready(function(){
    loadMasterPages($("script[MasterPageFile]").attr('MasterPageFile'));
});

function loadMasterPages(url){
	$.get(url, function(page){
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
