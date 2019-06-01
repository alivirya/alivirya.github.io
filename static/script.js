let photoIndex = 0;
let textIndex = 0;
function phoebeSlideshow() {
    let image = document.getElementById("phoebe")
    images = ["media/phoebe1.jpg", "media/phoebe2.jpg", "media/phoebe3.jpeg", "media/phoebe4.jpg", "media/phoebe5.jpg", "media/phoebe6.jpg", "media/phoebe7.jpg", "media/phoebe8.jpg"]

    photoIndex++;
    if (photoIndex >= images.length) {
        photoIndex = 0;
    }
    image.src = images[photoIndex];
}

function textSlideshow() {
    let textId = document.getElementById("description");
    let text = ["I'm 22 years old", "I've lived in six countries", "I go rock climbing",
     "I'm Indonesian", "I have a dog named Phoebe", "I love food"]
    textIndex++;
    if (textIndex >= text.length) {
        textIndex = 0;
    }
    textId.innerHTML = text[textIndex];
}

function openAbout() {
    let about = document.getElementById("about-me");
    if (about.style.display == "none") {
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }
}

function openExperience() {
    let workExperience = document.getElementById("work-experience");
    if (workExperience.style.display == "none") {
        workExperience.style.display = "block";
    } else {
        workExperience.style.display = "none";
    }
}

function openVolunteer() {
    let volunteerExperience = document.getElementById("volunteer-experience");
    if (volunteerExperience.style.display == "none") {
        volunteerExperience.style.display = "block";
    } else {
        volunteerExperience.style.display = "none";
    }
}


setInterval(phoebeSlideshow, 4000);
setInterval(textSlideshow, 4000);