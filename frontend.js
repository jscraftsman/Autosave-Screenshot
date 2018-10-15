/* jshint esversion: 6 */

const VERSION = 'v1.0.0';
const SERVER_URL = 'http://localhost:3000/capture';

$(() => {
    console.log('[START] Adding capturer');

    const CAPTURE_UI = '<div style="position: absolute; top: 0.5em; right: 1em; z-index: 9999;"><button href="#" id="screen-capture" style="height: 3em;">Capture</button></div>';

    $('body').prepend(CAPTURE_UI);
    $('body').on('click', 'button#screen-capture', captureScreen);

    function captureScreen(e) {
        e.preventDefault();

        $.get(SERVER_URL).then((res) => {
            console.log('[INFO] Response', res);
        }).catch((err) => {
            console.log('[ERROR] Error', err);
        });
    }

});