module.exports = {
    plugins: [
        require('postcss-import')({path: ['./src/utils/mixins']}),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('postcss-mixins'),
    ]
}
