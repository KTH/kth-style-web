import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'

const ColorBox = props => {
  const { code, displayName } = props
  const colorBoxStyle = {
    backgroundColor: code
  }
  return (
    <div className="itemBox">
      <div className="colorBox" style={colorBoxStyle}></div>
      <div>{displayName}</div>
      <div> {code}</div>
    </div>
  )
}
export const Main = props => {
  const colors = [
    { displayName: '$grey', code: '#65656c' },
    { displayName: '$lightGrey', code: '#f6f6f6' },
    { displayName: '$darkGrey', code: '#848489' },
    { displayName: '$borderGrey', code: '#d4d4d4' },
    { displayName: '$darkBorderGrey', code: '#515151' },
    { displayName: '$calendarGrey', code: '#ededed' },
    { displayName: '$inputBorderGrey', code: '#e6e6e6' },

    { displayName: '$blue', code: '#007fae' },
    { displayName: '$darkBlue', code: '#1954a6' },
    { displayName: '$matteBlue', code: '#5e87c0' },
    { displayName: '$linkBlue', code: '#006cb7' },
    { displayName: '$blueHover', code: '#006388' },

    { displayName: '$lightPink', code: '#d95999' },
    { displayName: '$mediumPink', code: '#d95999' },
    { displayName: '$pink', code: '#d02f80' },

    { displayName: '$green', code: '#62922e' },
    { displayName: '$greenHover', code: '#4e7425' },
    { displayName: '$infoGreen', code: '#dff0d8' },
    { displayName: '$infoGreenIcon', code: '#62922e' },
    { displayName: '$infoGreenBorder', code: '#d6e9c6' },

    { displayName: '$red', code: '#e01f28' },
    { displayName: '$infoRed', code: '#f2dede' },
    { displayName: '$infoRedIcon', code: '#e01f28' },
    { displayName: '$infoRedBorder', code: '#ebccd1' },
    { displayName: '$lightRedHover', code: '#ca1c24' },

    { displayName: '$infoYellow', code: '#fcf8e3' },
    { displayName: '$infoYellowIcon', code: '#fab919' },
    { displayName: '$infoYellowBorder', code: '#faebcc' },

    { displayName: '$black', code: '#000' },

    { displayName: '$white', code: '#fff' }
  ]
  const colorsPane = colors.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))
  return (
    <div className="mainContent">
      <h1>Colors</h1>
      <div className="itemContainer">{colorsPane}</div>
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