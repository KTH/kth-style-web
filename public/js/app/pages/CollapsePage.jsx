import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import NavBar from '../components/NavBar'

import Collapse from '../components/Collapse'

export const Main = props => {
  return (
    <div className="itemContainer">
      <div className="itemBox">
        <h1>Collapse with hooks</h1>
        <Collapse title="hooks-test" className="ProgramItem">
          <div>
            <div>
              <div>Hooks seems to work here</div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default inject('styleStore')(
  observer(({ styleStore }) => {
    const { message } = styleStore

    return (
      <Fragment>
        <NavBar />
        <Main message={message} />
      </Fragment>
    )
  })
)
