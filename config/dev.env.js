'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://123.206.64.248:5000"',
  // BASE_API: '"https://easy-mock.com/mock/5add54727b9bf744ede66c2d/vueAdmin"',
   //BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
})
