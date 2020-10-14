/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

const ReactDOMServer = require('react-dom/server')

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
    applicationStore.setBrowserConfig(browserConfig)
    applicationStore.setPaths(paths)
    applicationStore.setCurrentUrl(req.originalUrl)

    await _fillApplicationStoreOnServerSide({ applicationStore, query: req.query })

    const compressedStoreCode = getCompressedStoreCode(applicationStore)
    const location = req.url
    const { uri: basename } = serverConfig.proxyPrefixPath
    const html = renderStaticPage({ applicationStore, location, basename })

    let breadcrumbsPath = []

    if (req.params.section) {
      const knownSections = {
        basic: 'section_basic',
        components: 'section_components',
        'setup-guide': 'section_setup_guide',
      }

      if (knownSections[req.params.section]) {
        breadcrumbsPath = [
          { label: i18n.message(knownSections[req.params.section]), url: `${basename}/${req.params.section}` },
        ]
      } else {
        throw new Error('Invalid section')
      }
    }

    res.render('react/index', {
      html,
      title: 'KTH Style app',
      compressedStoreCode,
      lang,
      description: 'KTH Style app',
      breadcrumbsPath,
    })
  } catch (err) {
    log.error('Error in getIndex', { error: err })
    next(err)
  }
}

// eslint-disable-next-line no-unused-vars
async function _fillApplicationStoreOnServerSide({ applicationStore, query }) {
  applicationStore.setMessage('Message from style controller!')
}

module.exports = {
  getIndex,
}
