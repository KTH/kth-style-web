/**
 *
 *     Common settings for server and browser
 *
 * **************************************************
 * * WARNING! Never access any secrets in this file *
 * **************************************************
 *
 */
const { getEnv, devDefaults } = require('kth-node-configuration')
const { safeGet } = require('safe-utils')

const devPort = devDefaults(3000)
const devUrl = devDefaults('http://localhost:' + devPort)
// const devSsl = devDefaults(false)

const devPrefixPath = devDefaults('/style')

module.exports = {
  // Url to web server host
  hostUrl: getEnv('SERVER_HOST_URL', devUrl),
  // useSsl: safeGet(() => getEnv('SERVER_SSL', devSsl + '').toLowerCase() === 'true'),
  port: getEnv('SERVER_PORT', devPort),
  // The proxy prefix path if the application is proxied. E.g /places
  proxyPrefixPath: {
    uri: getEnv('SERVICE_PUBLISH', devPrefixPath),
  },
}
