const path = require('path');

module.exports = {
    entry: './src/main.js',  /* точка входа */
    output: {               
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'source-map'   /* карты исходников */
};
