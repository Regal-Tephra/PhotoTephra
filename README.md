# Photephra
[![Stories in Ready](https://badge.waffle.io/Regal-Tephra/PhoTephra.svg?label=ready&title=Ready)](http://waffle.io/Regal-Tephra/PhoTephra)

##Table of Contents
1. [Project Overview] (#Project-Overview)
2. [Getting Started] (#Getting-Started)
3. [Technologies] (#Technologies)
4. [Team] (#Team)
5. [Contributing] (#Contributing)

##Project Overview <a name="Project-Overview"></a>


Improve your online dating profile by employing the best practices. Create a well balanced profile by picking a portrait, professional, athletic, and adventurous photo to get the attention of your next true love.

## Project Features:
- Redone front end with slide format, about us pages, carousel picture viewer,  etc.
- Backend grabs tags from ML startup Clarifai’s API to automatically tag photos. 
- Backend includes automatic categorizing of photos into portrait, professional, athletic, and adventurous buckets.
- Backend includes memoization of already-tagged Clarifai photos

## Getting Started <a name="Getting-Started"></a>

### Project Setup 

1. Install dependencies

    ```
    $ npm install; 
    ```

### Start server

1. Start the server by running the following command from the root directory:

    ```
    $ nodemon server/server.js
    ```
Or

    ```
    $ node server/server.js
    ```
2. Your server is now live at http://localhost:4000

### Making changes

1. Changes to React components that interact with our server and database

    ```
    $ npm prod
    ```
2. Monitor changes to just front end components
    
    ```
    $ npm start
    ```
## Technologies <a name="Technologies"></a>

#### Front end: 
- React
- Babel
- React Bootstrap
- Facebook Graph API/SDK
- Clarifai API
- React Slick



#### Back end: 
- Express
- Node
- MongoDB
    
## Teams <a name="Team"></a>
### Legacy Team 
Scrum Master: [Felix Feng](https://github.com/felix2feng)

Product Manager: [Austin Baltes](https://github.com/austinba)

[Aaron Freidus](https://github.com/shadowfool)

[Andy Tran](https://github.com/adtran117)
    
### Original Team
    - Matt Naing @mattgrisanu
    - Adam Lessen @lessenadam
    - Erin Kavanaugh @erinkav

## Contributing <a name="Contributing"></a>

See our contributing guide to get started [here](CONTRIBUTING.md)

