var expressions = require('../../utils/processed/large_term_bank_expressions_');
var readings = require('../../utils/processed/large_term_bank_readings_');
var fs = require('fs');


module.exports = function(query) {
    var searchResults = [];
    var seenIds = new Set()
    var expressionsObject = expressions;
    var readingsObject = readings;


    // search by expression
    var expressionsResults = expressionsObject[query]
    if (expressionsResults) {
        expressionsResults.forEach(function(result, index) {
            if (!seenIds.has(result["sequence"])) {
                seenIds.add(result["sequence"])
                searchResults.push(result)
            }
        })
    }

    //search by readings
    var readingsResults = readingsObject[query]
    if (readingsResults) {
        readingsResults.forEach(function (result, index) {
            if (!seenIds.has(result["sequence"])) {
                seenIds.add(result["sequence"])
                searchResults.push(result)
            }
        })
    }

    return searchResults;
    
}