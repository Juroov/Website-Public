const slider = document.getElementById("slider");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 250, behavior: 'smooth' });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -250, behavior: 'smooth' });
});
