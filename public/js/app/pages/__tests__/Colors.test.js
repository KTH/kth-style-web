import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main as Colors } from '../Colors'

test('Colors component includes colors', () => {
  const { container, getByText, debug } = render(<Colors />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="mainContent"
      >
        <h1>
          Colors
        </h1>
        <div
          class="itemContainer"
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
              style="background-color: rgb(246, 246, 246);"
            />
            <div>
              $lightGrey
            </div>
            <div>
               
              #f6f6f6
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(132, 132, 137);"
            />
            <div>
              $darkGrey
            </div>
            <div>
               
              #848489
            </div>
          </div>
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
              style="background-color: rgb(81, 81, 81);"
            />
            <div>
              $darkBorderGrey
            </div>
            <div>
               
              #515151
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(237, 237, 237);"
            />
            <div>
              $calendarGrey
            </div>
            <div>
               
              #ededed
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(230, 230, 230);"
            />
            <div>
              $inputBorderGrey
            </div>
            <div>
               
              #e6e6e6
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
              style="background-color: rgb(25, 84, 166);"
            />
            <div>
              $darkBlue
            </div>
            <div>
               
              #1954a6
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(94, 135, 192);"
            />
            <div>
              $matteBlue
            </div>
            <div>
               
              #5e87c0
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
              style="background-color: rgb(217, 89, 153);"
            />
            <div>
              $lightPink
            </div>
            <div>
               
              #d95999
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(217, 89, 153);"
            />
            <div>
              $mediumPink
            </div>
            <div>
               
              #d95999
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
              style="background-color: rgb(223, 240, 216);"
            />
            <div>
              $infoGreen
            </div>
            <div>
               
              #dff0d8
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
              $infoGreenIcon
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
              style="background-color: rgb(214, 233, 198);"
            />
            <div>
              $infoGreenBorder
            </div>
            <div>
               
              #d6e9c6
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
              $infoRedIcon
            </div>
            <div>
               
              #e01f28
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(235, 204, 209);"
            />
            <div>
              $infoRedBorder
            </div>
            <div>
               
              #ebccd1
            </div>
          </div>
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(202, 28, 36);"
            />
            <div>
              $lightRedHover
            </div>
            <div>
               
              #ca1c24
            </div>
          </div>
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
          <div
            class="itemBox"
          >
            <div
              class="colorBox"
              style="background-color: rgb(250, 235, 204);"
            />
            <div>
              $infoYellowBorder
            </div>
            <div>
               
              #faebcc
            </div>
          </div>
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
        </div>
      </div>
    </div>
  `)
  getByText(/Colors/i)
})

test('Colors component complies to axe accesibility', async () => {
  const { container } = render(<Colors />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
