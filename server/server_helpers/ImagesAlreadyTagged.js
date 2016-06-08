'use strict';
const mongoose = require('mongoose');
class TaggedImages {
  constructor(dbUser, dbPassword, dbAddress) {
    const dbUri = `mongodb://${dbUser}:${dbPassword}@${dbAddress}`;
    this.db = mongoose.connect(dbUri);
    this.Image = mongoose.model('Image',
      TaggedImages.imageSchema);
  }
  add(url, tags, callback) {
    (new this.Image({
      url,
      tags,
    }))
    .save(callback);  // callback(err)
  }
  retrieve(url, callback) {
    this.Image.findOne({ url }, callback); // callback(err, Image)
  }
  retrieveUsingArray(urls, callback) {
    const imagesFound = [];
    const imagesNotFound = [];
    let callbacksRemaining = urls.length;

    // Cycle through each url
    urls.forEach(url => {
      this.retrieve(url, (err, image) => {
        if(err) {
          callback(err);
          return;
        }
        // Categorize images
        if (image === null) {
          imagesNotFound.push(url);
        } else {
          imagesFound.push({ url: image.url, tags: image.tags });
        }

        // Callback when all items are checked 
        if (--callbacksRemaining === 0) {
          callback(null, imagesFound, imagesNotFound);
        }
      })
    })
  }
}
TaggedImages.imageSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  tags: { type: Array, "default": [] },
})

const dbAddress = 'ds025583.mlab.com:25583/photephra';
const dbUser = 'regal';
const dbPassword = 'tephra';
const imageTags = new TaggedImages(dbUser, dbPassword, dbAddress);


imageTags.add(
  'house.jpg',
  ['barn', 'suburb'],
  err => {
    if (err) {
      console.error('error saving link');
    }
  });

imageTags.retrieveUsingArray(
  ['animal.jpg', 'car.jpg', 'house.jpg', 'super.jpg'],
  (err, imagesFound, imagesNotFound) => {
    if(err) {
      console.error(err);
    }
    console.log('not found\n', imagesNotFound);
    console.log('\n\nfound\n', imagesFound);
  });


module.exports = TaggedImages;

