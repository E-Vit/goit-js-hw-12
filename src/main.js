import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
let totalHits = 0;
let loadedImages = 0;

form.addEventListener("submit", async e => {
  e.preventDefault();

  query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

  page = 1;
  loadedImages = 0;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (!data.hits.length) {
      iziToast.warning({
        title: "No results",
        message: "Sorry, there are no images matching your search query.",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);
    loadedImages += data.hits.length;

    if (loadedImages >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: "End",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  page += 1;  

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    loadedImages += data.hits.length;

    if (loadedImages >= totalHits || data.hits.length < 15) {
      hideLoadMoreButton();
      iziToast.info({
        title: "End",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    }

    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
    
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Unable to load more images.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});