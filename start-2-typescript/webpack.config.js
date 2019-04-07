const path = require('path')


module.exports = {
    entry: path.resolve(__dirname, "src/main.ts"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                use: [{
                    loader: 'tslint-loader',
                    options: {
                        // allowTsInNodeModules: true
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        // will be used when search import
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: 'development',
    target: 'electron-renderer'
}
