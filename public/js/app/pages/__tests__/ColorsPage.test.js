import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../ColorsPage'

test('Colors page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Colors component includes headline Colors', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Colors
        </h1>
        <p>
          Read the guidelines for the use of colors in the
           
          <a
            href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/farger-
    1.952147"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <h2>
          Dark background
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(101, 101, 108);"
            />
            <div>
              $grey
            </div>
            <div>
              #65656c
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(0, 127, 174);"
            />
            <div>
              $blue
            </div>
            <div>
              #007fae
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(98, 146, 46);"
            />
            <div>
              $green
            </div>
            <div>
              #62922e
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(208, 47, 128);"
            />
            <div>
              $pink
            </div>
            <div>
              #d02f80
            </div>
          </div>
        </div>
        <h2>
          Light background
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(255, 255, 255);"
            />
            <div>
              $white
            </div>
            <div>
              #fff
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(246, 246, 246);"
            />
            <div>
              $lightGrey
            </div>
            <div>
              #f6f6f6
            </div>
          </div>
        </div>
        <h2>
          Information and alert
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(252, 248, 227);"
            />
            <div>
              $infoYellow
            </div>
            <div>
              #fcf8e3
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(250, 185, 25);"
            />
            <div>
              $infoYellowIcon
            </div>
            <div>
              #fab919
            </div>
          </div>
        </div>
        <h2>
          Success
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(223, 240, 216);"
            />
            <div>
              $infoGreen
            </div>
            <div>
              #dff0d8
            </div>
          </div>
        </div>
        <h2>
          Error
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(242, 222, 222);"
            />
            <div>
              $infoRed
            </div>
            <div>
              #f2dede
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(224, 31, 40);"
            />
            <div>
              $red
            </div>
            <div>
              #e01f28
            </div>
          </div>
        </div>
        <h2>
          Hover
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(0, 99, 136);"
            />
            <div>
              $blueHover
            </div>
            <div>
              #006388
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(78, 116, 37);"
            />
            <div>
              $greenHover
            </div>
            <div>
              #4e7425
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(142, 11, 24);"
            />
            <div>
              $redHover
            </div>
            <div>
              #8e0b18
            </div>
          </div>
        </div>
        <h2>
          Text
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(0, 0, 0);"
            />
            <div>
              $black
            </div>
            <div>
              #000
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(255, 255, 255);"
            />
            <div>
              $white
            </div>
            <div>
              #fff
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(0, 108, 183);"
            />
            <div>
              $linkBlue
            </div>
            <div>
              #006cb7
            </div>
          </div>
        </div>
        <h2>
          Border
        </h2>
        <div
          class="gridItemContainer"
        >
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(212, 212, 212);"
            />
            <div>
              $borderGrey
            </div>
            <div>
              #d4d4d4
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(101, 101, 108);"
            />
            <div>
              $grey
            </div>
            <div>
              #65656c
            </div>
          </div>
        </div>
      </main>
    </div>
  `)
  getByText(/Text/i)
})
