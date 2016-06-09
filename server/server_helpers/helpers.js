const _ = require('lodash');
const Clarifai = require('clarifai');
const DbForSavingPhotoAPIResults = require('./DbForSavingPhotoAPIResults');
const key = require('../../keys.js');
const categories = require('./categories.js');

console.log(key);

const client = new Clarifai({
  id: key.clarifaiClientID,
  secret: key.clarifaiClientSecret,
});
console.log(client);

console.log(client);

// take an array and return arr selecting only =limit # of elements
module.exports.minimizeAndRandArr = (arr, targetLength) => {
  const totalLen = arr.length;
  const di = totalLen / targetLength;
  const results = [];

  if (totalLen <= targetLength) {
    return arr;
  }
  for (let i = 0; i < totalLen; i += di) {
    const ind = Math.floor(i + Math.floor(Math.random() * di));
    console.log(ind);
    results.push(arr[ind]);
  }
  return results;
};

// OLD: Takes an array of photos and return an array w/ attributes
module.exports.createArrayOfPhotos = (imageArray) => {
  const result = [];
  for (let img = 0; img < imageArray.length; img++) {
    result.unshift({
      thumbnail: imageArray.models[img].attributes.url,
      src: imageArray.models[img].attributes.url,
      arcId: imageArray.models[img].attributes.arc_id,
    });
  }
  return result;
};

// Get Tags from Clarifai (memoized on database) and return array with photos
module.exports.getTags = (photoArray, callback) => {
  // TODO: COMPLETE FUNCTION
  // Input: Takes an array of photos
    // Send ajax request to Clarifai server in its required format
  // let returnArray = [];
  // Get new access token
  client.getAccessToken((clarifaiAccessErr, accessToken) => {
    if (clarifaiAccessErr) {
      callback(clarifaiAccessErr);
      return;
    }
<<<<<<< 0796abdf60d50b1d1f4e7c39b2998ec4ce03fc69

    const db = new DbForSavingPhotoAPIResults();

    // Check if these have already been checked
    db.retrieveUsingArray(photoArray, (dbRetrieveErr, imagesFound, imagesNotFound) => {
      console.log('images in db:', imagesFound.length);
      console.log('images not in db:', imagesNotFound.length);
      if (dbRetrieveErr) {
        callback(dbRetrieveErr);
        return;
      }
      const finishedCallback = (newlyTagged) => {
        let images = Array(imagesNotFound.length);
        const saveToDbCallback = saveToDbErr => {
          if (saveToDbErr) {
            callback(saveToDbErr);
            return;
          }
          console.log('saved something to DB');
        };
        for (let i = 0; i < imagesNotFound.length; i++) {
          images[i] = { url: imagesNotFound[i], apiData: newlyTagged[i] };

          // Add image to db
          db.add(images[i].url, images[i].apiData, saveToDbCallback);
          console.log('newly tagged:', images[i].url);
        }
        images = images.concat(imagesFound);
        callback(null, images);
      };

      if (imagesNotFound.length > 0) {
        client.tagFromUrls('image', imagesNotFound, (clarifaiTagErr, newlyTagged) => {
          if (clarifaiTagErr) {
            callback(clarifaiTagErr);
            return;
          }
          finishedCallback(newlyTagged);
        });
      } else {
        finishedCallback([]);
      }
=======
    console.log(accessToken);
  //   // TODO: Photo Array May need cleaning up
  // const arrayOfPhotos = photoArray;
  // client.tagFromUrls('image', arrayOfPhotos, (err1, results) => {
  //   if (err1) {
  //     console.log('Error in getting images from Clarifai', err1);
  //     return;
  //   }
  //   console.log("Results from Clarifai", results);
  //   // Clean up each photo and return replace new array
  //   returnArray = _.map(results.tags, (photo) => {
  //     const newPhoto = photo;
  //     // add the URL of the photo along that was sent
  //     newPhoto.url = photoArray.url;
  //     // Also, remove the concept ID. We don't need it
  //     delete newPhoto.conceptId;
  //     return newPhoto;
  //   });
  // });

    client.tagFromUrls('image', photoArray, (error, results) => {
      if (error) {
        console.log(err);
      }
      // console.log(JSON.stringify(results));
      module.exports.classifyTags(results.tags);
>>>>>>> completed function to match tags to pre-defined categories
    });

    console.log(accessToken);
    //   // TODO: Photo Array May need cleaning up
    // const arrayOfPhotos = photoArray;
    // client.tagFromUrls('image', arrayOfPhotos, (err1, results) => {
    //   if (err1) {
    //     console.log('Error in getting images from Clarifai', err1);
    //     return;
    //   }
    //   console.log("Results from Clarifai", results);
    //   // Clean up each photo and return replace new array
    //   returnArray = _.map(results.tags, (photo) => {
    //     const newPhoto = photo;
    //     // add the URL of the photo along that was sent
    //     newPhoto.url = photoArray.url;
    //     // Also, remove the concept ID. We don't need it
    //     delete newPhoto.conceptId;
    //     return newPhoto;
    //   });
    // });

  });
  // console.log(client.tagFromUrls);
  // Returns array of photos with tags from clarifai
  // [{results: [url: 'url', result: {tag: {classes: [...] }, {probs: [...] }   }]   }]
  // return returnArray;
};

// Classify photo based
module.exports.classifyTags = (tags) => {
//   // TODO: Complete Function
  // Input is an array of tags
  // Output is an array of one or multiple categories (ex: ['professional', 'headshot'])
  const categorized = [];

  _.forEach(categories, (value, index) => {
    // Look at all the tags
    for (let i = 0; i < tags.length; i++) {
      // If it is inside the categories array, push it but break immediately
      // so there are no duplicate categories
      if (_.indexOf(value, tags[i].class) !== -1) {
        categorized.push(index);
        break;
      }
    }
  });

  console.log(categorized);

  return categorized;
};

// Helper Functions that I need
  // Get the facebook photos that I need from the array Andy is sending me
    // PENDING: May already have from createArrayofPhotos Helper

