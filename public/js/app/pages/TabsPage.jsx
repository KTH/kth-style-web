import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'
import Tabs from '../components/Tabs'

export const Main = props => {
  const itemList = [
    { tab: 'Tab1', content: 'Lorem Ipsum' },
    { tab: 'Tab2', content: 'Lorem Ipsum 2' },
    { tab: 'Tab3', content: 'Lorem Ipsum 3' },
  ]

  return (
    <main id="mainContent" className="mainContent">
      <h1>Tabs</h1>
      <p>
        Read the guidelines for the use of tabs in the{' '}
        <a
          href="
https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/tabbar-
1.963802"
        >
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <div className="itemContainer">
        <div className="itemBox">
          <Tabs items={itemList} defaultTab={0} />
          <CodeSnippet
            snippet={`<div class="tab-bar-container row">
  <div class="col">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
      </li>
    </ul>
  </div>
</div>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>`}
          />
        </div>
      </div>
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
