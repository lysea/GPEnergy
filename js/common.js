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
function hide() {
    var up=document.getElementsByClassName("up");
    var more=document.getElementsByClassName("expansion");
    if(up.style.display==block){
        more.style.display=none;
    }
}
$(document).ready(function() {
    $("h2.open").click(function () {
        $(this).children(".expansion").slideToggle("fast");
    });
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
        "<form class='new-question'>" +
        " <p><label for='name'>Bedrijfsnaam</label><input type='text' name='' class='name' id='name'></p>   "+
        "<p><label class='choose'>Aanhef</label><input type='radio' name='hef' class='' value='Dhr.'>Dhr."+
        "<input type='radio' name='hef' class='' value='Mevr.' checked='checked'>Mevr.</p>"+
        "<p><label for='nickname'>Naam</label><input type='text'name=''class='nickname' id='nickname'></p>"+
        "<p><label for='tel-number'>Telefoonnummer</label><input type='text'name='' class='tel-number'id='tel-number'></p>"+
        "<span>verzenden<input type='submit' name='send' class='send' value=''></span>"+
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
    var oBtn=document.getElementById("pop");
    oBtn.onclick=function(){
        openNew();
        return false;
    }

}