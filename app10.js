const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;

    h1.classList.togglr(clicked);
}

h1.addEventListener("click", handleTitleClick);

function handleMouseEnter() {
    h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone";
}



function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("NO wIFI");
}

function handleWindowOnline() {
    alert("GOOD");
}



h1.onclick("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);



window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
