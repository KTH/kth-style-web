import React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'

const ColorBox = props => {
  const { code, displayName } = props
  const colorBoxStyle = {
    backgroundColor: code,
  }
  return (
    <div className="itemBox">
      <div className="colorBox" style={colorBoxStyle}></div>
      <div>{displayName}</div>
      <div>{code}</div>
    </div>
  )
}

export const Main = props => {
  const bgColorsWithWhitText = [
    { displayName: '$grey', code: '#65656c' },
    { displayName: '$blue', code: '#007fae' },
    { displayName: '$blueHover', code: '#006388' },
    { displayName: '$green', code: '#62922e' },
    { displayName: '$greenHover', code: '#4e7425' },
    { displayName: '$red', code: '#e01f28' },
    { displayName: '$redHover', code: '#8e0b18' },
    { displayName: '$infoYellowIcon', code: '#fab919' },
    { displayName: '$pink', code: '#d02f80' },
  ]

  const bgColorsWithBlackText = [
    { displayName: '$white', code: '#fff' },
    { displayName: '$lightGrey', code: '#f6f6f6' },
    { displayName: '$infoGreen', code: '#dff0d8' },
    { displayName: '$infoRed', code: '#f2dede' },
    { displayName: '$infoYellow', code: '#fcf8e3' },
  ]

  const textColors = [
    { displayName: '$linkBlue', code: '#006cb7' },
    { displayName: '$black', code: '#000' },
    { displayName: '$white', code: '#fff' },
  ]

  const borderColors = [{ displayName: '$borderGrey', code: '#d4d4d4' }]

  const bgColorsWithWhiteTextPane = bgColorsWithWhitText.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const bgColorsWithBlackTextPane = bgColorsWithBlackText.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const textColorsPane = textColors.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const borderColorsPane = borderColors.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  return (
    <main id="mainContent" className="mainContent">
      <h1>Färger</h1>
      <h2>Bakgrundsfärger med vit text</h2>
      <div className="gridItemContainer">{bgColorsWithWhiteTextPane}</div>
      <h2>Bakgrundsfärger med svart text</h2>
      <div className="gridItemContainer">{bgColorsWithBlackTextPane}</div>
      <h2>Textfärger</h2>
      <div className="gridItemContainer">{textColorsPane}</div>
      <h2>Kantfärger</h2>
      <div className="gridItemContainer">{borderColorsPane}</div>
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
