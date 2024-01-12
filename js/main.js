$('.Menu_center_List .Menu_List').hover(function(){
    $(this).find('.Menu_sub_list').css({"visibility":"visible","opacity":"1","transition":"opacity .5s cubic-bezier(0.06, 0.81, 0, 0.98) 0s,visibility 0s"});
},function(){
    $(this).find('.Menu_sub_list').css({"visibility":"hidden","opacity":"0","transition":"opacity .5s cubic-bezier(0.06, 0.81, 0, 0.98) 0s,visibility 0s"});
});

$(".kda_popstar").click(function(){
    window.open("https://youtu.be/UOxkGD8qRB4?si=gLO_Ss0rqQayrB4z");
});

$(".position_btn").click(function(){
    $(this).addClass("active");
});

$('.position_btn').click(function(){

    var tab_id = $(this).attr('data-tab');

    $('.champion_explanation > div').removeClass('show');

    $(this).addClass('show');
    
    $("#"+tab_id).addClass('show');
});

$champion_list = $('.enjoy_champions_child_div');
$champion_list.hide().first().show().addClass('show_on');

function championLoop() {

    $('.show_on').each(function(){
      
    var $this = $(this);
    var $next = $this.next().length > 0 ? $this.next() : $champion_list.first();
    $this.removeClass('show_on').hide();
    $next.addClass('show_on').show();

    });
}
var champion_interval = setInterval(function(){championLoop()},2000);


$("#trigger").click(function(){
    if($('#trigger').is(':checked')) {
        $(".overlay").addClass("menu_overlay");
        $('.sildebar').show().animate({
            right: '0'
        }, 400 );
        $('.menu_overlay').show().animate({
            opacity: '1'
        }, 400 );
    }else{
        $(".overlay").removeClass("menu_overlay");
        $('.sildebar').show().animate({
            right: '-400'
        }, 400 );
        $('.menu_overlay').show().animate({
            opacity: '0'
        }, 400 );
    }
});

$("#game_news").click(function(){
    $('.mobile_menu_news').slideToggle();
    $("#game_news span i").toggleClass("fa-angle-down fa-angle-up");
});
$("#lol_event").click(function(){
    $('.mobile_menu_event').slideToggle();
    $("#lol_event span i").toggleClass("fa-angle-down fa-angle-up");
});

$(".login_go").click(function(){
    // $("#modal").css({"display":"flex"});
    $("#modal").css('display', 'flex').hide().fadeIn();
});
$(".close-area").click(function(){
    $("#modal").fadeOut();
});
// $(".modal-overlay").click(function(){
//     $("#modal").fadeOut();
// });

$(".login_click div").click(function(){
    if($('#email_id').val() == ""){
        $('#email_id').focus();

        alert('계정을 입력해주세요.');
    }else if($('#password').val()==""){
        $('#password').focus();

        alert('비밀번호를 입력해주세요.');
    }else{
        $('#login_form').attr("target", "_self").submit();
    }
});