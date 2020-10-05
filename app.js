'use strict';
const Hapi   = require('hapi');
const Server = new Hapi.Server();
const Hello  = require('./lib/hello');

Server.connection({ port: 3000 });

Server.route({
    method: 'GET',
    path: '/hello/{user}',
    handler: function (request, reply) {
	console.log("new");
        const result = Hello(decodeURIComponent(request.params.user));
        reply(result);
    }
});


// don't start server if this file was required

if (!module.parent) {

    Server.start((err) => {

        if (err) {
            throw err;
        }
        console.log(`Server running at: ${Server.info.uri}`);
    });
}

module.exports = Server;


