const { resolve } = require("path")

module.exports = {
  lintOnSave: false,


  chainWebpack(config) {

    config.module
      .rule('svg-sprite')//规则命名
      .test(/\.svg$/) //文件命匹配该正则
      .include.add(resolve('src/assets/icons')).end() //规则使用范围
      .use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({
        extract: false,
        // symbolId: 'icon-[name]'
      })
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])

    config.module.rule('svg').exclude.add(resolve('src/assets/icons'))

  }
}
