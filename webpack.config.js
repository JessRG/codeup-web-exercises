// for resolving the absolute path to our project
// necessary for webpack
const path = require('path');

module.exports = {
    // where our app "starts"
    entry: './js/index.js',
    // where to put the transpiled javascript
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'node-main.js'
    },

    // babel config
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    // allows us to see how the transpiled js relates to the untranspiled js
    devtool: 'source-map'
};