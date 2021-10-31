$(document).ready(function(){
   $(".main").append("<div id='overlay'></div>");
   $("#menu").click(function(){
      $("#guide").slideToggle();
      $("#overlay").toggleClass("show");
   })
   
   //search
	/*$(".text").keypress(function(){        
		$(this).next(".btn").show();
		$(".btn").click(function(){
			$(this).siblings(".text").val("");
		})
	});*/
	$(".text").focus(function(){        
		var txt_value =  $(this).val();  
		if(txt_value==this.defaultValue){  
        	$(this).val("").css("color","#313131");              
		} 
	});
})

function fjcHeight(){
	$(".proportion").each(function(i,n){
	        var FjcHeight=$(this).attr("F");
			var nowWidth=$(this).width();
			var thisHeight=nowWidth*parseFloat(FjcHeight);
	        $(this).css("height",thisHeight+"px");
	});     
}
function fontSizeHack(){
        var viewportW=$(".main").width();
		var fz=(viewportW/320)*0.625;
		$(".index-banner").css("font-size",(fz*100)+"%");
}




$(window).resize(function(){
	fjcHeight();
	fontSizeHack();
})