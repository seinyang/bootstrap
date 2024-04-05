$(function(){
    const loading = $(".loading");
    $(window).on("load",function(){
        loading.remove();
    })
    
    // 로딩 이후에 세로 스크롤 다시 생기도록 설정
    $(window).on("pageshow",function(){
        $("html,body").css({"overflow":"visible"})
       $("html,body").scrollTop(5000000);
    })

})