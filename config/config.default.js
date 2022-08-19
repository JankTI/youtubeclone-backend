/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660666376390_6052'

  // add your middleware config here
  config.middleware = ['errorHandler']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  config.jwt = {
    secret: '5fe344f9-686b-433f-b0d8-94927f0fab49',
    expiresIn: '1d',
  }

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/youtube-clone',
      options: { useUnifiedTopology: true },
      plugins: [],
    },
  }

  config.security = {
    csrf: {
      enable: false,
    },
  }

  config.cors = {
    origin: '*',
  }

  return {
    ...config,
    ...userConfig,
  }
}
