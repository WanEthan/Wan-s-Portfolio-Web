


function hoverover(iconname) {
    var className = document.querySelector("." + iconname)
    if (iconname == "home") {
        className.innerHTML= "Home";
    }
    else if (iconname == "me") {
        className.innerHTML = "About Me";
    }
    else if (iconname == "project") {
        className.innerHTML = "Project";
    }
    else if (iconname == "contact") {
        className.innerHTML = "Contact";
    }
}

function hoverout(iconname) {
    var className = document.querySelector("." + iconname)
    if (iconname == "home") {
        className.innerHTML= "<img src='./iconimage/home.png' alt='home'>";
    }
    else if (iconname == "me") {
        className.innerHTML = "<img src='./iconimage/user.png' alt='user'>";
    }
    else if (iconname == "project") {
        className.innerHTML = "<img src='./iconimage/projects.png' alt='projects'>";
    }
    else if (iconname == "contact") {
        className.innerHTML = "<img src='./iconimage/contact.png' alt='contact'>";
    }
}