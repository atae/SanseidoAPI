const dictSearch = require('../src/dict_search');

module.exports = function (app, db) {
    app.get('/dict', (req, res) => {
        var query = req.query.searchTerm;
        var result = dictSearch(query);
        res.send(result);
    })
};