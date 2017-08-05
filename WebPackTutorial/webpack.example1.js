const path = require('path');

module.exports = {
    entry: './example1/app.js',    
    output: {
        path: path.resolve(__dirname, 'example1/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "example1"),
        openPage: './example1/index.html',
        port: 3001
    }
}