document.addEventListener("DOMContentLoaded", function () {
  const slidesData = Array(10).fill({
    image: "assets/products/product-1.jpg",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    oldPrice: "R$ 100.00",
    newPrice: "R$ 79.90",
    discount: "10% OFF",
    installment: "10x de R$ 7.90",
  });

  function createSlideElement(slide) {
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
  }

  function populateSlides(containerId) {
    const slidesContainer = document.getElementById(containerId);
    slidesData.forEach((slide) => {
      slidesContainer.appendChild(createSlideElement(slide));
    });
  }

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
    on: {
      init: function (swiper) {
        const bullets = swiper.pagination.bullets;
        bullets.forEach((bullet, index) => {
          bullet.style.backgroundColor =
            index === swiper.activeIndex ? "#303030" : "#838383";
          bullet.style.width = "10px";
          bullet.style.height = "10px";
          bullet.style.margin = "0 5px";
          bullet.style.opacity = "1";
        });
      },
      paginationUpdate: function (swiper) {
        const bullets = swiper.pagination.bullets;
        bullets.forEach((bullet, index) => {
          bullet.style.backgroundColor =
            index === swiper.realIndex ? "#303030" : "#838383";
        });
      },
    },
  };

  const swiper1 = new Swiper(".product-swiper", {
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

  const swiper2 = new Swiper(".another-swiper", {
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

  function handleResize() {
    [swiper1, swiper2].forEach((swiper) => {
      if (window.innerWidth < 768) {
        swiper.params.spaceBetween = 10;
      } else {
        swiper.params.spaceBetween = 15;
      }
      swiper.update();
    });
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("block");
    const icon = menuToggle.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("block");
    mobileMenu.classList.add("hidden");
    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const clearButton = document.getElementById("clear-button");
  const searchResult = document.getElementById("search-result");
  const searchResultText = document.getElementById("search-result-text");

  const mobileSearchInput = document.getElementById("mobile-search-input");
  const mobileSearchButton = document.getElementById("mobile-search-button");
  const mobileClearButton = document.getElementById("mobile-clear-button");
  const mobileSearchResult = document.getElementById("mobile-search-result");
  const mobileSearchResultText = document.getElementById(
    "mobile-search-result-text"
  );

  function performSearch(input, result, resultText, clearButton) {
    const searchText = input.value.trim();

    if (searchText.trim()) {
      resultText.textContent = `Você buscou por: '${searchText}'`;
      result.classList.remove("hidden");
      clearButton.classList.remove("hidden");
    }
  }

  function clearSearch(input, result, clearButton) {
    input.value = "";
    result.classList.add("hidden");
    clearButton.classList.add("hidden");
  }

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    performSearch(searchInput, searchResult, searchResultText, clearButton);
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch(searchInput, searchResult, searchResultText, clearButton);
    }
  });

  clearButton.addEventListener("click", function () {
    clearSearch(searchInput, searchResult, clearButton);
  });

  mobileSearchButton.addEventListener("click", function (event) {
    event.preventDefault();
    performSearch(
      mobileSearchInput,
      mobileSearchResult,
      mobileSearchResultText,
      mobileClearButton
    );
  });

  mobileSearchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch(
        mobileSearchInput,
        mobileSearchResult,
        mobileSearchResultText,
        mobileClearButton
      );
    }
  });

  mobileClearButton.addEventListener("click", function () {
    clearSearch(mobileSearchInput, mobileSearchResult, mobileClearButton);
  });
});
