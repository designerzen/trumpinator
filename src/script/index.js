'use strict';

// Import libs to save images to your hard drive...
import DOMtoImage from 'dom-to-image';
import FileSaver from 'file-saver';

// Fetch the main element that the app lives within
const element = document.getElementById('bernie');
const elementTweets = document.getElementById('tweets');
const elementTimeline = document.getElementById('twitter-timeline');

const tweeter = "realDonaldTrump";

// Lame...
let loadScript = function()
{
  window.twttr = (function(d, s, id)
  {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));
};


// Convert the page to an image and force download
let saveJpeg = function( filename='trumped.jpg' )
{
  DOMtoImage
    .toJpeg( element, { quality: 0.95 })
    .then(function (dataUrl) {
      /*
      var link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
      */
      FileSaver.saveAs(dataUrl, filename);
    });
};

let savePng = function( filename='trumped.png' )
{
  DOMtoImage
    .toBlob( element )
    .then(function (blob) {
        FileSaver.saveAs(blob, filename);
    });
};


let loadTweets = function( user, element )
{
  //console.error(twttr);
  var options = {
      align: 'left'
  };

  twttr.widgets.createTweet(
    user,
    element,
    options

  ).then(function (el) {

    //alert("Tweet displayed.");
    elementTweets.className = "loaded";
  });
}

console.log("Loading Twitter API");
// loadScript();


window.addEventListener("load", function onPage() {
  console.log("Page loaded" );
  //loadTweets( tweeter, elementTimeline );
});


/*
twttr.ready( function onTwitter() {
  console.log("Twitter API loaded");
  //loadTweets( '511181794914627584' );
  elementTweets.className = "loaded";


});
*/

// Import ther configurator to create the angled board
import Config from './transform.js';
