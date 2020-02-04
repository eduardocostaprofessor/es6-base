let path = require('path')
module.exports = {
    entry : ["@babel/polyfill", "./src/main.js"],//arquivo de entrada
    output : {//arquivo de saída
        path: path.join(__dirname, '/public') ,
        filename : "bundle.js",
    }, 
    devServer : {//onde o servidor será montado
        contentBase: path.join(__dirname, '/public') 
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                }
            }
        ]
    }
}