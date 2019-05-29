$(document).ready(function() {

    $(".navigation .col-2").click(function(){
        var img = $(this).data("img");
        var msg = $(this).data("msg");
        $(".slider").children().eq(0).attr("src", `large/${img}`)
$(".slider").children().eq(1).text(msg);
if($(".active")){
    $(".active").removeClass("active");
}
$(this).children().eq(0).addClass("active");
 
 
 
    })
$("#right_i").click(function(){
    var next =$(".active").parent().next();
    if(next.length!=0){
        var img = next.data("img");
        var msg = next.data("msg");
        $(".slider").children().eq(0).attr("src", `large/${img}`)
        $(".slider").children().eq(1).text(msg);
        if($(".active")){
            $(".active").removeClass("active");
        }
        next.children().eq(0).addClass("active");
        
    }
    else{
        var img = $(".navigation").children().eq(0).data("img");
        var msg = $(".navigation").children().eq(1).data("msg");
        $(".slider").children().eq(0).attr("src", `large/${img}`)
        $(".slider").children().eq(1).text(msg);
        if($(".active")){
            $(".active").removeClass("active");
        }
        $ (".navigation").children().eq(0).children().eq(0).addClass("active");
    }
})

$("#left_i").click(function(){
    var next =$(".active").parent().next();
    if(next.length!=0){
        var img = next.data("img");
        var msg = next.data("msg");
        $(".slider").children().eq(0).attr("src", `large/${img}`)
        $(".slider").children().eq(1).text(msg);
        if($(".active")){
            $(".active").removeClass("active");
        }
        next.children().eq(0).addClass("active");
       
    }else{ 
        var img = $(".navigation").children().eq(0).data("img");
        var msg = $(".navigation").children().eq(1).data("msg");
        $(".slider").children().eq(0).attr("src", `large/${img}`)
        $(".slider").children().eq(1).text(msg);
        if($(".active")){
            $(".active").removeClass("active");
        }
        $ (".navigation").children().eq(0).children().eq(0).addClass("active");
    }
       
   
})


})



