const my_routes = require('./routes');

module.exports = function(app,db){
    my_routes(app,db);
};
