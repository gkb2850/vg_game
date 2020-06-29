'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST:'"http://test.buxiaosheng.com"',
  // API_ROOT:'"https://game.njjhy.tech/"',
  API_ROOT:'"https://njjhy.tech/game_console/public/index.php"'
})
