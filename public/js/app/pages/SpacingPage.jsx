import React from 'react'
import { observer } from 'mobx-react'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Structure and layout</h1>
      <p>
        See the{' '}
        <a href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/struktur-och-layout">
          KTH Style guide
        </a>{' '}
        for guidance on how different parts of the pages should look like and what they should contain.
      </p>
      <p>
        The guidelines help you set a proper page layout and structure your content. Here you will find specified size
        of margins and columns, concept for navigation, responsive behavior, and other overall basics on styling web
        aplications at KTH.
      </p>
      <p>And do not miss the parts that concern the elements required for the pages to be accessible!</p>
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
