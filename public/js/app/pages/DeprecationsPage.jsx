/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { observer } from 'mobx-react'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Deprecated</h1>
      <p>
        This page contains information regarding what's deprecated and will be removed i future versions in KTH Styel.
        E.g what we should stop use or change for other components or code.
      </p>
      <p>
        The deprecated code will work until the next major release of KTH Style is released. We will also inform each
        team at the IT department in advance. By doing this we will get a controlled phase out of parts that should not
        be used any more.
      </p>

      <h2>Major release 6.0.0</h2>
      <p>
        This major will include the following chages which include breaking changes and requires an overview or action.
      </p>
      <ul className="deprecatedList">
        <li>
          Collapse with button or achor tags will not be supported as . Styling for these variants is phased out and is
          replaces by styling for details and summary tags instead. Example code can be seen here::{' '}
          <a href="/style/components/collapse" alt="Exempel på Collapse-komponent">
            Collapse componet exemple
          </a>
        </li>
        <li>
          The following icons are phased out from KTH Style:
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
