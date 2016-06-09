// const Clarifai = require('clarifai');
// const key = require('../../keys.js');

const helpers = require('./helpers.js');

const testImages = [
<<<<<<< 0796abdf60d50b1d1f4e7c39b2998ec4ce03fc69
  'http://i.imgur.com/FWGpCuk.jpg',
  'http://media.galaxant.com/000/108/061/desktop-1421344897.jpg',
];

helpers.getTags(testImages, (err, images) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(JSON.stringify(images, null, 2));
});

// helpers.classifyPhoto(testImages, '')
=======
	// 'https://avatars2.githubusercontent.com/u/2666121?v=3&s=400/#.jpg'
	'https://media.gq.com/photos/55844a853655c24c6c981c29/master/pass/style-2010-09-new-business-casual-office-cardigan.jpg'
	// 'https://avatars2.githubusercontent.com/u/17420728?v=3&s=400/#.jpg'
	// 'https://s-media-cache-ak0.pinimg.com/736x/3c/72/88/3c7288456d07f05f224721868867143a.jpg'
  // 'https://avatars3.githubusercontent.com/u/709295?v=3&s=400/#.jpg',
  // 'http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg'
];


helpers.getTagsFromClarifai(testImages);
>>>>>>> completed function to match tags to pre-defined categories
