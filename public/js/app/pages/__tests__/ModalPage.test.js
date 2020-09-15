import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../ModalPage'

test('Modal page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Modal page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Modaler
        </h1>
        <h2>
          Modal baserad på React
        </h2>
        <p>
          Denna modal är baserad på vår React-komponent och kräver således React i botten.
        </p>
        <button
          class="btn btn-primary feedback-btn"
          type="button"
        >
          Öppna modalfönster
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="feedbackModalLabel"
          class="modal fade "
          id="feedbackModal"
          role="dialog"
          style="display: none;"
          tabindex="-1"
        >
          <div
            class="modal-dialog modal-mg"
            role="document"
          >
            <div
              class="modal-content"
            >
              <div
                class="modal-header"
              >
                <button
                  aria-label="KEY close_button_label FOR LANGUAGE Swedish DOES NOT EXIST"
                  class="close"
                  type="button"
                >
                  <span
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </button>
                <h3>
                  Titel
                </h3>
              </div>
              <div
                class="modal-body"
              >
                <p>
                  Detta är innehåll i en modal baserad på en React-komponent.
                </p>
              </div>
              <div
                class="modal-footer"
              >
                <button
                  aria-label="Stäng"
                  class="btn btn-secondary"
                  type="button"
                >
                  Stäng
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2>
          Modal baserad på Bootstrap
        </h2>
        <p>
          Denna modal är baserad på Bootstrap och kräver att man har Bootstrap CSS och JS tillgängligt i sitt prjekt.
        </p>
        <p>
          Observera att React-modalens js stör den Bootstrap-baserade så tabbning inte fungerar i detta exempel.
        </p>
        <button
          class="btn btn-primary"
          data-target="#exampleModal"
          data-toggle="modal"
          type="button"
        >
          Öppna modalfönster
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="exampleModalLabel"
          class="modal fade"
          id="exampleModal"
          role="dialog"
          tabindex="-1"
        >
          <div
            class="modal-dialog"
            role="document"
          >
            <div
              class="modal-content"
            >
              <div
                class="modal-header"
              >
                <button
                  aria-label="Close"
                  class="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <span
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </button>
                <h3
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Titel
                </h3>
              </div>
              <div
                class="modal-body"
              >
                Detta är innehåll i en modal baserad på Bootstrap.
              </div>
              <div
                class="modal-footer"
              >
                <button
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  type="button"
                >
                  Stäng
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `)
})
