// const dictSearch = require('../src/dict_search');
const request = require('request');

module.exports = function (app, db) {
    app.get('/furi', (req, res) => {
        var query = req.query.sentence;

        var requestObject = {
            app_id : "17124aa915928e232443a7eded9146173febf03ebfc5ba9651851dd77e96cffa",
            sentence: query,
            output_type: "hiragana"
        };
      
        request.post('https://labs.goo.ne.jp/api/hiragana', 
            { json: requestObject }, (error, response, result) => {
                if (!error && response.statusCode == 200) {
                    res.send(result);
                } else {
                    console.log(response.statusCode + " : " + error)
                }
            });
    });
};


