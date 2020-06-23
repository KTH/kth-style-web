import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'

export const Main = props => {
  return (
    <main role="main" id="mainContent" className="mainContent">
      <h1>Modaler</h1>
      <p>Modaler ... </p>
    </main>
  )
}

export default inject('styleStore')(
  observer(({ styleStore }) => {
    const { message } = styleStore

    return (
      <Fragment>
        <NavBar />
        <Main message={message} />
      </Fragment>
    )
  })
)
