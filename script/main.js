import { initializeSwipers } from "./swiper.js";
import { initializeMenu } from "./menu.js";
import { initializeSearch } from "./search.js";

document.addEventListener("DOMContentLoaded", function () {
  initializeSwipers();
  initializeMenu();
  initializeSearch();
});
