import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../TypographyPage'

test('Typography page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Typography page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Typografi
        </h1>
        <p>
          Detta är en lista med olika rubriker och varianter på brödtext som finns i KTH-style.
        </p>
        <p>
          Observera att de Sass-mixins som listas endast behöver användas om man vill få detta utseende på något annat än det element som denna är avsedd för (Till exempel så skulle man kunna lägga till
           
          <code>
            p { @include t4; }
          </code>
           i sin Sass för att få h4-stil på en paragraf-tagg). Mixins kan också användas istället för klassnamnen nedan. Inget klassnamn eller mixin krävs för standard-element av typen h1,h2,h3,h4 och p utan endast för vissa varianter av dessa.
        </p>
        <div
          class="itemContainer"
        >
          <div
            class="itemBox typographyItem border"
          >
            <h1
              class="t1"
            >
              H1 - Heading
            </h1>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;h1&gt;&lt;/h1&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                h1 
                { @include t1; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Rubrik nivå 1
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <h2
              class="t2"
            >
              H2 - Heading
            </h2>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;h2&gt;&lt;/h2&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                h2 
                { @include t2; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Rubrik nivå 2
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <h2
              class="t24"
            >
              H2 - Heading
            </h2>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;h2&gt;&lt;/h2&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                h2 
                { @include t24; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Rubrik puffblock bred
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <h3
              class="t3"
            >
              H3 - Heading
            </h3>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;h3&gt;&lt;/h3&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                h3 
                { @include t3; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Rubrik nivå 3 (i artikel)
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <h4
              class="t4"
            >
              H4 - Heading
            </h4>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;h4&gt;&lt;/h4&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                h4 
                { @include t4; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Rubrik nivå 4
                </li>
                <li>
                  Blockrubrik
                </li>
                <li>
                  Rubrik puffblock smal
                </li>
                <li>
                  Menyrubrik
                </li>
                <li>
                  Sitename
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <p
              class="t11"
            >
              P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;p&gt;&lt;/p&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                { @include t11; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Brödtext puff
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <p
              class="t12"
            >
              P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;p class="t12"&gt;&lt;/p&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                p 
                { @include t12; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Brödtext artikel
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <p
              class="t10"
            >
              P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              <strong>
                HTML: 
              </strong>
              <code
                class="language-html"
              >
                &lt;p class="t10"&gt;&lt;/p&gt;
              </code>
            </p>
            <p>
              <strong>
                Sass: 
              </strong>
              <code>
                p 
                { @include t10; }
              </code>
            </p>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Ingress
                </li>
                <li>
                  Megameny
                </li>
                <li>
                  Blockquote
                </li>
              </ul>
            </div>
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <header
              role="presentation"
            >
              <h1
                aria-labelledby="page-heading page-sub-heading"
                id="page-heading"
              >
                Headline
              </h1>
              <p
                aria-hidden="true"
                id="page-sub-heading"
              >
                Subheading that clarifies the main heading
              </p>
            </header>
            <div
              class="code-snippet"
            >
              <div
                class="code-snippet__container"
              >
                <pre>
                  <code
                    class="language-html"
                  >
                    &lt;header role="presentation"&gt;
      &lt;h1 id="page-heading" aria-labelledby="page-heading page-sub-heading"&gt;Headline&lt;/h1&gt;
      &lt;p id="page-sub-heading" aria-hidden="true"&gt;Sub headline&lt;/p&gt;
    &lt;/header&gt;
                  </code>
                </pre>
                <div
                  class="code-snippet__btn-container"
                >
                  <button
                    class="btn"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>
                <strong>
                  Användningsområde: 
                </strong>
              </p>
              <ul>
                <li>
                  Rubrik med nedryckare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  `)
})
