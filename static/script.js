let index = 0;
function phoebeSlideshow() {
    let image = document.getElementById("phoebe")
    images = ["media/phoebe1.jpg", "media/phoebe2.jpg", "media/phoebe3.jpeg", "media/phoebe4.jpg", "media/phoebe5.jpg", "media/phoebe6.jpg", "media/phoebe7.jpg", "media/phoebe8.jpg"]

    index++;
    if (index >= images.length) {
        index = 0;
    }
    image.src = images[index];
}

setInterval(phoebeSlideshow, 3000);
