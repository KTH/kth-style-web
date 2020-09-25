import React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Riktlinjer för användbarhet och tillgänglighet</h1>
      <p>
        Som utvecklare behöver behöver du ta del av de riktlinjer som först ger en övergripande förståelse av
        användbarhet och tillgänglighet för att sedan gå in på riktlinjer för ett specifikt område som t.ex.
        information, återkoppling eller liknade.{' '}
      </p>
      <p>
        För varje område får du veta varför du ska informera / ge återkoppling, när du ska göra det (du får t. e.x hjälp
        att välja vilken informationskomponent du ska använda för att uppnå vad) och övergripande (hur du informerar /
        ger återkoppling). För varje komponent listas sedan komponenten, kod och UX riktlinjer specifika för
        komponenten.{' '}
      </p>
      <p>
        På KTH:s Intranät finns detta beskrivet i det vi kallar:{' '}
        <a href="https://intra.kth.se/ita/tjansteutbud/style" alt="KTH Style Guide på Intranätet">
          KTH Style Guide
        </a>
      </p>
    </main>
  )
}

export default observer(() => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  )
})
