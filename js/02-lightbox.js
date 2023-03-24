import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
// v1
// const arr = [];

// galleryItems.map(el => {
// 	const link = document.createElement('a');
// 	link.className = 'gallery__link';
// 	link.href = el.original;

// 	const img = document.createElement('img');
//   img.className = 'gallery__image';
//   img.src = el.preview; 
//   img.setAttribute('title', `${el.description}`);
//   img.alt = el.description;

//   link.append(img);
// 	arr.push(link);
// });

// gallery.append(...arr);

// v2
// const textInsert = galleryItems
//   .map((el) => `<a class="gallery__link" href=${el.original}><img class="gallery__image" src=${el.preview} data-source=${el.original} title="${el.description}" alt="${el.description}"></a>`)
//   .join("");

// gallery.insertAdjacentHTML("beforeend", textInsert);

// v3
const textInsert = galleryItems
  .map(({ original, preview, description }) => `<a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} title="${description}" alt="${description}"></a>`)
	.join("");
	
gallery.insertAdjacentHTML('beforeend', textInsert);

new SimpleLightbox(".gallery a", {captionDelay: 250});

console.log(galleryItems);
