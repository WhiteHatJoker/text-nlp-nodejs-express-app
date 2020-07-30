# Evaluate an article with NLP

## Overview

A single page app that utilises an external NLP API to evaluate a text or article. Once the text has been evaluated the relevant data is parsed and displayed on the UI. The app uses Webpack to package and optimise the project and service workers to display a 
cached version of the page should the server / internet not be available.

## Instructions

* Upon opening the project run 'npm i' in the console to install all required dependencies.
* Sign up for the MeaningCloud API on their website and replace the app key in current .env file as following: API_KEY=etg4t4egdgfgfgererer
* To open up the dev environment run 'npm run build-dev'.
* To open the production environment, first build the files using 'npm build-prod' and it will produce a dist folder. Then run 'npm start' and open 'localhost:8081' in browser.
* To run Jest tests, first go to __test__folder and replace an app key in with a real MeaningCloud App Key in each of the files there, then run 'npm test'.
* To run the NLP API, enter the text on the app and press submit.

## Resources

[MeaningCloud API]

[Webpack]

[Sass]

[Service workers]

[Express and Nodejs]

## Notes
The MeaningCloud App Key is stored in .env file. It needs to be replaced with a new key. Also, tests in __tests__ folder need to be readjusted for a new key.
