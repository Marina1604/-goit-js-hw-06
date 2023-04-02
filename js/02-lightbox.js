import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

const galleryEl = document.querySelector('.gallery')

const images = galleryItems
  .map(
    (image) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>`,
  )
  .join('')

galleryEl.insertAdjacentHTML('beforeend', images)

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 })
