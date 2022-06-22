const path = require('path');

module.exports = {
    entry: './src/main.js',                                 /* точка входа */
    output: {               
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'source-map',                                  /* карты исходников */
    devServer: {
        hot: false
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'public'),     /* откуда смотреть исходники */
    //     watchContentBase: true                              /* перезагружать страницу при изменении? */
    // }
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: ['babel-loader']
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
            }
        ]
    }
};
