let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: "true",
        },
        slidesPerView: "auto",
        spaceBetween: 16,
      });
    }
  } else if (init) {
    swiper.destroy();

    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

let tabl = document.querySelector(".swiper");
let toggleButton = document.querySelector(".main__more-text");
let contentButton = document.querySelector(".more-text__text");
let icon = document.querySelector(".more-text__icon");

function toggleContent() {
  if (contentButton.textContent === "Показать все") {
    tabl.classList.add("full");
    contentButton.textContent = "Скрыть";
    icon.style.transform = "rotate(270deg)";
  } else {
    tabl.classList.remove("full");
    contentButton.textContent = "Показать все";
    icon.style.transform = "rotate(90deg)";
  }
}

toggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleContent();
});
