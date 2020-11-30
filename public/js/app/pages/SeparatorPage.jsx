import React from 'react'
import { observer } from 'mobx-react'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Separators</h1>
      <p>...</p>
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
