import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

export const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${likes}</li>
          <li><b>Views:</b> ${views}</li>
          <li><b>Comments:</b> ${comments}</li>
          <li><b>Downloads:</b> ${downloads}</li>
        </ul>
      </li>`
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

const loader = document.querySelector(".loader");

export function showLoader() {
  loader.classList.remove("hidden");
}

export function hideLoader() {
  loader.classList.add("hidden");
}