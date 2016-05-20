# Flickr tag view

## Prerequisites
 
First you will want to grab node `https://nodejs.org/en/`. The project should work on most versions of node as it uses babel but for ease I would recommend grabbing the latest version.

## Install

Check out this project `git clone https://github.com/TimPerry/flickr-tag-view`, move into repo `cd flickr-tag-view` then run `npm install`

### Docker

If you plan on running this with docker then you will want to install it from here `https://docs.docker.com/engine/installation/`.

## Usage

To get started run `npm start` wherever you cloned the repo. You can then visit `http://localhost:8392/` to see the project in your browser.

### Docker

I have also included a docker-compose file. If you have docker installed then run `docker-compose up` wherever you cloned the repo.

## Tests

To run the unit tests run `npm test` you will need to make sure you have run `npm install` first and you are in the directory that you cloned the project into.

## About

This project uses Redux, React and webpack to create a grid view of images requested from `http://api.flickr.com/services/feeds/photos_public.gne`. To request this data we use the `jsonp` package as the endpoint does not support CORS. We then use unidirectional dataflow via redux. So actions are dispatched via action creators. Then act on these actions in our reducers, change the state, this is then sent back to the components that care about whatever was change (mapped in the containers) and the app is updated.

The tests are done with jasmine and as we are using the jsonp library I have brought in the `jsdom` package.

