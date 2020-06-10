const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

module.exports = withCSS({
    cssLoaderOptions: {
        url: false,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]',
                },
            },
        });
        return config;
    },
});

if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {};
}

module.exports = withLess(
    withSass({
        lessLoaderOptions: {
            javascriptEnabled: true,
        },
    })
);
