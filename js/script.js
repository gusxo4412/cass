$(document).ready(function(){
    // slide
    $(".slide .slide_all > li").eq(0).siblings().hide()
    var slideI = 0;
    setInterval(function(){
        if(slideI < 2){
            slideI++;
        }else{
            slideI = 0;
        }

        $(".slide .slide_all > li").eq(slideI).siblings().fadeOut(700);
        $(".slide .slide_all > li").eq(slideI).fadeIn(700);
    },5000);

    // menu
    $("header .menu").click(function(){
        $("header .menu").removeClass("on");
        $(this).next("div").addClass("on");
        $(".modal").fadeIn();
    });

    $("header .off").click(function(){
        $("hader .off").removeClass("on,off");
        $(this).prev("div").addClass("on");
        $(".modal").fadeOut();
    });
});