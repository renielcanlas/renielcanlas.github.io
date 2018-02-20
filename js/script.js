$(function(){
    //Startup Defaults
    $(".button-collapse").sideNav();
    $("#headblur").css("margin-top", $("#nav").css("height"));
    $("#start").css("margin-top", $("#headblur").css("height"));

    if($(window).scrollTop()==0){
        $("#nav").removeClass("type2");
    }else{
        $("#nav").addClass("type2");
    }

    $(window).resize(function(){
        $("#headblur").css("margin-top", $("#nav").css("height"));
        $("#start").css("margin-top", $("#headblur").css("height"));
    });

    $(window).scroll(function(){
        if($(window).scrollTop()==0){
            $("#nav").removeClass("type2");
        }else{
            $("#nav").addClass("type2");
        }
    });
});

