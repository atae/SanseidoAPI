var fs = require('fs');
var path = require('path');
var from = "./sanseido";
var to = "./processed";

fs.readdir( from, function(err, files) {
    if (err) {
        console.error("Could no list the director.", err);
        process.exit(1);
    }

    files.forEach(function(file, index) {
        var filename = "sanseido/term_bank_" + (index) + ".json";
        if (index == 0) {
            filename = "sanseido/index.json";
        }
        var fileArray = fs.readFileSync(filename);
        var jsonArray = JSON.parse(fileArray);        

        var readingsJSON = {}
        var expressionsJSON = {}

        if (index != 0) {
        jsonArray.forEach(function(array, index){
            var dictionaryTemplate = {
                expression: array[0],
                reading: array[1],
                definitionTags: array[2],
                rules: array[3],
                score: array[4],
                glossary: array[5],
                sequence: array[6],
                termTags: array[7]
            };

            if (readingsJSON.hasOwnProperty(array[1])) {
                readingsJSON[array[1]].push(dictionaryTemplate)
            } else {
                readingsJSON[array[1]] = [dictionaryTemplate]
            }

            if (expressionsJSON.hasOwnProperty(array[0])) {
                expressionsJSON[array[0]].push(dictionaryTemplate)
            } else {
                expressionsJSON[array[0]] = [dictionaryTemplate]
            }


        });
    }
        var readings_filename = "processed/term_bank_readings_" + (index) + ".json"
        var expressions_filename = "processed/term_bank_expressions_" + (index) + ".json"

        fs.writeFileSync(readings_filename, JSON.stringify(readingsJSON, null, 2), 'utf-8')
        fs.writeFileSync(expressions_filename, JSON.stringify(expressionsJSON, null, 2), 'utf-8')

        
    });

});



