'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG:"'dev'",
  HOST:'"http://www.baidu.com"',
  API_ROOT:'"https://gamecfg.com/game_console/public/index.php"'
})