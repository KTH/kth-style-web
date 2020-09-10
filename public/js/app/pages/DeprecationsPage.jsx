import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import NavBar from '../components/NavBar'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Deprikerat</h1>
      <p>
        Denna sida innehåller information om sådant som på sikt kommer att fasas ut (är deprikerat) i KTH Style. Alltså,
        det vi ska sluta använda helt eller byta ut mot annan komponent eller kod.
      </p>
      <p>
        Den deprikerade koden kommer fungera tills nästa "major"-release av KTH Style släpps och kommer föregås av
        information till respektive team på IT-avdelningen. På detta sett får vi en kontrollerad utfasning av sådant som
        inte ska användas längre.
      </p>

      <h2>Kommande major är 6.0.0</h2>
      <p>Nästa major kommer innehålla följade förändringar som innebär någon form av översyn eller åtgärd.</p>
      <ul>
        <li>
          Collapse kommer inte stödja uppbyggnad med button eller a-tag längre. Styling för dessa varianter utgår och
          ersätts av styling för details och summary istället. Exempel kan ses här:{' '}
          <a href="https://app-r.referens.sys.kth.se/style/collapse" alt="Exempel på Collapse-komponent">
            Collapse-exempel
          </a>
        </li>
      </ul>
    </main>
  )
}

export default inject('styleStore')(
  observer(({ styleStore }) => {
    const { message } = styleStore

    return (
      <Fragment>
        <NavBar />
        <Main message={message} />
      </Fragment>
    )
  })
)
