// Vue的目录结构
const vueSidebar = {
    title: 'Vue',
    collapsable: false,
    children: [
        '/vue/',
        '/vue/test1',
        '/vue/test2',
    ]
}

// webpack目录结构
const webpackSidebar = {
    title: 'Webpack',
    collapsable: false,
    children: [
        '/webpack/',
        '/webpack/test1',
        '/webpack/test2',
    ]
}

module.exports = {
    vueSidebar,
    webpackSidebar
}