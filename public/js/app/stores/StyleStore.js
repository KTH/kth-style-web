import React from 'react'
import { observable, action, decorate } from 'mobx'

class StyleStore {
  constructor() {
    this.message = 'This is the default string...'
  }

  setMessage(msg) {
    this.message = msg
  }

  setBrowserConfig(config, paths, apiHost, profileBaseUrl) {
    this.browserConfig = config
    this.paths = paths
    this.apiHost = apiHost
    this.profileBaseUrl = profileBaseUrl
  }

  SSRsetCookieHeader(cookieHeader) {
    if (typeof window === 'undefined') {
      this.cookieHeader = cookieHeader || ''
    }
  }

  doSetLanguage(lang) {
    this.language = lang
  }

  initializeStore(storeName) {
    const store = this

    if (typeof window !== 'undefined' && window.__initialState__ && window.__initialState__[storeName]) {
      const tmp = JSON.parse(decodeURIComponent(window.__initialState__[storeName]))

      Object.keys(tmp).map(key => {
        store[key] = tmp[key]
        delete tmp[key]
      })

      // Just a nice helper message
      if (Object.keys(window.__initialState__).length === 0) {
        window.__initialState__ = 'Mobx store state initialized'
      }
    }
  }
}

decorate(StyleStore, {
  message: observable,
  setMessage: action,
  setBrowserConfig: action,
  doSetLanguage: action
})
const styleStore = new StyleStore()
const styleContext = React.createContext(styleStore)

export { styleStore, styleContext }
