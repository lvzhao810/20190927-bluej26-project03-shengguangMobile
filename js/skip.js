//var iconcaidanlan = document.querySelector(".icon-caidanlan");
//var menus = document.querySelector(".menus");
//iconcaidanlan.addEventListener("click",function(){
//	menus.style.transform = "translateY(0)";
//});
//var menus_close = document.querySelector(".menus_close");
//menus_close.addEventListener("click",function(){
//	menus.style.transform = "translateY(100%)";
//});

var iconcaidanlan = document.querySelector(".icon-caidanlan");
var navigation = document.querySelector(".navigation");
iconcaidanlan.addEventListener("click",function(){
	navigation.style.transform = "translateX(-35%)";
});
var navigation_close = document.querySelector(".navigation_close");
navigation_close.addEventListener("click",function(){
	navigation.style.transform = "translateX(-100%)";
});




var iconsousuo = document.querySelector(".icon-sousuo");
var search = document.querySelector(".search");
iconsousuo.addEventListener("click",function(){
	search.style.transform = "translateY(0)";
});
var search_close = document.querySelector(".search_close");
search_close.addEventListener("click",function(){
	search.style.transform = "translateY(100%)";
});

