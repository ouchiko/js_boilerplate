// Extract text plugin - yet to be working!
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // App Entry Point.
    entry: {
        app: "./src/js/app.js"
    },
    // What are we building this too?
    output: {
        path: __dirname+"/build",
        filename: "[name]@bundle.js"
    },
    // Rules!
    module: {
        rules: [
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
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
    	new ExtractTextPlugin("build/[name]@bundle.css")
	]
};
//
