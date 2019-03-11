var imgsum=null;
var len = 1;
var numbers;
function previewImage1(file) {
	var MAXWIDTH = 100;
	var MAXHEIGHT = 200;
	if(len>5 || (file.files.length+len)>5){
		$(".addBox").hide();
	}else{
		$(".addBox").show();
	}
	if(len>6 || (file.files.length+len)>6){
		alert("最多上传5张");
		return;
	}else{
		for(var i = 0; i < file.files.length; i++) {
			if(file.files && file.files[i]) {
				var reader = new FileReader();
				reader.onload = function(evt) {
					$('#img2x').append('<li class="uploadLi" id="'+len+'" onclick="uploadAction('+len+')"><img src=' + evt.target.result +' /></li>');
					imgsum=evt.target.result;
					len++;
				};
				reader.readAsDataURL(file.files[i]);
			}
		}
		console.info(imgsum);
	}
}
function uploadAction(num){
	numbers = num;
	var HEIGHT = $(document).height();
	$(".cover").attr("style","width: 100%;height: "+HEIGHT+"px;position: absolute;top: 0;background-color: #000;opacity: 0.6; display:none;z-index: 2;");
	$(".cover").fadeIn(100);
	$(".ejectImgBox").fadeIn(100);
	if(num == 1){
		$(".ejectImgBox img").attr("src",$("#1").children("img").attr("src"));
	}else if(num == 2){
		$(".ejectImgBox img").attr("src",$("#2").children("img").attr("src"));
	}else if(num == 3){
		$(".ejectImgBox img").attr("src",$("#3").children("img").attr("src"));
	}else if(num == 4){
		$(".ejectImgBox img").attr("src",$("#4").children("img").attr("src"));
	}else if(num == 5){
		$(".ejectImgBox img").attr("src",$("#5").children("img").attr("src"));
	}
}
function delectBtn(){
	len--;
	$(".addBox").show();
	var parent=document.getElementById("img2x");
	if(numbers==1){
		var son=document.getElementById("1");
	}else if(numbers==2){
		var son=document.getElementById("2");
	}else if(numbers==3){
		var son=document.getElementById("3");
	}else if(numbers==4){
		var son=document.getElementById("4");
	}else if(numbers==5){
		var son=document.getElementById("5");
	}
	parent.removeChild(son);
	$(".cover").fadeOut(200);
	$(".ejectImgBox").fadeOut(200);
}
$(function(){
	$(".backBtn").click(function(){
		$(".cover").fadeOut(200);
		$(".ejectImgBox").fadeOut(200);
	});
});
