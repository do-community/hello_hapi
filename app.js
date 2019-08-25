'use strict';
const Hapi   = require('hapi');
const Server = new Hapi.Server();

Server.connection({ port: 3000 });

Server.route({
    method: 'GET',
    path: '/hello/{user}',
    handler: function (request, reply) {

        const result = 'test123';
        reply(result);
    }
});

// don't start server if this file was required

if (!module.parent) {

    Server.start((err) => {

        if (err) {
            throw err;
        }
    });
}

module.exports = Server;
