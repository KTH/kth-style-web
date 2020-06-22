import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../GuidelinesPage'

test('Guidelines page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Guidelines page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="mainContent"
      >
        <h1>
          Riktlinjer för användbarhet och tillgänglighet
        </h1>
        <p>
          Som utvecklare behöver behöver du ta del av de riktlinjer som först ger en övergripande förståelse av användbarhet och tillgänglighet för att sedan gå in på riktlinjer för ett specifikt område som t.ex. information, återkoppling eller liknade.
           
        </p>
        <p>
          För varje område får du veta varför du ska informera / ge återkoppling, när du ska göra det (du får t. e.x hjälp att välja vilken informationskomponent du ska använda för att uppnå vad) och övergripande (hur du informerar / ger återkoppling). För varje komponent listas sedan komponenten, kod och UX riktlinjer specifika för komponenten.
           
        </p>
        <p>
          På KTH:s Intranät finns detta beskrivet i det vi kallar:
           
          <a
            alt="KTH Style Guide på Intranätet"
            href="https://intra.kth.se/ita/tjansteutbud/style"
          >
            KTH Style Guide
          </a>
        </p>
      </div>
    </div>
  `)
})
