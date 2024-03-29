'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://127.0.0.1:9095"'
  BASE_API: '"http://43.138.227.193:8082"',
  STATIC_URL: '"http://43.138.227.193:8088/images/"',
  VUE_APP_FAVICON_URL: '"http://43.138.227.193:8088/images/favicon.ico"'
})
