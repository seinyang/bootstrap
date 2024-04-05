$(function(){
	// 스크롤시 네비 변경하기
	let desktopGnb1 = $("nav.desktopGnb1");
	let desktopGnb2 = $("nav.desktopGnb2");

	desktopGnb2.hide();

	$(window).scroll(function(){
		let scrollTop = $(window).scrollTop();
		// alert(scrollTop);
		if(scrollTop >= 40){
			desktopGnb2.show();
			desktopGnb1.hide();
		}
		if(scrollTop < 40){
			desktopGnb1.show();
			desktopGnb2.hide();
		}
	})

	// 햄버거 버튼 클릭시 모바일 메뉴가 보이도록 설정
	let hambergerBtn = $(".hambergerBtn");
	let close = $(".close");
	let mobileGnb = $(".mobileGnb li");
	let mobileMenu = $(".mobileGnb .mobileMenu");
	let more = $(".mobileGnb .mobileMenu #more_menu");

	hambergerBtn.click(function(){
		mobileMenu.show();
		more.hide();
		$("body").addClass("hidden");
	})

	close.click(function(){
		more.show();
		mobileMenu.hide();
		$("body").removeClass("hidden");
	})

	mobileMenu.click(function(){
		mobileMenu.hide();
		$("body").removeClass("hidden");
	})

	//캐로셀 동작구문
	let carousel_btn = $(".carousel_btn li").not(".carousel_btn li:last-child");
	let carousel_gallery = $(".gallery li");
	let current = 0;

	carousel_gallery.css("left","100%");
	carousel_gallery.eq(current).css("left",0);

	carousel_btn.click(function(){
		if($(".carousel_btn li:last-child").hasClass("play")){
			carousel_play_btn.hide();
			carousel_pause_btn.show();
		}
		carousel_btn.removeClass("active");
		$(this).addClass("active");
		let current = $(this).index();
		clearInterval(clock);
		carousel_gallery.css("left","100%");
		carousel_gallery.eq(current).animate({"left":0},200);
		move_btn(current);
	})
	function move_btn(current){
		clock = window.setInterval(function(){
			prev = carousel_gallery.eq(current);
			prev.css("left",0).animate({"left":"-100%"},200);
			carousel_btn.removeClass("active");
			carousel_btn.eq(current+1).addClass("active");
			current = current+1;

			if(current==8) current=0;

			let next = carousel_gallery.eq(current);
			next.css("left","100%").animate({"left":0},200);
			carousel_btn.eq(current).addClass("active");
		},1000);

	}

	move();
	// 1초마다 자동으로 동작하는 캐로셀
	function move(){
		clock = window.setInterval(function(){
			let prev = carousel_gallery.eq(current);
			prev.css("left",0).animate({"left":"-100%"},200);
			carousel_btn.removeClass("active");
			carousel_btn.eq(current+1).addClass("active");
			current = current+1;

			if(current==8) current=0;

			let next = carousel_gallery.eq(current);
			next.css("left","100%").animate({"left":0},200);
			carousel_btn.eq(current).addClass("active");
		},1000);
	}

	// 캐로셀 일시정지, 재생버튼 동작구문
	let carousel_pause_btn = $(".carousel_btn li.pause");
	let carousel_play_btn = $(".carousel_btn li.play");

	carousel_pause_btn.click(function(){
		$(this).hide();
		carousel_play_btn.show();
		clearInterval(clock);
		carousel_gallery.eq(current).css("left",0);
		carousel_btn.eq(current).addClass("active");
	})

	carousel_play_btn.click(function(){
		$(this).hide();
		carousel_pause_btn.show();
		move();
		window.reload();
	})
	

	// fixed nav를 클릭시 메뉴 활성화
	let fixedMenu = $("nav.desktopGnb2 li");

	fixedMenu.click(function(){
		fixedMenu.removeClass("active");
		$(this).addClass("active");
	})

	// 스크롤시 fixed nav의 메뉴 활성화
	let section = $("#wrapper>section");
	let section1PoY = section.eq(0).offset().top; //브랜드
	let section2PoY = section.eq(1).offset().top; //메뉴
	let section3PoY = section.eq(2).offset().top; //스토리
	let section4PoY = section.eq(3).offset().top; //철학
	let section5PoY = section.eq(4).offset().top; //성분
	let section6PoY = section.eq(5).offset().top; //더보기
	// alert(section2PoY);

	$(window).scroll(function(){
		let myScrollT = $(window).scrollTop();
		let myScrollTop = myScrollT+150; 
		// alert(myScrollTop);

		if(myScrollTop>=section1PoY && myScrollTop<section2PoY){
			fixedMenu.removeClass("active");
			fixedMenu.eq(2).addClass("active");
		}else if(myScrollTop>=section2PoY && myScrollTop<section3PoY){
			fixedMenu.removeClass("active");
			fixedMenu.eq(3).addClass("active");
		}else if(myScrollTop>=section3PoY && myScrollTop<section4PoY){
			fixedMenu.removeClass("active");
			fixedMenu.eq(4).addClass("active");
		}else if(myScrollTop>=section4PoY && myScrollTop<section5PoY){
			fixedMenu.removeClass("active");
			fixedMenu.eq(5).addClass("active");
		}else if(myScrollTop>=section5PoY && myScrollTop<section6PoY){
			fixedMenu.removeClass("active");
			fixedMenu.eq(6).addClass("active");
		}else{
			fixedMenu.removeClass("active");
			fixedMenu.eq(7).addClass("active");
		}
	})

	// footer영역의 토글 구현
	let companyInfoBtn = $("#footer .md_copyright .companyInfo");
	let companyInfo = $("#footer .md_copyright div");
	let toggleBtn = companyInfoBtn.find("span");

	companyInfo.hide();
	companyInfoBtn.click(function(){
		toggleBtn.toggleClass("down");
		companyInfo.toggle();
	})


})