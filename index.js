const  express =  require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');



const server = express();
const compiler = webpack( webpackConfig );
console.log('beach house', webpackConfig.output.path);
const middleware = webpackDevMiddleware ( compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        silent: true,
        stats: 'errors-only',
    } );
server.use(middleware);

server.use(express.static(__dirname + '/public'));

const port = 8080;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});