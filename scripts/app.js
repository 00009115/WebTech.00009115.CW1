isSigned = false;

document.getElementById("menu-button").addEventListener("click", () => {
    document.getElementById("nav-bar").classList.toggle("is-visible");
    document.getElementById("menu-icon").classList.toggle("is-white");
    document.getElementById("sign").querySelector(".btn").classList.toggle("dark");
    document.getElementById("sign").querySelector(".btn").classList.toggle("light");
    // console.log()
});

if (isSigned) {
    document.getElementById("sign").style.display = "none";
    document.getElementById("user").style.display = "block";
} else {
    document.getElementById("sign").style.display = "block";
    document.getElementById("user").style.display = "none";
}

// console.log()