
$(document).ready(function(){
	$(".right>div").css("display","none");
	$(".right>div").first().css("display","block");
	$("#myblog").click(function(){
		$(".myblog").css("display","block").siblings().css("display","none");
	});
	$("#mythink").click(function(){
		$(".mythink").css("display","block").siblings().css("display","none");
	});
	$("#myshare").click(function(){
		$(".myshare").css("display","block").siblings().css("display","none");
	})
	$("#myinformation").click(function(){
		$(".myinformation").css("display","block").siblings().css("display","none");
	})
	$("#writething").click(function(){
		$(".writething").css("display","block").siblings().css("display","none");
	})
	$("#shezhi").click(function(){
		$(".shezhi").css("display","block").siblings().css("display","none");
	})
})

$(document).ready(function(){
	$(".zl_caozuo>div").css("display","none");
	$(".zl_caozuo>div").first().css("display","block");
	$("#xg_zl").click(function(){
		$(".xg_zl").css("display","block").siblings().css("display","none");
	})
	$("#xg_tx").click(function(){
		$(".xg_tx").css("display","block").siblings().css("display","none");
	})
	$("#xg_mm").click(function(){
		$(".xg_mm").css("display","block").siblings().css("display","none");
	})
})