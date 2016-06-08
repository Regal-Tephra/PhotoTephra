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
      imageUrl: url,
      tags: tags,
    }))
    .save(callback);  // callback(err)
  }
  retrieve(url, callback) {
    this.Image.findOne({ url }, callback); // callback(err, Image)
  }
}
TaggedImages.imageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true, unique: true },
  tags: { type: Array, "default": [] },
})

const dbAddress = 'ds025583.mlab.com:25583/photephra';
const dbUser = 'regal';
const dbPassword = 'tephra';
const imageTags = new TaggedImages(dbUser, dbPassword, dbAddress);


imageTags.add(
  'http://i.telegraph.co.uk/multimedia/archive/03589/Wellcome_Image_Awa_3589699k.jpg',
  ['cave', 'purple', 'light'],
  err => {
    if (err) {
      console.error('error saving link');
      return;
    }
    console.log(imageTags.retrieve('http://i.telegraph.co.uk/multimedia/archive/03589/Wellcome_Image_Awa_3589699k.jpg'),
      (err, image) => {
        console.log('image');
      })
  });
module.exports = TaggedImages;