function openmenu(){
    document.getElementById("openmenu").style.display = "none";
    document.getElementById("closemenu").style.display = "block";
    document.getElementById("menu").style.left = "0";
    document.getElementById("menu").style.opacity = "1";
}

function closemenu(){
    document.getElementById("openmenu").style.display = "block";
    document.getElementById("closemenu").style.display = "none";
    document.getElementById("menu").style.left = "";
    document.getElementById("menu").style.opacity = "0";
}