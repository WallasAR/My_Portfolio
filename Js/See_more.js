function SeeMore()
{
    var init = document.getElementById("init");
    var more = document.getElementById("more");
    var more_button = document.getElementById("more_button");

    if(init.style.display == "none"){
        init.style.display = "inline";
        more.style.display = "none";
        more_button.innerHTML = "Mais"
    }
    else
    {
        init.style.display = "none";
        more.style.display = "inline";
        more_button.innerHTML = "Menos"
    }
}