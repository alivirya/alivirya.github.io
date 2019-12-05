let photoIndex = 0;
function phoebeSlideshow() {
    let image = document.getElementById("phoebe")
    images = ["media/phoebe1.jpg", "media/phoebe2.jpg", "media/phoebe3.jpeg", "media/phoebe4.jpg", "media/phoebe5.jpg", "media/phoebe6.jpg", "media/phoebe7.jpg"]

    photoIndex++;
    if (photoIndex >= images.length) {
        photoIndex = 0;
    }
    image.src = images[photoIndex];
}

setInterval(phoebeSlideshow, 4000);