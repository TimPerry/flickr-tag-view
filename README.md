# Flickr tag view

## Install

Check out this project `git clone https://github.com/TimPerry/flickr-tag-view` and then run `npm install`

## Usage

To get started run the `npm start` command. You can then visit `http://localhost:8392/` to the project.

## Tests

To run the unit tests run `npm test` you will need to make sure you have run `npm install` first.

## About

This project uses Redux, React and webpack to create a grid view of images requested from `http://api.flickr.com/services/feeds/photos_public.gne`. To request this data we use the `jsonp` package as the endpoint does not support CORS. We then use unidirectional dataflow via redux. So actions are dispatched via action creators. We then act on these actions in our reducers, change the state, this is then sent back to the component/s that care about whatever was change (mapped in the containers) and the app is updated.

The tests are done with jasmine and as we are using the jsonp library I have brought in the `jsdom` package.


