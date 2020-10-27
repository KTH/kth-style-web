/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { observer } from 'mobx-react'

export const Main = () => {
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
      <ul className="deprecatedList">
        <li>
          Collapse kommer inte stödja uppbyggnad med button eller a-tag längre. Styling för dessa varianter utgår och
          ersätts av styling för details och summary istället. Exempel kan ses här:{' '}
          <a href="/style/components/collapse" alt="Exempel på Collapse-komponent">
            Collapse-exempel
          </a>
        </li>
        <li>
          Följande ikoner utgår ur KTH Style:
          <ul>
            <li>back-link-pill.svg</li>
            <li>back-link.svg</li>
            <li>white-arrow.svg</li>
            <li>clock_grey_25.svg</li>
            <li>clock_grey_50.svg</li>
            <li>clock_grey_100.svg</li>
            <li>Clock_three_quarter.svg</li>
            <li>canvas.svg</li>
            <li>icon-from-canvas-blue.svg</li>
            <li>pill-back-white.svg</li>
            <li>pill-back.svg</li>
            <li>select-arrow.png</li>
          </ul>
        </li>
      </ul>
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
