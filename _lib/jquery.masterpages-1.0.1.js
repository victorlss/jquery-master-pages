/*!
 * jQuery Master Pages v1.0.1
 * 
 * Copyright 2015
 * Authors: Victor Silva, Alyson Freitas, Edgard Leal
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Project: https://github.com/victorlss/jquery-master-pages
 */
(function($){
  function loadMasterPages(url, callback){
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
      if(callback && typeof callback === "function"){
        callback.call();
      }
  	});
  }
  $.fn.master = function(url, callback){
    loadMasterPages(url, callback);
    return this;
  };
}(jQuery));
