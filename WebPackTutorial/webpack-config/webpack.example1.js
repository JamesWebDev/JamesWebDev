const path = require('path');

module.exports = {
    entry: './src/example1/app.js',    
    output: {
        path: path.resolve(process.cwd(), 'src/example1/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(process.cwd(), "src/example1"),
        openPage: './src/example1/index.html',
        port: 3001
    }
}