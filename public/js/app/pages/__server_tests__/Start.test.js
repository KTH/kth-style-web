import React from 'react'
import ReactDomServer from 'react-dom/server'
import { Main } from '../Start'

test('Main renders', () => {
  ReactDomServer.renderToString(<Main />)
})
