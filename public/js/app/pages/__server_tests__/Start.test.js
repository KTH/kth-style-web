import React from 'react'
import ReactDomServer from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { Start } from '../Start'

test('Start renders', () => {
  ReactDomServer.renderToString(
    <MemoryRouter>
      <Start />
    </MemoryRouter>
  )
})
