const express = require('express');
const https = require('https');
const vasttrafik = require('./vasttrafik.js');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.get('/token', (req, res) => {
    authorize(vasttrafik.host, vasttrafik.path, vasttrafik.key, vasttrafik.secret, '1')
        .then((token) => res.send(token));
});

app.listen(port, () => {
    console.log('Server listening to port %d!', port);
});

function authorize(hostname, path, key, secret, scope) {
    return new Promise((resolve, reject) => {
        const authorization = new Buffer(key + ':' + secret).toString('base64');
        const options = {
            hostname: hostname,
            port: 443,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + authorization
            }
        };

        const body = 'grant_type=client_credentials&scope=' + scope;

        const req = https.request(options, (res) => {
            console.log('STATUS:', res.statusCode);
            console.log('HEADERS:', JSON.stringify(res.headers));

            res.setEncoding('utf8');
            res.on('data', (token) => {
                console.log('BODY:', token);
                resolve(token);
            });
        });

        req.on('error', (e) => {
            console.log('Authorization error:', e.message);
            reject(e);
        });

        req.write(body);
        req.end();
    });
}
