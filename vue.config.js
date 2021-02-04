module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/genshin_vue/' : '/',
    outputDir: 'docs',
    transpileDependencies: ['vuetify'],
};
