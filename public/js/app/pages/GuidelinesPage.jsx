/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { observer } from 'mobx-react'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Guidelines for usability and accessibility</h1>
      <p>
        First of all. When KTH Style is implemented you also need to know when and how its components should be used.
        For this you have to consult the KTH Style guide. It is recommended that you start with the page{' '}
        <a
          href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/design-av-app-
utifran-kth-style-1.1002797"
        >
          Design av app utifrån KTH Style
        </a>{' '}
        and then look further into the guidelines for the specific components. (Information in Swedish on the KTH
        Intranet.)
      </p>
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
