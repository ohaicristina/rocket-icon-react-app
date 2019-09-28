import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var videoAttr = { 'autoplay': true, 'loop': true, 'mute': true, 'playsinline': true };
var imgMP4s = Array.prototype.map.call(
    document.querySelectorAll('img[src*=".mp4"]'),
    function (img) {

        var src = img.src;
        img.src = null;

        img.addEventListener('error', function (e) {
            console.log('MP4 in image not supported. Replacing with video', e);
            var video = document.createElement('video');

            for (var key in videoAttr) { video.setAttribute(key, videoAttr[key]); }

            for (
                var imgAttr = img.attributes,
                len = imgAttr.length,
                i = 0;
                i < len;
                i++
            ) {
                video.setAttribute(imgAttr[i].name, imgAttr[i].value);
            }

            img.parentNode.insertBefore(video, img);
            img.parentNode.removeChild(img);
        }
        );

        img.src = src;
    }
);
