YaMapsShown = false; 
$(document).ready(function (){

 $(window).scroll(function() {
    if (!YaMapsShown){
     if($(window).scrollTop() + $(window).height() > $(document).height() - 700) {      
      showYaMaps();
      YaMapsShown = true;
     }
    }
 });
});

function showYaMaps(){
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A176968f5333a4f6d06b2e4b1f28b6807835a6afe49f8c878f4497f950f1a99b7&amp;width=100%25&amp;height=589&amp;lang=ru_RU&amp;scroll=false";
 document.getElementById("map_container").appendChild(script);
}