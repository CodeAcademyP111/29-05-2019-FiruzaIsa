$(document).ready(function() {

    $(".navigation .col-2").click(function(){
        slideImg($(this))
        activeImg($(this).children().eq(0))
 
    })
$("#right_i").click(function(){
    var next =$(".active").parent().next();
    if(next.length!=0){
        slideImg($(next));
        activeImg( next.children().eq(0))
      
    }
    else{
        slideImg($(".navigation").children().eq(0))
        activeImg( $ (".navigation").children().eq(0).children().eq(0))
       
     
    }
})

$("#left_i").click(function(){
    var prev =$(".active").parent().prev();
    if(prev.length!=0){
        slideImg(prev)
        activeImg(prev.children().eq(0))     
    }else{ 
        slideImg($(".navigation").children().last())
        activeImg( $ (".navigation").children().last().children().last())
        
    }
})

function slideImg(elm){
        var img = elm.data("img");
        var msg =elm.data("msg");
        $(".slider").children().eq(0).attr("src", `large/${img}`)
        $(".slider").children().eq(1).text(msg);
}

function activeImg(elm){
    if($(".active")){
        $(".active").removeClass("active");
    }
  elm.addClass("active");
}
})

