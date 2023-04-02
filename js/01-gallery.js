import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

const galleryEl = document.querySelector('.gallery')

const images = galleryItems
  .map(
    (image) => `
      <li class="gallery__item">
          <a class="gallery__link" href="${image.original}">
              <img
              class="gallery__image"
              src="${image.preview}"          
              data-source="${image.original}"           
              alt="${image.description}"         
              />      
          </a>     
      </li>`,
  )
  .join('')

galleryEl.insertAdjacentHTML('beforeend', images)

galleryEl.addEventListener('click', onImageClick)

function onImageClick(e) {
  // заборона стандартних дій, щоб браузер не відкривав картинку по посиланню
  e.preventDefault();

  // перевіряємо, якщо не картинка, виходимо

  if (e.target.nodeName !== 'IMG') {
    return
  }
  //   в протилежному випадку вик. бібліотеку basic Lightbox
  const instance = basicLightbox.create(
    `<img src ="${e.target.dataset.source}" width="800" height="600">`

    );
    instance.show();

  // закриття
  galleryEl.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close()
    }
  })
}
