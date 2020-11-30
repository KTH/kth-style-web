import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Alerts</h1>
      <p>
        Read the guidelines for the use of alerts in the{' '}
        <a
          href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/alerts-och-
tooltips-1.952153"
        >
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <CodeSnippet
        snippet={`<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>

<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>

<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>`}
      />
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
