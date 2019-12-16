'use strict'

const api = require('../api')
const log = require('kth-node-log')

const { toJS } = require('mobx')
const ReactDOMServer = require('react-dom/server')
const i18n = require('../../i18n')

function hydrateStores(renderProps) {
  // This assumes that all stores are specified in a root element called Provider
  const outp = {}
  const { props } = renderProps.props.children

  Object.keys(props).map(key => {
    if (typeof props[key].initializeStore === 'function') {
      outp[key] = encodeURIComponent(JSON.stringify(toJS(props[key], true)))
    }
  })

  return outp
}

function _staticRender(context, location) {
  if (process.env.NODE_ENV === 'development') {
    delete require.cache[require.resolve('../../dist/app.js')]
  }

  const { staticRender } = require('../../dist/app.js')

  return staticRender(context, location)
}

async function getIndex(req, res, next) {
  try {
    const context = {}
    const renderProps = _staticRender(context, req.url)

    log.debug(`renderProps ${JSON.stringify(renderProps)}`)
    const { styleStore } = renderProps.props.children.props

    styleStore.setMessage('Hello from store')
    const html = ReactDOMServer.renderToString(renderProps)

    res.render('react/index', {
      html,
      title: 'Style',
      initialState: JSON.stringify(hydrateStores(renderProps)),
      // lang: lang,
      description: 'Style',
      breadcrumbsPath: [
        {
          label: `${i18n.message('page_kth_style_index')}`
        }
      ]
    })
  } catch (err) {
    log.error('Error in getIndex', { error: err })
    next(err)
  }
}

module.exports = {
  getIndex
}
