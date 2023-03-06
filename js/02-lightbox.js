import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const arr = [];

galleryItems.forEach(el => {
	const link = document.createElement('a');
	link.className = 'gallery__link';
	link.href = el.original;

	const img = document.createElement('img');
  img.className = 'gallery__image';
  img.src = el.preview;
  img.setAttribute('title', el.original);
  img.alt = el.description;

  link.append(img);
	arr.push(link);
});

gallery.append(...arr);

new SimpleLightbox('.gallery a', {});

console.log(galleryItems);
