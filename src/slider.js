let thisImage = 1;
show(thisImage);

function nextImage(control) {
    show(thisImage += control);
}

function imageSelected(control) {
    show(thisImage = control);
}

function show(control) {
    let i;
    
    let imageList = document.getElementsByClassName("slider-image");
    let pointList = document.getElementsByClassName("slider-point");

    if (control > imageList.length) { thisImage = 1 }
    if (control < 1) { thisImage = imageList.length }
    
    for (i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    for (i = 0; i < pointList.length; i++) {
        pointList[i].className = pointList[i].className.replace(" active", "");
    }
    
    imageList[thisImage - 1].style.display = "block";
    pointList[thisImage - 1].className += " active";
}
