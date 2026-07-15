import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwmY0eghiVz1njptpM_4ylk6DTO15EpCI",
  authDomain: "neko-store-9dbd1.firebaseapp.com",
  projectId: "neko-store-9dbd1",
  storageBucket: "neko-store-9dbd1.firebasestorage.app",
  messagingSenderId: "373922683235",
  appId: "1:373922683235:web:5790e3f35f5970a94d5b56"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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

async function loadStock(){

    const stockContainer = document.getElementById("stockContainer");

    if(!stockContainer) return;

    const querySnapshot = await getDocs(collection(db,"accounts"));

    stockContainer.innerHTML = "";

    querySnapshot.forEach((doc)=>{

        const item = doc.data();

        stockContainer.innerHTML += `

        <div class="stock-card">

            <img src="${item.image}">

            <h3>${item.name}</h3>

            <p>🇮🇩 Rp ${item.priceIDR}</p>

            <p>🇹🇭 ฿ ${item.priceTHB}</p>

            <p>🇲🇾 RM ${item.priceMYR}</p>

            <p>🇺🇸 $${item.priceUSD}</p>

            <span>${item.status}</span>

        </div>

        `;

    });

}

loadStock();