/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

// eslint-disable-next-line no-unused-vars
import { observable, action } from 'mobx'

export default createApplicationStore

function createApplicationStore() {
  const store = {
    language: null,
    message: 'Hello',
    browserConfig: {},
    paths: {},
    currentUrl: null,
    breadcrumbs: [],

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

    setCurrentUrl: action(function setCurrentUrl(url) {
      this.currentUrl = url
    }),
  }

  return store
}
