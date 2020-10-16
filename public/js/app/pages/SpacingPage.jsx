import React from 'react'
import { observer } from 'mobx-react'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Avstånd</h1>
      <p>Avstånd mellan olika element ...</p>
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
