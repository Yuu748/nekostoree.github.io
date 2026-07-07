const groupBtn = document.querySelector(".group-btn");
const dropdown = document.querySelector(".dropdown");

if (groupBtn && dropdown) {
    groupBtn.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
}
