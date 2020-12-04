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
          Typography
        </h1>
        <p>
          Read the guidelines for the use of different text formats in the
           
          <a
            href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/rubriker-och-
    brodtext-1.952152"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <p>
          The Sass mixins which is listed below is only needed if you want the styling on a different element than the element here. For example: 
          <code>
            p { @include t4; }
          </code>
           will give the paragraph element the h4 styling. Mixins could also be used instead of the class names below. No classes nor mixins is required for standard elements like h1,h2,h3,h4 and p. Just for some variants of these.
        </p>
        <h2>
          Headings
        </h2>
        <div
          class="itemContainer"
        >
          <div
            class="itemBox typographyItem border"
          >
            <h1
              class="t1"
            >
              H1
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
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="itemBox typographyItem border no-top-pad"
          >
            <h2
              class="t2"
            >
              H2
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
          </div>
          <div
            class="itemBox typographyItem border"
          >
            <h2
              class="t24"
            >
              H2
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
          </div>
          <div
            class="itemBox typographyItem border no-top-pad"
          >
            <h3
              class="t3"
            >
              H3
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
          </div>
          <div
            class="itemBox typographyItem border no-top-pad"
          >
            <h4
              class="t4"
            >
              H4
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
          </div>
          <h2
            class="t2"
          >
            Paragraphs
          </h2>
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
          </div>
        </div>
      </main>
    </div>
  `)
})
