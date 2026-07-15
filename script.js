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
    sound.play();

    cat.src = "cat_meow.png";

    cat.classList.add("active");

    setTimeout(() => {

        cat.src = "cat_idle.png";

        cat.classList.remove("active");

    },700);

});
