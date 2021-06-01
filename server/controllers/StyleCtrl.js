/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

const log = require('kth-node-log')
const language = require('kth-node-web-common/lib/language')

const i18n = require('../../i18n')

// eslint-disable-next-line no-unused-vars
const paths = require('kth-node-express-routing').getPaths()
const serverConfig = require('../configuration').server
const browserConfig = require('../configuration').browser

const { getServerSideFunctions } = require('../utils/serverSideRendering')

async function getIndex(req, res, next) {
  try {
    const lang = language.getLanguage(res) || 'sv'

    const { createStore, getCompressedStoreCode, renderStaticPage } = getServerSideFunctions()

    const applicationStore = createStore()
    applicationStore.setLanguage(lang)

    await _fillApplicationStoreOnServerSide({ applicationStore, query: req.query, lang })

    const compressedStoreCode = getCompressedStoreCode(applicationStore)
    const location = req.url
    const { uri: basename } = serverConfig.proxyPrefixPath
    const html = renderStaticPage({ applicationStore, location, basename })

    res.render('react/index', {
      html,
      title: 'KTH Style',
      compressedStoreCode,
      lang,
      description: 'KTH Style',
      toolbarUrl: serverConfig.toolbar.url,
    })
  } catch (err) {
    log.error('Error in getIndex', { error: err })
    next(err)
  }
}

// eslint-disable-next-line no-unused-vars
async function _fillApplicationStoreOnServerSide({ applicationStore, query, lang }) {
  applicationStore.setBrowserConfig(browserConfig)
  applicationStore.setPaths(paths)

  applicationStore.createBasicBreadcrumbs({
    hostLabel: i18n.message('host_name', lang),
    hostUrl: serverConfig.hostUrl,
    baseLabel: i18n.message('site_name', lang),
    baseUrl: serverConfig.proxyPrefixPath.uri,
  })
}

module.exports = {
  getIndex,
}
