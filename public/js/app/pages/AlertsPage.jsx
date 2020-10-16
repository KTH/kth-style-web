import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Alerts</h1>
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
