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

    //animatescroll plugin동작구문
    $(".navbar li:nth-child(1) a").click(function(){
        $('#top').animatescroll({scrollSpeed:200,easing:'easeInQuad'});
    })
    $(".navbar li:nth-child(2) a").click(function(){
        $('#birth').animatescroll({scrollSpeed:200,easing:'easeInQuad'});
    })
    $(".navbar li:nth-child(3) a").click(function(){
        $('#secret').animatescroll({scrollSpeed:200,easing:'easeInQuad'});
    })
    $(".navbar li:nth-child(4) a").click(function(){
        $('#products').animatescroll({scrollSpeed:200,easing:'easeInQuad'});
    })
    $(".navbar li:nth-child(5) a").click(function(){
        $('#cf').animatescroll({scrollSpeed:200,easing:'easeInQuad'});
    })
    $(".navbar li:nth-child(6) a").click(function(){
        $('#garden').animatescroll({scrollSpeed:200,easing:'easeInQuad'});
    })
    $(".navbar li:nth-child(7) a").click(function(){
        $('#contact').animatescroll({scrollSpeed:200,easing:'easeInQuad'});
    })
    
    // waypoint 플러그인 동작구문
    $(".wp1").waypoint(function(direction){
        if(direction==='down'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            //alert("wp1:down")
            $(".wp1").addClass("animate__animated animate__fadeInUp")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "90%"
    })
    $(".wp1").waypoint(function(direction){
        if(direction==='up'){
            //스크롤을 위로 올렸을 때 동작할 구문
            $(".wp1").removeClass("animate__animated animate__fadeInUp")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "90%"
    })
    

    $(".wp2").waypoint(function(direction){
        if(direction==='down'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp2").addClass("animate__animated animate__fadeInDown")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "90%"
    })
    $(".wp2").waypoint(function(direction){
        if(direction==='up'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp2").removeClass("animate__animated animate__fadeInDown")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "80%"
    })


    $(".wp3").waypoint(function(direction){
        if(direction==='down'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp3").addClass("animate__animated animate__fadeInLeftBig")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "70%"
    })
    $(".wp3").waypoint(function(direction){
        if(direction==='up'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp3").removeClass("animate__animated animate__fadeInLeftBig")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "70%"
    })

    $(".wp4").waypoint(function(direction){
        if(direction==='down'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp4").addClass("animate__animated animate__fadeInRightBig")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "60%"
    })
    $(".wp4").waypoint(function(direction){
        if(direction==='up'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp4").removeClass("animate__animated animate__fadeInRightBig")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "60%"
    })

    $(".wp5").waypoint(function(direction){
        if(direction==='down'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp5").addClass("animate__animated animate__fadeIn")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "70%"
    })
    $(".wp5").waypoint(function(direction){
        if(direction==='up'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp5").removeClass("animate__animated animate__fadeIn")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "70%"
    })

    $(".wp6").waypoint(function(direction){
        if(direction==='down'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp6").addClass("animate__animated animate__fadeIn")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "50%"
    })
    $(".wp6").waypoint(function(direction){
        if(direction==='up'){
            //스크롤을 아래로 내렸을 때 동작할 구문
            $(".wp6").removeClass("animate__animated animate__fadeIn")
        }
    },{
        //보이는 화면에서 해당 컨텐츠가 몇 퍼센트에 있을 때 동작할지
        offset : "50%"
    })
     /*똑같은 효과를 주고 싶어서 .wp1을 네번째 컨텐츠인 section#products의 img에 부여하면 스크롤시 이미 애니메이션이 되어 있으므로 새로 클래스명을 부여해야 함!!*/

     $('.wp7').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp1:down");
            $('.wp7').addClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'80%'
    })
    $('.wp7').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp1:up");
            $('.wp7').removeClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'50%'
    })

    $('.wp8').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp2:down");
            $('.wp8').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp8').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp2:up");
            $('.wp8').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })

    $('.wp9').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp2:down");
            $('.wp9').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp9').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp2:up");
            $('.wp9').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })


    $('.wp10').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp10').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp10').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp10').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })


     $('.wp11').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp1:down");
            $('.wp11').addClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'80%'
    })
    $('.wp11').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp1:up");
            $('.wp11').removeClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'80%'
    })

    $('.wp12').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp2:down");
            $('.wp12').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp12').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp2:up");
            $('.wp12').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })

    // wp5,6처럼
    $('.wp13').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp13').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp13').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp13').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })

    $('.wp14').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp14').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'50%'
    })
    $('.wp14').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp14').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'50%'
    })


    // 스마트폰에서도 잘 동작하는지 확인!!=>끝!!

    $('.wp15').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp15').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'80%'
    })
    $('.wp15').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp15').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'80%'
    })
    $('.wp16').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp16').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp16').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp16').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp17').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp17').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'60%'
    })
    $('.wp17').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp17').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'60%'
    })
    $('.wp18').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp18').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'50%'
    })
    $('.wp18').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp18').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'50%'
    })
})