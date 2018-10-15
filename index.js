/* jshint esversion: 6 */

(() => {
    'use strict';

    const IMAGE_EXTENSION = 'png';
    const BASE_FOLDER = 'captures';
    const PORT = 3000;
    const http = require('http');
    const screenshot = require('desktop-screenshot');


    http.createServer(requestHandler).listen(PORT, listenCallback)


    function requestHandler(req, res) {
        let url = req.url;

        if (url === '/favicon.ico') return;

        if (url === '/capture') {
            let filename = `${BASE_FOLDER}/capture - ${generateTimestamp()}.${IMAGE_EXTENSION}`;

            console.log(`\n[INFO] Attempting to save ${filename}`);
            screenshot(filename, handleScreenshot);

            res.end('OK');
        } else {
            console.log(`\n[Error] Invalid path! url: ${url}`);
            res.end('Invalid Endpoint');
        }
    }

    function generateTimestamp() {
        let d = new Date();

        return `${d.getMonth()}-${d.getDate()}-${d.getFullYear()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}`;
    }

    function listenCallback() {
        console.log(`[Start] Server running at http:\\\\localhost:${PORT}`);
    }

    // Screenshot handler


    function handleScreenshot(err, complete) {
        if (err) {
            console.log('\n[Error] Screenshot failed', err);
            return;
        }

        console.log('[INFO] Screenshot saved!');
    }
})();