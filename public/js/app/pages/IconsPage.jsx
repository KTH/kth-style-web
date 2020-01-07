import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
const ItemBox = props => {
  const { url, displayName } = props
  const itemBoxStyle = {
    backgroundImage: `url(/style/static/kth-style/img/kth-style/${url})`,
    backgroundSize: '30px 30px',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div>
      <div className="itemBox" style={itemBoxStyle}></div>
      <div>{displayName}</div>
      <div> {url}</div>
    </div>
  )
}
export const Main = props => {
  const items = [
    { displayName: 'Alert-Attention.svg', url: 'icons/alert-attention.svg' },
    { displayName: 'Alert-info.svg', url: 'icons/alert-info.svg' }
  ]
  const itemsPane = items.map(item => <ItemBox displayName={item.displayName} key={item.displayName} url={item.url} />)
  return (
    <div className="mainContent">
      <h1>Icons</h1>
      <div className="itemContainer">{itemsPane}</div>
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
