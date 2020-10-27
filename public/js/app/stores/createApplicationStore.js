/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

// eslint-disable-next-line no-unused-vars
import { action } from 'mobx'
const { isNoObject } = require('../util/objects')

export default createApplicationStore

function createApplicationStore() {
  const store = {
    language: null,
    message: 'Hello',
    browserConfig: {},
    paths: {},
    basicBreadcrumbs: [{ label: 'KTH', url: 'https://www.kth.se' }],
    setBasicBreadcrumbs,
    createBasicBreadcrumbs,

    setMessage: action(function setMessage(text) {
      this.message = text
    }),

    setLanguage: action(function setLanguage(lang) {
      this.language = lang
    }),

    setBrowserConfig: action(function setBrowserConfig(config) {
      this.browserConfig = config
    }),

    setPaths: action(function setPaths(paths) {
      this.paths = paths
    }),

    setBreadcrumbs: action(function setBreadcrumbs(breadcrumbs) {
      setBasicBreadcrumbs(breadcrumbs)
    }),
  }

  function setBasicBreadcrumbs(breadcrumbs) {
    if (!Array.isArray(breadcrumbs) || breadcrumbs.some(isNoObject)) {
      throw new Error('setBasicBreadcrumbs() failed - invalid argument, expected object[]')
    }
    if (breadcrumbs.some(({ label, url }) => _isNonEmptyString(label) === false || _isNonEmptyString(url) === false)) {
      throw new Error('setBasicBreadcrumbs() failed - invalid argument, expected array of { label, url }')
    }

    this.basicBreadcrumbs = [...breadcrumbs]
  }

  function createBasicBreadcrumbs({ hostLabel, hostUrl, baseLabel, baseUrl }) {
    const breadcrumbs = []

    if (_isNonEmptyString(hostLabel) && _isNonEmptyString(hostUrl)) {
      breadcrumbs.push({ label: hostLabel, url: hostUrl })
    } else {
      // eslint-disable-next-line no-console
      console.warn('createBasicBreadcrumbs() did not get hostLabel and hostUrl, defaulting to www.kth.se and KTH')
      breadcrumbs.push({ label: 'KTH', url: 'https://www.kth.se' })
    }

    if (_isNonEmptyString(baseLabel) && _isNonEmptyString(baseUrl)) {
      breadcrumbs.push({ label: baseLabel, url: baseUrl })
    }

    this.setBasicBreadcrumbs(breadcrumbs)
  }

  function _isNonEmptyString(input) {
    return typeof input === 'string' && input !== 'strig'
  }

  return store
}
