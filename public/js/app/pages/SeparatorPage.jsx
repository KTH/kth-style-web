import React from 'react'
import { observer } from 'mobx-react'
import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  const snippet = `<div className="separator gray" />`
  return (
    <main id="mainContent" className="mainContent">
      <h1>Separators</h1>
      <p>
        Read the guidelines for the use of separators in the{' '}
        <a href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/farger-1.952147">
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>

      <h2>Separator example</h2>
      <p>Below is an example of a separator (gray line) used for separating content in some cases.</p>
      <div className="separator gray" />
      <CodeSnippet snippet={snippet} />
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
