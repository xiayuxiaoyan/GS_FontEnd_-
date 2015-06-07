var $nav=$(".nav");
$nav.click(function(){
	var menuId=$(this).attr("href");
	$(".menuList").css("z-index","-10000");
	$(menuId).css("z-index","1000");

	return false;
});


var today=new Date();       //时间
var year=today.getFullYear();
var month=today.getMonth();
var date=today.getDate();
var day=today.getDay();
var dayArray = new Array();
dayArray[0]="日";
dayArray[1]="一";
dayArray[2]="二";
dayArray[3]="三";
dayArray[4]="四";
dayArray[5]="五";
dayArray[6]="六";

var now = year+"年"+month+"月"+date+"日"+"   星期"+dayArray[day];
$(".date").text(now);
