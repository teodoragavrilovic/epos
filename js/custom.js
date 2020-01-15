function hideMenu(){
    if($(window).width() <= 768)
        $("nav > ul").addClass("hide");
    else {
        $("nav > ul").removeClass("hide");
    }
}

$(document).ready( () => {
    hideMenu();
    $(window).on("resize", hideMenu);

    if($(window).width() <= 768)
        $("nav > h2").click( () => { 
            $("nav > ul").slideToggle("slow")
        });
    
    if(document.getElementById("datumVreme"))
        document.getElementById("datumVreme").innerHTML = Date()
        
})