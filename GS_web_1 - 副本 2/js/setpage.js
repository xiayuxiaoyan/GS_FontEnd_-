 var totalpage,pagesize,cpage,count,curcount,outstr; 
//初始化 
cpage = 1; 
totalpage = 56; 
pagesize = 12; 
outstr = ""; 
function gotopage(target) 
{     
    cpage = target;        //把页面计数定位到第几页 
    setpage(); 
    reloadpage(target);    //调用显示页面函数显示第几页,这个功能是用在页面内容用ajax载入的情况 
} 
function setpage() 
{ 
    if(totalpage<=pagesize){        //总页数小于十页 
        for (count=1;count<=totalpage;count++) 
        {    if(count!=cpage)  
            { 
                outstr = outstr + "<a href='javascript:gotopage("+count+")' class='pageNumber' >"+"["+count+"]</a>";   //不是当前页则创一个连接 
            }else{ 
                outstr = outstr + "<span class='current' >"+"["+count+"]</span>";   //是当前页则为该数字
            } 
        } 
    } 
    if(totalpage>pagesize){        //总页数大于十页 
        if(parseInt((cpage-1)/pagesize) == 0)   
        {                                 //第1、11、21……页
            for (count=1;count<=pagesize;count++) 
            {    if(count!=cpage) 
                {                                        //不是当前页则创一个连接
                    outstr = outstr + "<a href='javascript:void(0)'class='pageNumber' onclick='gotopage("+count+")'>"+"["+count+"]</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+"["+count+"]</span>"; 
                }                                       //是当前页则为该数字
            } 
            outstr = outstr + "<a href='javascript:void(0)'class='pageNumber' onclick='gotopage("+count+")'> 下翻 </a>"; 
        } 
        else if(parseInt((cpage-1)/pagesize) == parseInt(totalpage/pagesize)) // 最后第一轮
        {                                     
            outstr = outstr + "<a href='javascript:void(0)'class='pageNumber' onclick='gotopage("+(parseInt((cpage-1)/pagesize)*pagesize)+")'>上翻</a>"; 
            for (count=parseInt(totalpage/pagesize)*pagesize+1;count<=totalpage;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)'class='pageNumber' onclick='gotopage("+count+")'>["+count+"]</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+"["+count+"]</span>"; 
                } 
            } 
        } 
        else 
        {     
            outstr = outstr + "<a href='javascript:void(0)' class='pageNumber'onclick='gotopage("+(parseInt((cpage-1)/pagesize)*pagesize)+")'>上翻</a>"; 
            for (count=parseInt((cpage-1)/pagesize)*pagesize+1;count<=parseInt((cpage-1)/pagesize)*pagesize+pagesize;count++) 
            {         
                if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)'class='pageNumber' onclick='gotopage("+count+")'>["+count+"]</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+"["+count+"]</span>"; 
                } 
            } 
            outstr = outstr + "<a href='javascript:void(0)'class='pageNumber' onclick='gotopage("+count+")'>下翻</a>"; 
        } 
    }     
    document.getElementById("page").innerHTML = "<div id='page'><span id='info'>共"+totalpage+"页|第"+cpage+"页  <\/span>" + outstr + "<\/div>"; 
    outstr = ""; 
} 


var newsArray;
var newsList;
var xmlhttp;
function loadXMLDoc(url,cfunc)
{
   if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
      }
   else
       {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
   xmlhttp.onreadystatechange=cfunc;
   xmlhttp.open("GET",url,true);
   xmlhttp.send(null);
}
function reloadpage(target)
   {
     loadXMLDoc("news_List?"+encodeURIComponent("cpage=")+encodeURIComponent(target),function()
        {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
             {
                var jsonStr=xmlhttp.responseText;
                newsArray=JSON.parse(jsonStr);
                for(var i=0;i<newsArray.length;i++){
                  newsList+="<p class='item'><a href='' class='nlTitle newsDetail'>"+newsArray[i].newsName+"</a<a href='' class='date'>"+newsArray[i].publishDate+"</a></p>"
                 }
                $(".container").append(newsList);
             }
        });
 }  
