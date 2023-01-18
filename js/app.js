// JS fragment import example
import * as functions from './modules/functions.js';
functions.isWebp();
functions.spollers();

// БАЗОВІ СКРИПТИ
import './modules/base.js';

// ТАБИ
import './modules/tabs.js';

//  СЛАЙДЕР
import './modules/slider.js';

// Попап
import './modules/popup.js';

//  2 варіант табу на чистому js
// import './modules/tabs2.js';

// import Bound from './libs/bounds.js'

// const boundary = Bound({
// 	margins: {bottom: 100}
// })

// const image = document.querySelectorAll('img[data-src]')

// const whenImageEnters = (image) => {
// 	return () => {
// 		image.src = image.dataset.src
// 	}
// }

// image.forEach(img => {
// 	boundary.watch(img, whenImageEnters(img))
// })

// Динамический адаптив
// Документация: https://github.com/FreelancerLifeStyle/dynamic_adapt#readme
//import './libs/dynamicAdapt.js';

// NPM Swiper installation example
/*
import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	...
});
*/

AOS.init();

const mediaQuery = window.matchMedia('(min-width: 768px)');

var rellax = new Rellax('.mobile-rellax');

if (mediaQuery.matches) {
  var rellax = new Rellax('.rellax');
  var rellax = new Rellax('.banner__stats', {
    speed: 0.5,
  });
}

// const banner_images = document.querySelectorAll('.banner__img');

// banner_images.forEach((img, index) => {
//   var rellax = new Rellax(img, {
//     speed: index / 2,
//   });
// });
