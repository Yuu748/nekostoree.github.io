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

const instagramBtn = document.getElementById("instagramBtn");
const videoPopup = document.getElementById("videoPopup");
const promoVideo = document.getElementById("promoVideo");
const closeVideo = document.getElementById("closeVideo");

if (instagramBtn && videoPopup && promoVideo && closeVideo) {

    instagramBtn.addEventListener("click", (e) => {

        e.preventDefault();

        videoPopup.classList.add("show");

        promoVideo.currentTime = 0;

        promoVideo.play();

    });

    closeVideo.addEventListener("click", () => {

        promoVideo.pause();

        promoVideo.currentTime = 0;

        videoPopup.classList.remove("show");

    });

}

videoPopup.addEventListener("click",(e)=>{

    if(e.target===videoPopup){

        promoVideo.pause();

        promoVideo.currentTime=0;

        videoPopup.classList.remove("show");

    }

});