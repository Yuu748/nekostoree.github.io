const groupBtn = document.querySelector(".group-btn");
const dropdown = document.querySelector(".dropdown");

if (groupBtn && dropdown) {
    groupBtn.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
}

const cat = document.getElementById("catMascot");
const sound = document.getElementById("catSound");

cat.addEventListener("click", () => {

    sound.pause();
    sound.currentTime = 0;

    cat.src = "cat_meow.PNG";
    cat.classList.add("active");

    sound.play();

});

sound.addEventListener("ended", () => {

    cat.src = "cat_idle.PNG";
    cat.classList.remove("active");

});