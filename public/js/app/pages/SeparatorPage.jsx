import React from 'react'
import { observer } from 'mobx-react'

export const Main = () => {
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
      <Main />
    </>
  )
})
