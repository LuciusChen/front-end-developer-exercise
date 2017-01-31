//登录和注册动画都分为三个阶段
function login_animation (){
    if($(".login").css("z-index")==1000){
        return;
    }
    $(".login").css({
        "transform":"rotate(15deg) scale(0.6)",
        "z-index":"1000",
        "left":"240px",
        "top":"250px",
        "box-shadow":"2px 2px 10px #333"
    });
    $(".signup").css({
        "transform":"rotate(-75deg) scale(0.6)",
        "z-index":"0",
        "left":"220px",
        "top":"40px",
        "box-shadow":"none"
    });
    setTimeout(function(){
        $(".login").css({
            "transform":"rotate(-5deg) scale(1)",
            "left":"220px",
            "top":"140px",
            "transform-origin":"left top"
        });
        $(".signup").css({
            "transition":"all 400ms cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            "transition-timing-function":"cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            "transform":"rotate(-90deg) scale(0.6)",
            "left":"298px",
            "top":"140px"
        });
    },400);
     setTimeout(function(){
        $(".login").css({
            /* easeInOutBack */
            "transition":"all 500ms cubic-bezier(0.000, 1.650, 0.705, 0.800)",
            "transition-timing-function":"cubic-bezier(0.000, 1.650, 0.705, 0.800)",
            "transform":"rotate(0deg)"
        });
    },900);
    setTimeout(function(){
        $(".login").css({
            "transform-origin":"140px 170px",
            "transition":"all 500ms cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            "transition-timing-function":"cubic-bezier(0.860, 0.000, 0.070, 1.000)"
        });
    },1000);
}
function signup_animation(){
    if($(".signup").css("z-index")==1000){
        return;
    }
    $(".signup").css({
        "transform":"rotate(-75deg) scale(0.6)",
        "z-index":"1000",
        "left":"220px",
        "top":"40px",
        "box-shadow":"2px 2px 10px #333"
    });
    $(".login").css({
        "transform":"rotate(15deg) scale(0.6)",
        "z-index":"0",
        "left":"240px",
        "top":"250px",
        "box-shadow":"none"
    });
    setTimeout(function(){
        $(".signup").css({
            "transform":"rotate(5deg) scale(1)",
            "left":"220px",
            "top":"140px",
            "transform-origin":"left top",
        });
        $(".login").css({
            "transition":"all 500ms cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            "transition-timing-function":"cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            "transform":"rotate(-90deg) scale(0.6)",
            "left":"310px",
            "top":"120px"
        });
    },400);
     setTimeout(function(){
        $(".signup").css({
            /* easeInOutBack */
            "transition":"all 500ms cubic-bezier(0.000, 1.650, 0.705, 0.800)",
            "transition-timing-function":"cubic-bezier(0.000, 1.650, 0.705, 0.800)",
            "transform":"rotate(0deg)"
        });
    },900);
    setTimeout(function(){
        $(".signup").css({
            "transform-origin":"140px 150px",
            "transition":"all 500ms cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            "transition-timing-function":"cubic-bezier(0.860, 0.000, 0.070, 1.000)"
        });
    },1000);
}
