const initializeSwipers = () => {
  const slidesData = Array(10).fill({
    image: "assets/products/product-1.jpg",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    oldPrice: "R$ 100.00",
    newPrice: "R$ 79.90",
    discount: "10% OFF",
    installment: "10x de R$ 7.90",
  });

  const createSlideElement = (slide) => {
    const slideElement = document.createElement("div");
    slideElement.className = "swiper-slide";
    slideElement.innerHTML = `
      <div class="border border-gray-200 rounded-md overflow-hidden h-full flex flex-col">
        <div class="relative flex-grow">
          <span class="absolute top-2 left-2 bg-[#00264e] text-white text-xs px-1 py-1 rounded max-md:text-[10px] font-semibold max-md:p-1">
            NOVO
          </span>
          <img src="${slide.image}" alt="Produto" class="w-full h-auto" />
        </div>
        <div class="p-3 md:p-4 flex flex-col flex-grow">
          <h3 class="text-xs md:text-sm text-gray-700 mb-2 line-clamp-2">${slide.title}</h3>
          <div class="flex flex-col mt-auto">
            <span class="text-xs text-gray-500 line-through">${slide.oldPrice}</span>
            <div class="flex items-center">
              <span class="font-bold text-sm md:text-base mr-2">${slide.newPrice}</span>
              <span class="bg-[#5ec0be] underline text-white text-xs px-1 py-0.5 rounded max-sm:text-[10px]">${slide.discount}</span>
            </div>
            <span class="text-xs text-gray-600 mt-1">Ou em até <span class="font-bold text-black">${slide.installment}</span></span>
          </div>
          <button class="w-full bg-blue-600 text-white py-1 md:py-2 rounded mt-3 hover:bg-blue-700 transition text-sm md:text-base">
            Comprar
          </button>
        </div>
      </div>
    `;
    return slideElement;
  };

  const populateSlides = (containerId) => {
    const slidesContainer = document.getElementById(containerId);
    slidesData.forEach((slide) => {
      slidesContainer.appendChild(createSlideElement(slide));
    });
  };

  populateSlides("swiper-slides-container");
  populateSlides("another-swiper-slides-container");

  const commonSwiperConfig = {
    spaceBetween: 15,
    loop: true,
    pagination: {
      clickable: true,
      bulletActiveClass: "swiper-pagination-bullet-active",
      bulletClass: "swiper-pagination-bullet",
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 5 },
    },
  };

  new Swiper(".product-swiper", {
    ...commonSwiperConfig,
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    pagination: {
      el: ".custom-swiper-pagination",
      ...commonSwiperConfig.pagination,
    },
  });

  new Swiper(".another-swiper", {
    ...commonSwiperConfig,
    navigation: {
      nextEl: ".custom-swiper-button-next-2",
      prevEl: ".custom-swiper-button-prev-2",
    },
    pagination: {
      el: ".custom-swiper-pagination-2",
      ...commonSwiperConfig.pagination,
    },
  });
};

export { initializeSwipers };
