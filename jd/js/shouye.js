$(document).ready(function(){
	
	$("#menu").mouseenter(function(){
		var sss=$(this).offset();
		$(".snav1").css({"top":sss.top+22,"left":sss.left}).show();
	})
	$("#menu").mouseleave(function(){
		$(".snav1").hide();
	})
})
