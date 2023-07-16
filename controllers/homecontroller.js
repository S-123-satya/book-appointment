const path = require('path');
const fs = require('fs')

module.exports.getHomeController = (req, res) => {
    res.sendFile(path.join(__dirname, '/..', '/views', '/index.html'))
};

module.exports.postHomeController = (req, res) => {
    console.log(req.body);
    fs.appendFileSync('detail.txt', `${req.body.name} : ${req.body.email}, `)
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
};