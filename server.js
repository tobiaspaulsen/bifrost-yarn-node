const express = require('express');
const fs = require('fs');
const app = express();
app.get('/', (_, res) => res.send('Bifrost test app, installed with yarn classic.'));
app.get('/healthz', (_, res) => res.send(fs.readFileSync('built.txt', 'utf8')));
app.listen(process.env.PORT);
