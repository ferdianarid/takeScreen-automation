// vue.config.js
module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: 'http://119.8.175.1:5050/data'
    }
};