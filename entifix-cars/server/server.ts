import http = require('http');
import { App } from './app';

var port = 3000;
var application = new App(port);
var server = http.createServer( application.expressApp );

server.listen(port, ()=>{
    console.log('Server listening on port:' + port);
});

export { server, application };


