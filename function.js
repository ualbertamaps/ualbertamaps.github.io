function changeImage(toURL) {

    var images = document.getElementsByTagName("img");
    images[0].src = toURL;
    images[0].style.width = "100%";
    images[0].style.height = "100vh";
    var north = document.getElementsByClassName("north");
    var south = document.getElementsByClassName("south");
    north[0].style.visibility = "hidden";
    south[0].style.visibility = "hidden";
}