const initializeSearch = () => {
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

  const performSearch = (input, result, resultText, clearButton) => {
    const searchText = input.value.trim();

    if (searchText.trim()) {
      resultText.textContent = `Você buscou por: '${searchText}'`;
      result.classList.remove("hidden");
      clearButton.classList.remove("hidden");
    }
  };

  const clearSearch = (input, result, clearButton) => {
    input.value = "";
    result.classList.add("hidden");
    clearButton.classList.add("hidden");
  };

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    performSearch(searchInput, searchResult, searchResultText, clearButton);
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch(searchInput, searchResult, searchResultText, clearButton);
    }
  });

  clearButton.addEventListener("click", () => {
    clearSearch(searchInput, searchResult, clearButton);
  });

  mobileSearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    performSearch(
      mobileSearchInput,
      mobileSearchResult,
      mobileSearchResultText,
      mobileClearButton
    );
  });

  mobileSearchInput.addEventListener("keypress", (event) => {
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

  mobileClearButton.addEventListener("click", () => {
    clearSearch(mobileSearchInput, mobileSearchResult, mobileClearButton);
  });
};

export { initializeSearch };
