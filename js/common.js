/**
 * Created by Lysea on 2016/11/11.
 */
$(document).ready(function() {
    $(".banner-tab ").click(function () {
        $(".banner-tab ").removeClass("tab-bg")
        $(".banner-tab ").children(".icon").css("background","url(style/images/circle_02.png) no-repeat ");
        $(this).addClass("tab-bg");
        $(this).children(".icon").css("background","url(style/images/circle_01.png) no-repeat ");
    });
});
$(document).ready(function() {
    $(".question h2").click(function () {
        $(".expansion").slideUp("fast");
        $("h2").children("button").removeClass("down");
        $("h2").children("button").addClass("fold");
        if ($(this).siblings(".expansion").is(':hidden')){
            $(".expansion").slideDown("fast");
            $(this).addClass("open");
            $(this).children("button").removeClass("fold");
            $(this).children("button").addClass("down");
        }
        else{
            $(this).siblings(".expansion").slideUp("fast");
            $("h2").removeClass("open");
            $(this).children("button").removeClass("down");
            $(this).children("button").addClass("fold");
        }
    });
    $(".up").click(function () {
        $(".expansion").slideUp("fast");
        $(".question h2").removeClass("open");
        $(".question h2").children("button").removeClass("down");
        $(".question h2").children("button").addClass("fold");
    })
});

function openNew(){
    var sHeight= document.documentElement.scrollHeight;
    var sWidth=document.documentElement.scrollWidth;
    //可视区高度
    var wHeight=document.documentElement.clientHeight;
    var  oMask=document.createElement("div");
    oMask.id="mask";
    oMask.style.height=sHeight+"px";
    oMask.style.width=sWidth+"px";
    document.body.appendChild(oMask);

    var oAsk=document.createElement("div");
    oAsk.id="ask";
    document.body.appendChild(oAsk);
    oAsk.innerHTML="<div class='askCon'><div id='close'>sluit</div>" +
        "<h1>Helaas was dit niet het antwoord op uw vraag.</h1>" +
        "<p>Hier houdt onze service natuurlijk niet op. Uiteraard kunnen we u een passend antwoord geven. Daarvoor hoeft u alleen even uw gegevens achter te laten en we bellen u direct terug.</p>" +
        "<form class='new-question clearfix'>" +
        " <p><label for='name'>Bedrijfsnaam</label><input type='text' name='' class='name' id='name'></p>   "+
        "<p><label class='choose'>Aanhef</label><input type='radio' name='hef' class='' value='Dhr.'>Dhr."+
        "<input type='radio' name='hef' class='' value='Mevr.' checked='checked'>Mevr.</p>"+
        "<p><label for='nickname'>Naam</label><input type='text'name=''class='nickname' id='nickname'></p>"+
        "<p><label for='phone-number'>Telefoonnummer</label><input type='text'name='' class='tel-number'id='phone-number'></p>"+
        "  <a class='form-btn'>verzenden<span></span></a>"+
        "</form></div>";
    var dHeight=oAsk.offsetHeight;
    var dWidth= oAsk.offsetWidth;
    oAsk.style.left=(sWidth-dWidth)/2+"px";
    oAsk.style.top=(wHeight- dHeight)/2+"px";
    var oClose=document.getElementById("close");
    oMask.onclick=oClose.onclick=function () {
        document.body.removeChild(oMask);
        document.body.removeChild(oAsk);
    };
};
window.onload=function(){
    var oBtn=document.getElementsByClassName("pop");
    oBtn[0].onclick=function(){
        openNew();
        return false;
    }

}