import React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'
/**
 *
 * @param {Object} param0
 */
const Button = ({ type, disabled, children, block, icon }) => {
  const buttonClass = block
    ? `btn btn-${type}${icon ? ' ' + icon : ''} btn-block`
    : `btn btn-${type}${icon ? ' ' + icon : ''}`
  return (
    <button className={buttonClass} disabled={disabled}>
      {children}
    </button>
  )
}

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Buttons</h1>

      <div className="itemContainer">
        <div>
          <h2>Primary button</h2>
          <Button type="primary">Primary button</Button>
          <CodeSnippet snippet={'<button class="btn btn-primary">Primary button</button>'} />
        </div>

        <div>
          <h2>Primary button</h2>
          <Button type="primary" icon="next">
            Primary button
          </Button>
          <CodeSnippet snippet={'<button class="btn btn-primary next">Primary button</button>'} />
        </div>

        <div>
          <h2>Secondary button</h2>
          <Button type="secondary">Secondary</Button>
          <CodeSnippet snippet={'<button class="btn btn-secondary">Secondary</button>'} />
        </div>

        <div>
          <h2>Secondary button</h2>
          <Button type="secondary" icon="next">
            Secondary button
          </Button>
          <CodeSnippet snippet={'<button class="btn btn-secondary next">Secondary button</button>'} />
        </div>

        <div>
          <h2>Secondary button</h2>
          <Button type="secondary" icon="back">
            Previous
          </Button>
          <CodeSnippet snippet={'<button class="btn btn-secondary back">Previous</button>'} />
        </div>

        <div>
          <h2>Success button</h2>
          <Button type="success">Save</Button>
          <CodeSnippet snippet={'<button class="btn btn-success">Save</button>'} />
        </div>

        <div>
          <h2>Success button</h2>
          <Button type="success" icon="next">
            Next
          </Button>
          <CodeSnippet snippet={'<button class="btn btn-success next">Next</button>'} />
        </div>

        <div>
          <h2>Danger button</h2>
          <Button type="danger">Delete</Button>
          <CodeSnippet snippet={'<button class="btn btn-danger">Danger button</button>'} />
        </div>

        <div>
          <h2>Block level buttons</h2>
          <Button type="primary" block>
            Block level button
          </Button>
          <CodeSnippet snippet={'<button class="btn btn-primary btn-block">Block level button</button>'} />

          <Button type="secondary" block>
            Block level button
          </Button>
          <CodeSnippet snippet={'<button class="btn btn-secondary btn-block">Block level button</button>'} />
        </div>

        <div>
          <h2>Disabled buttons</h2>
          <Button type="primary" disabled>
            Primary button
          </Button>
          <CodeSnippet snippet={'<button class="btn btn-primary" disabled>Disabled button</button>'} />
        </div>
      </div>
    </main>
  )
}

export default observer(() => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  )
})
