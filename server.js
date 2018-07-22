var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    hot: true,
    stats: {
        colors: true
    }
}).listen(3000, 'localhost', function(err){
    if (err) {
        console.error(err);
    }

    console.log('listening at localhost:3000');
})