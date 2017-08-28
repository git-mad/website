$(document).ready(function(){
	$("#icon").click(function(){
		if($("#icon").text() == "expand_more"){
			$("#icon").text("expand_less");	
		}
		else{
			$("#icon").text("expand_more");	
		}
		
	});
	
	$("#guides").click(function(){
		window.location.href="guides.html"
	});
});