function changeImage() {

    if (document.getElementByClassName("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png") 
    {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    }
}