const dictRoutes = require('./dict_routes');
const furiRoutes = require('./furi_routes');
module.exports = function(app, db) {
    dictRoutes(app, db);
    furiRoutes(app, db);
};