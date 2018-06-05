const dictRoutes = require('./dict_routes');

module.exports = function(app, db) {
    dictRoutes(app, db);

};