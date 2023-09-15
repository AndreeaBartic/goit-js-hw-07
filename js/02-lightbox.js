import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElement = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>
`
  )
  .join("");

galleryElement.innerHTML = galleryMarkup;

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

console.log(galleryItems);
