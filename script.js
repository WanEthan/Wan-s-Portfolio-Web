const codeArr = ["code-link1", "code-link2", "code-link3", "code-link4"]
const demoArr = ["demo-link1", "demo-link2", "demo-link3", "demo-link4"]

function hoverover(iconname) {
    var className = document.querySelector("." + iconname)
    if (iconname == "home") {
        className.innerHTML = "Home";
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
    else if (codeArr.includes(iconname)) {
        className.innerHTML = "Code";
    }
    else if (demoArr.includes(iconname)) {
        className.innerHTML = "Demo";
    }
}

function hoverout(iconname) {
    var className = document.querySelector("." + iconname)
    if (iconname == "home") {
        className.innerHTML = "<img src='./iconimage/home.png' alt='home'>";
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
    else if (codeArr.includes(iconname)) {
        className.innerHTML = "<i id='codeicon'class='fa-solid fa-code'></i>";
    }
    else if (demoArr.includes(iconname)) {
        className.innerHTML = "<i id='demoicon'class='fa-solid fa-up-right-from-square'></i>";
    }
}

// let slidemove


// function myFunction() {
//     document.getElementById("welcome").style.backgroundImage = "linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.35)), url(background-1.jpeg)";
//     document.getElementById("welcome").style.backgroundSize = "contain";
// }