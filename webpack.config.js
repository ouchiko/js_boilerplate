// Extract text plugin - yet to be working!
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // App Entry Point.
    entry: {
        app: "./src/js/app.js",
        //css: "./src/css/app.css"
    },
    // What are we building this too?
    output: {
        path: __dirname+"/build",
        filename: "app@bundle.js"
    },
    // Rules!
    module: {
        // loaders: [
        //     {
        //         test: /\.css$/,
        //         loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        //     }
        // ],
        rules: [
            // Load babel and downgrade to es15 for back browsers.
            {
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            }
        ]
    },
    // Vue.. You don't need this but if you want to run view..
    resolve: {
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    // Testing extract of css to file.
    plugins: [
    //	new ExtractTextPlugin("app.css")
	]
};
//
