import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../FormsPage'

test('Forms page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Forms page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Forms
        </h1>
        <div
          class="itemContainer"
        >
          <div
            class="form"
          >
            <h2>
              Form controls
            </h2>
            <form>
              <div
                class="form-group"
              >
                <label
                  class="form-control-label"
                  for="exampleInputText1"
                >
                  Text input
                </label>
                <input
                  class="form-control"
                  id="exampleInputText1"
                  type="text"
                />
              </div>
            </form>
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
                    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-control-label" for="yourElementId"&gt;Text input&lt;/label&gt;
        &lt;input type="text" class="form-control" id="yourElementId"&gt;&lt;/input&gt;
      &lt;/div&gt;
    &lt;/form&gt;
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
            <form>
              <div
                class="form-group"
              >
                <label
                  class="form-control-label"
                  for="exampleInputPassword1"
                >
                  Password
                </label>
                <input
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </form>
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
                    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-control-label" for="yourElementId"&gt;Password&lt;/label&gt;
        &lt;input type="password" class="form-control" id="yourElementId" placeholder="Password"&gt;&lt;/input&gt;
      &lt;/div&gt;
    &lt;/form&gt;
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
            <form>
              <div
                class="form-group"
              >
                <label
                  class="form-control-label"
                  for="exampleFormControlInput1"
                >
                  Email address
                </label>
                <input
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
            </form>
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
                    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-control-label" for="yourElementId"&gt;Email address&lt;/label&gt;
        &lt;input type="email" class="form-control" id="yourElementId" placeholder="name@example.com"&gt;&lt;/input&gt;
      &lt;/div&gt;
    &lt;/form&gt;
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
            <form>
              <div
                class="form-group"
              >
                <label
                  class="form-control-label"
                  for="exampleFormControlSelect1"
                >
                  Select
                </label>
                <div
                  class="form-select form-group"
                >
                  <div
                    class="select-wrapper"
                  >
                    <select
                      aria-label="Välj något"
                      class="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option
                        selected=""
                        value="undefined"
                      >
                        Välj...
                      </option>
                      <option>
                        1
                      </option>
                      <option>
                        2
                      </option>
                      <option>
                        3
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
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
                    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-control-label" for="exampleFormControlSelect1"&gt;Example select&lt;/label&gt;
        &lt;div class="form-select form-group"&gt;
          &lt;div class="select-wrapper"&gt;
            &lt;select class="form-control" id="exampleFormControlSelect1" aria-label="Välj något"&gt;
              &lt;option selected&gt;Välj...&lt;/option&gt;
              &lt;option&gt;1&lt;/option&gt;
              &lt;option&gt;2&lt;/option&gt;
              &lt;option&gt;3&lt;/option&gt;
            &lt;/select&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
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
            <form>
              <div
                class="form-group"
              >
                <label
                  class="form-control-label"
                  for="exampleFormControlTextarea1"
                >
                  Textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
            </form>
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
                    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-control-label" for="yourElementId"&gt;Example textarea&lt;/label&gt;
        &lt;textarea class="form-control" id="yourElementId" rows="3"&gt;&lt;/textarea&gt;
      &lt;/div&gt;
    &lt;/form&gt;
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
            <h2>
              Checkboxes
            </h2>
            <form>
              <div
                class="form-check form-group"
              >
                <input
                  class="form-check-input"
                  id="exampleCheck1"
                  type="checkbox"
                />
                <label
                  class="form-control-label"
                  for="exampleCheck1"
                >
                  Check me out
                </label>
              </div>
            </form>
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
                    &lt;form&gt;
      &lt;div class="form-check form-group"&gt;
        &lt;input type="checkbox" class="form-check-input" id="exampleCheck1"&gt;&lt;/input&gt;
        &lt;label class="form-control-label" for="exampleCheck1"&gt;Check me out&lt;/label&gt;
      &lt;/div&gt;
    &lt;/form&gt;
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
            <h2>
              Radio buttons
            </h2>
            <form>
              <div
                class="form-check form-group"
              >
                <input
                  class="form-check-input"
                  id="exampleRadios1"
                  name="example2"
                  type="radio"
                  value="Option 1"
                />
                <label
                  class="form-control-label"
                  for="exampleRadios1"
                >
                  Option 1
                </label>
              </div>
              <div
                class="form-check form-group"
              >
                <input
                  class="form-check-input"
                  id="exampleRadios2"
                  name="example2"
                  type="radio"
                  value="Option 2"
                />
                <label
                  class="form-control-label"
                  for="exampleRadios2"
                >
                  Option 2
                </label>
              </div>
              <div
                class="form-check form-group"
              >
                <input
                  class="form-check-input"
                  id="exampleRadios3"
                  name="example2"
                  type="radio"
                  value="Option 3"
                />
                <label
                  class="form-control-label"
                  for="exampleRadios3"
                >
                  Option 3
                </label>
              </div>
            </form>
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
                    &lt;form&gt;
      &lt;div class="form-check form-group"&gt;
        &lt;input type="radio" class="form-check-input" name="example2" value="Option 1" id="exampleRadios1"/&gt;
        &lt;label class="form-control-label" for="exampleRadios1"&gt;Option 1&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="form-check form-group"&gt;
        &lt;input type="radio" class="form-check-input" name="example2" value="Option 2" id="exampleRadios2"/&gt;
        &lt;label class="form-control-label" for="exampleRadios2"&gt;Option 2&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="form-check form-group"&gt;
        &lt;input type="radio" class="form-check-input" name="example2" value="Option 3" id="exampleRadios3"/&gt;
        &lt;label class="form-control-label" for="exampleRadios3"&gt;Option 3&lt;/label&gt;
      &lt;/div&gt;
    &lt;/form&gt;
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
            <h2>
              Group related elements with fieldset and legend tags
            </h2>
            <form>
              <fieldset>
                <legend>
                  Choose one of the following options
                </legend>
                <div
                  class="form-check form-group"
                >
                  <input
                    class="form-check-input"
                    id="radio1"
                    name="example3"
                    type="radio"
                    value="Option 1"
                  />
                  <label
                    class="form-control-label"
                    for="radio1"
                  >
                    Option 1
                  </label>
                </div>
                <div
                  class="form-check form-group"
                >
                  <input
                    class="form-check-input"
                    id="radio2"
                    name="example3"
                    type="radio"
                    value="Option 2"
                  />
                  <label
                    class="form-control-label"
                    for="radio2"
                  >
                    Option 2
                  </label>
                </div>
                <div
                  class="form-check form-group"
                >
                  <input
                    class="form-check-input"
                    id="radio3"
                    name="example3"
                    type="radio"
                    value="Option 3"
                  />
                  <label
                    class="form-control-label"
                    for="radio3"
                  >
                    Option 3
                  </label>
                </div>
              </fieldset>
            </form>
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
                    &lt;form&gt;
      &lt;fieldset&gt;
        &lt;legend&gt;Choose one of the following options&lt;/legend&gt;
        &lt;div class="form-check form-group"&gt;
          &lt;input type="radio" class="form-check-input" name="example3" value="Option 1" id="radio1"/&gt;
          &lt;label class="form-control-label" for="radio1"&gt;Option 1&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-group"&gt;
          &lt;input type="radio" class="form-check-input" name="example3" value="Option 2" id="radio2"/&gt;
          &lt;label class="form-control-label" for="radio2"&gt;Option 2&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-group"&gt;
          &lt;input type="radio" class="form-check-input" name="example3" value="Option 3" id="radio3"/&gt;
          &lt;label class="form-control-label" for="radio3"&gt;Option 3&lt;/label&gt;
        &lt;/div&gt;
      &lt;/fieldset&gt;
    &lt;/form&gt;
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
        </div>
      </main>
    </div>
  `)
})
