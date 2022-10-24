$("document").ready(function () {
    $(".go-top").hide();   

    let etc_black = [
        "images/search-black.svg",
        "images/user-black.svg",
        "images/cart-black.svg"
    ]

    let etc_white = [
        "images/search-white.svg",
        "images/user-white.svg",
        "images/cart-white.svg"
    ]

    $(".header").mouseover(function(){
        let i = $(this).index();

        $(".header").addClass("on")
        $(".header-wrap h1").find("img").attr("src", "images/black_logo.png")
        $(".m-btn .line").css("background-color", "#333")
        etc_black.map((e,index)=>{
            $(".header .etc ul li").eq(index).find("img").attr("src", etc_black[index])
        })
        
        $(".submenu").addClass("on")
    }).mouseout(function(){
        let i = $(this).index();

        $(".header").removeClass("on")
        $(".header-wrap h1").find("img").attr("src", "images/white_logo.png")
        $(".m-btn .line").css("background-color", "#fff")
        etc_white.map((e,index)=>{
            $(".header .etc ul li").eq(index).find("img").attr("src", etc_white[index])
        })
        $(".submenu").removeClass("on")
    })

    // 스크롤 이벤트
    $(window).scroll(function(e){
        e.preventDefault();
        let pos = $(window).scrollTop();
        console.log(pos, $(".collabo").offset().top)
        if(pos >= 100){
            $(".header").addClass("on")
            $(".header-wrap h1").find("img").attr("src", "images/black_logo.png")
            $(".m-btn .line").css("background-color", "#333")
        etc_black.map((e,index)=>{
            $(".header .etc ul li").eq(index).find("img").attr("src", etc_black[index])
        })
        }else{
            $("header").removeClass("on")
            $(".header-wrap h1").find("img").attr("src", "images/white_logo.png")
            $(".m-btn .line").css("background-color", "#fff")
        etc_white.map((e,index)=>{
            $(".header .etc ul li").eq(index).find("img").attr("src", etc_white[index])
        })
        $(".submenu").removeClass("on")
        }
        if(pos > $(".main").offset().top){
            $(".go-top").fadeIn();
        }else{
            $(".go-top").fadeOut();
        }
    })
    // ========== m-btn =============
    $(".m-btn").click(function(){
        $(".m-btn").toggleClass("on")
        $(".m-nav").toggleClass("on")
        $(".window").fadeToggle();
        $(".m-etc").fadeToggle();
        if($(".m-nav").hasClass("on") === true){
            $("html, body").css("overflow", "hidden")
        }else{
            $("html, body").css("overflow", "visible")
        }
    })

    // m-nav 
    $(".m1").click(function(){
        let i = $(this).index();

        $(".m2").slideUp();
        if ($(this).children(".m2").is(":visible")) {
            $(this).children(".m2").slideUp();
            $(".m1").eq(i).removeClass("on");
        }else {
            $(this).children(".m2").slideDown();
            $(".m1").removeClass("on").eq(i).addClass("on");
        }

    })

    // 모바일 햄버거 메뉴 해상도 640이상이면 없어지기
    function Resize(){
        if($(window).width() > 1024){
            $(".m-nav, .m-btn").removeClass("on")
            $(".m-etc").hide()
        }
    }
    Resize();
    $(window).resize(function(){
        Resize()
    })

    //  ========== swiper ==========
    let banner_swiper = new Swiper(".banner-swiper", {
        effect: "fade",
        autoplay: {
            delay: 6000
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        }
    });

    let best_swiper = new Swiper(".best-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesOffsetAfter: 200,
        scrollbar: {
            el: ".swiper-scrollbar",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1400:{spaceBetween: 30,slidesPerView: 4},
            1024:{spaceBetween: 20,slidesPerView: 3, slidesOffsetAfter: 100 },
            360:{spaceBetween: 20, slidesPerView: 3, slidesOffsetAfter: 100}
        }
    });

    let treg_swiper = new Swiper(".treg-swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        clickable: true,
        slidesOffsetBefore: 200,
        breakpoints: {
            1400:{spaceBetween: 30,slidesPerView: 5},
            1024:{spaceBetween: 20,slidesPerView: 3, slidesOffsetBefore: 0},
            360:{spaceBetween: 20, slidesPerView: 3, slidesOffsetBefore: 0, slidesOffsetAfter: 100},
        }
    });

    $(".go-top").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        }, 2000)
    })



    
    
})