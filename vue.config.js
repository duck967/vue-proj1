// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  transpileDependencies: true,
  devServer:{
    //disableHostCheck: true
    allowedHosts: 'all'
   }
}