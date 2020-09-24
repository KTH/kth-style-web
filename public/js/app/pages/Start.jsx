import React from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>KTH Style Web</h1>
      <h2>Syftet med denna webbplats</h2>
      <p>
        Denna applikation kallas <i>kth-style-web</i> och är ett hjälpmedel för oss som jobbar med utveckling av
        webbapplikationer på KTH. Den bygger sitt utseende och form på paketet{' '}
        <a href="https://github.com/KTH/kth-style/" alt="kth-style-paketet på Github">
          kth-style
        </a>
        . Syftet är att snabba upp utvecklingen, skapa enhetlighet mellan applikationer samt underlätta form- och
        UX-arbete.
      </p>
      <p>
        I menyn hittar du ingångar till formelement som färger och typografi samt form för olika komponenter. Tanken är
        att tillhandahålla det som är gemensamt för de flesta av våra applikationer och alltså inte all färg och form
        för alla tänkbara komponenter och applikationsspecifika delar.{' '}
      </p>
      <h3>Relaterade projekt</h3>
      <p>
        Github:{' '}
        <a href="https://github.com/KTH/kth-style-web/" alt="kth-style-paketet på Github">
          kth-style-web
        </a>
        <br></br>
        Github:{' '}
        <a href="https://github.com/KTH/kth-style/" alt="kth-style-paketet på Github">
          kth-style
        </a>
        <br></br>
        Github:{' '}
        <a href="https://github.com/KTH/kth-style-react-components" alt="kth-style-react-components-paketet på Github">
          kth-style-react-components
        </a>
      </p>
    </main>
  )
}

export default inject('styleStore')(
  observer(({ styleStore }) => {
    const { message } = styleStore

    return (
      <>
        <NavBar />
        <Main message={message} />
      </>
    )
  })
)
