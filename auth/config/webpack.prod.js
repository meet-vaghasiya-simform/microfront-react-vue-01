const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap',
            },
            shared: require('../package.json').dependencies,
        }),
    ],
};

module.exports = merge(common, prodConfig);