import React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Avskiljare</h1>
      <p>Avskiljare mellan element ... </p>
    </main>
  )
}

export default observer(() => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  )
})
