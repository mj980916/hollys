$(function(){

    $(".main>li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown("fast");
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
})//.main>li, sub_bg hover


    $(".move").slick({
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        fade: true
    })

    $(".close").click(function(){
        $(".popup").hide();
    })

})//jQ fin.