// Import inline styles
import styles from './../style/style';

// Import libs to save images to your hard drive...
import DOMtoImage from 'dom-to-image';
import FileSaver from 'file-saver';

// Fetch the main element that the app lives within
const element = document.getElementById('bernie');

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


console.log("Loading Twitter API", twttr);
loadScript();

window.addEventListener("load", function onPage() {
  console.log("Page loaded", twttr._e );
});


twttr.ready( function onTwitter() {
  console.log("Twitter API loaded");
  //loadTweets( '511181794914627584' );
});
