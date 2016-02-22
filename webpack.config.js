module.exports = {
    entry: [
        // from
        './src/index.js'
    ],
    output: {
        // to
        path: __dirname,
        filename: 'app/js/main.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};