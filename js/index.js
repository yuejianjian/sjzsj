$(function() {
    /*轮播图*/
    $(".lun-center ul li").mouseenter(function () {
        var i = $(this).index();
        $(".lun-center ul li").eq(i).fadeIn("fast").siblings().fadeOut();
    });
    var timer=null;
    var iNow=0;
    timer=setInterval(function(){
        iNow++;
        if(iNow> 2){
            iNow=0;
        }
        $(".lun-center ul li").eq(iNow).trigger("mouseenter");
    },2000);
    /*2222*/
    $("#list li").mouseenter(function() {
       var i = $(this).index(); //当前索引值
       console.log(111);
       $("#list li").eq(i).addClass("list-active");
       $("#idyuan li span").eq(i).addClass("bjcolor");
    })

    $("#list li").mouseleave(function() {
        var i = $(this).index(); //当前索引值
        $("#list li").eq(i).removeClass("list-active");
        $(".yuan li span").eq(i).removeClass("bjcolor");
    })
    /*$("#list li").mouseenter(function() {
        //当前索引值
        var i = $(this).index();
        $("#idyuan li").eq(i).addClass("bjcolor");
        alert(111);

    })*/
});
