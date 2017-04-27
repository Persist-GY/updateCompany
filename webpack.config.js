const webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: __dirname+'/dist',
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}