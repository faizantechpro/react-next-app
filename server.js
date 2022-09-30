const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));


app.get('*', (req, res) => {
    console.log("req.url ", req.url)
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(9010, "0.0.0.0", () => {
    console.log('UI is up!', 9010);
});
