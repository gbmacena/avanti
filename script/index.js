document.addEventListener("DOMContentLoaded", function () {
  const slidesData = Array(10).fill({
    image: "assets/2j0a2073 1 copy.png",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    oldPrice: "R$ 100.00",
    newPrice: "R$ 79.90",
    discount: "10% OFF",
    installment: "10x de R$ 7.90",
  });

  const slidesContainer = document.getElementById("swiper-slides-container");

  slidesData.forEach((slide) => {
    const slideElement = document.createElement("div");
    slideElement.className = "swiper-slide";
    slideElement.innerHTML = `
      <div class="border border-gray-200 rounded-md overflow-hidden">
        <div class="relative">
          <span class="absolute top-2 left-2 bg-[#00264e] text-white text-xs px-2 py-1 rounded">
            NOVO
          </span>
          <img src="${slide.image}" alt="Produto" class="w-full h-auto" />
        </div>
        <div class="p-4">
          <h3 class="text-sm text-gray-700 mb-2">${slide.title}</h3>
          <div class="flex flex-col">
            <span class="text-xs text-gray-500 line-through">${slide.oldPrice}</span>
            <div class="flex items-center">
              <span class="font-bold mr-2">${slide.newPrice}</span>
              <span class="bg-[#5ec0be] underline text-white text-xs px-1 py-0.5 rounded">${slide.discount}</span>
            </div>
            <span class="text-xs text-gray-600 mt-1">Ou em até <span class="font-bold text-black">${slide.installment}</span> </span>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700 transition">
            Comprar
          </button>
        </div>
      </div>
    `;
    slidesContainer.appendChild(slideElement);
  });

  const swiper = new Swiper(".product-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    pagination: {
      el: ".custom-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} w-2 h-2 rounded-full mx-1" style="background-color: #838383;"></span>`;
      },
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    },
  });

  swiper.on("paginationUpdate", function () {
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    bullets.forEach((bullet) => {
      if (bullet.classList.contains("swiper-pagination-bullet-active")) {
        bullet.style.backgroundColor = "#303030";
      } else {
        bullet.style.backgroundColor = "#838383";
      }
    });
  });
});
