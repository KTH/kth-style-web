import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../TabsPage'

test('Tabs page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Tabs page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="mainContent"
      >
        <h1>
          Tabs
        </h1>
        <div
          class="itemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="Tabs"
            >
              <div
                class="tab-bar-container row"
              >
                <div
                  class="col"
                >
                  <ul
                    class="nav nav-tabs"
                    role="tablist"
                  >
                    <li
                      class="nav-item"
                      role="presentation"
                    >
                      <a
                        class="nav-link active show"
                        href="#"
                        role="tab"
                      >
                        Tab1
                      </a>
                    </li>
                    <li
                      class="nav-item"
                      role="presentation"
                    >
                      <a
                        class="nav-link "
                        href="#"
                        role="tab"
                      >
                        Tab2
                      </a>
                    </li>
                    <li
                      class="nav-item"
                      role="presentation"
                    >
                      <a
                        class="nav-link "
                        href="#"
                        role="tab"
                      >
                        Tab3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="tab-content"
              >
                <div
                  class="tab-pane fade active show"
                  role="tabpanel"
                >
                  <div
                    class="tab-container"
                  >
                    Lorem Ipsum
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  role="tabpanel"
                >
                  <div
                    class="tab-container"
                  >
                    Lorem Ipsum 2
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  role="tabpanel"
                >
                  <div
                    class="tab-container"
                  >
                    Lorem Ipsum 3
                  </div>
                </div>
              </div>
            </div>
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
                    &lt;div class="tab-bar-container row"&gt;
      &lt;div class="col"&gt;
        &lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;
          &lt;li class="nav-item"&gt;
            &lt;a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"&gt;Home&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="nav-item"&gt;
            &lt;a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"&gt;Profile&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="nav-item"&gt;
            &lt;a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"&gt;Contact&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="tab-content" id="myTabContent"&gt;
      &lt;div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"&gt;...&lt;/div&gt;
      &lt;div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"&gt;...&lt;/div&gt;
      &lt;div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"&gt;...&lt;/div&gt;
    &lt;/div&gt;
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
          </div>
        </div>
      </div>
    </div>
  `)
})
