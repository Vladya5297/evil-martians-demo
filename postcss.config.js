module.exports = {
    plugins: [
        require('postcss-import')({path: ['./src/utils/mixins']}),
        require('postcss-mixins'),
    ]
}
