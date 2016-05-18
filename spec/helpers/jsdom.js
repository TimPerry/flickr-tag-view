var jsdom = require("jsdom").jsdom;
var doc = jsdom();
global.window = doc.defaultView;
global.document = window.document;
