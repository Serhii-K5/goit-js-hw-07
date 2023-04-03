import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
// v1
// const arr = [];

// galleryItems.forEach(el => {
// 	const galleryDiv = document.createElement('div');
// 	galleryDiv.className = 'gallery__item';

// 	const link = document.createElement('a');
// 	link.className = 'gallery__link';
// 	link.href = el.original;

// 	const img = document.createElement('img');
//   img.className = 'gallery__image';
//   img.src = el.preview;
//   img.setAttribute('data-source', el.original);
//   img.alt = el.description;

//   galleryDiv.append(link);
// 	link.append(img);
// 	arr.push(galleryDiv);
// });

// gallery.append(...arr);

// v2
eventListener(false);
const textInsert = galleryItems
  .map((el) => `<a class="gallery__link" href=${el.original}><img class="gallery__image" src=${el.preview} data-source=${el.original} alt="${el.description}"></a>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", textInsert, eventListener(true));

function eventListener(flag) {
  if (flag) {
    gallery.addEventListener('click', el => {
      el.preventDefault();

      if (el.target.nodeName !== 'IMG') { return };

      const selectedEl = el.target.getAttribute('data-source');
      const imgLightbox = basicLightbox.create(`<img src="${selectedEl}">`);

      imgLightbox.show();
    
      gallery.addEventListener('keydown', el => {
        if (el.key === 'Escape') { imgLightbox.close() };
      });
    });
  }
}

console.log(galleryItems);
