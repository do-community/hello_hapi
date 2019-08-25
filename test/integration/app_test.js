'use strict';
const Code   = require('code');
const Lab    = require('lab');
const lab    = exports.lab = Lab.script();
const Server = require('../../app.js');

lab.experiment('Basic HTTP Tests', () => {

    lab.test('Greets /hello/homer} ', (done) => {

        const options = {
            method: 'GET',
            url: '/hello/Homer'
        };

        Server.inject(options, ( response ) => {

            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result).to.equal('test123');
            done();
        });
    });

    lab.test('Greets /hello/Homer%20Simpson} ', (done) => {

        const options = {
            method: 'GET',
            url: '/hello/Homer%20Simpson'
        };

        Server.inject(options, ( response ) => {

            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result).to.equal('test123');
            done();
        });
    });

});
