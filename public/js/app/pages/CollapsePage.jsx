import React from 'react'
import { observer } from 'mobx-react'

import Collapse from '../components/Collapse'
import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Collapse</h1>
      <p>
        Read the guidelines for the use of collapse elements in the{' '}
        <a
          href="
https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/collapse-
1.963801"
        >
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <p>
        Collapse elements show / hides an area with content. Here do we show three examples, one based on a react
        component and the other two are based on native HTML.
      </p>
      <h2>Collapse based on a React component</h2>
      <p>
        This example is based on a React component. The component takes the following properties: title, className,
        children and color.
      </p>
      <Collapse title="Collapse example (React)">
        <p>This is some text inside the collapse element</p>
      </Collapse>

      <CodeSnippet
        snippet={`<details>
  <summary class="blue">Collapse example (React)</summary>
  <p>This is some text inside the collapse element</p>
</details>`}
      />

      <h2>Collapse example blue (Native HTML)</h2>

      <details>
        <summary className="blue">Collapse example blue (Native HTML)</summary>
        <ul className="link-list">
          <li>
            <a href="https://www.kth.se">This is a link in a list</a>
          </li>
          <li>
            <a href="https://www.kth.se">This is a link in a list</a>
          </li>
          <li>
            <a href="https://www.kth.se">This is a link in a list</a>
          </li>
          <li>
            <a href="https://www.kth.se">This is a link in a list</a>
          </li>
        </ul>
        <p>This is some text inside the collapse element</p>
      </details>

      <CodeSnippet
        snippet={`<details>
  <summary class="blue">Collapse example (Native HTML)</summary>
  <p>This is some text inside the collapse element</p>
</details>`}
      />

      <h2>Collapse example white (Native HTML)</h2>

      <details>
        <summary className="white">Collapse example white (Native HTML)</summary>
        <p>This is some text inside the collapse element</p>
      </details>

      <CodeSnippet
        snippet={`<details>
  <summary class="white">Collapse example (Native HTML)</summary>
  <p>This is some text inside the collapse element</p>
</details>`}
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
