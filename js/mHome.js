var $nav=$(".nav");
var curMenu=$("#managerPerson");
var curLink=$(curMenu).find("ul li:nth-child(2) a")[0];
$nav.click(function(){
	var menuId=$(this).attr("id");
	$(".menuList").css("z-index","-10000");
	$(menuId).css("z-index","1000");
    curMenu=$(menuId);
	changeLink($(curMenu).find("li:nth-child(2) a")[0]);
	
});
function changeLink(target)
{
	if(target==curLink) return;
	$(curLink).css("background","#fff");
	curLink=target;
	$(curLink).css("background","rgb(102,183,224)");
}
$(".menuList li a").click(function(){
	  changeLink(this);
	});
$(".menuList li a").hover(function(){
	if(this==curLink) return;
    $(this).css("background","rgb(242,242,242)");
},function(){
	if(this==curLink) return;
    $(this).css("background","#fff");
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
