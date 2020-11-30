import React from 'react'
import { observer } from 'mobx-react'

const ColorBox = props => {
  const { code, displayName } = props
  const colorBoxStyle = {
    backgroundColor: code,
  }
  return (
    <div className="itemBox">
      <div className="colorBox" style={colorBoxStyle} />
      <div>{displayName}</div>
      <div>{code}</div>
    </div>
  )
}

export const Main = () => {
  const bgColorsWithWhitText = [
    { displayName: '$grey', code: '#65656c' },
    { displayName: '$blue', code: '#007fae' },
    { displayName: '$green', code: '#62922e' },
    { displayName: '$pink', code: '#d02f80' },
  ]

  const bgColorsWithBlackText = [
    { displayName: '$white', code: '#fff' },
    { displayName: '$lightGrey', code: '#f6f6f6' },
  ]

  const informationAndAlert = [
    { displayName: '$infoYellow', code: '#fcf8e3' },
    { displayName: '$infoYellowIcon', code: '#fab919' },
  ]

  const success = [{ displayName: '$infoGreen', code: '#dff0d8' }]

  const error = [
    { displayName: '$infoRed', code: '#f2dede' },
    { displayName: '$red', code: '#e01f28' },
  ]

  const hover = [
    { displayName: '$blueHover', code: '#006388' },
    { displayName: '$greenHover', code: '#4e7425' },
    { displayName: '$redHover', code: '#8e0b18' },
  ]

  const textColors = [
    { displayName: '$black', code: '#000' },
    { displayName: '$white', code: '#fff' },
    { displayName: '$linkBlue', code: '#006cb7' },
  ]

  const borderColors = [
    { displayName: '$borderGrey', code: '#d4d4d4' },
    { displayName: '$grey', code: '#65656c' },
  ]

  const bgColorsWithWhiteTextPane = bgColorsWithWhitText.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const bgColorsWithBlackTextPane = bgColorsWithBlackText.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const informationAndAlertPane = informationAndAlert.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const successPane = success.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const errorPane = error.map(color => (
    <ColorBox displayName={color.displayName} key={color.displayName} code={color.code} />
  ))

  const hoverPane = hover.map(color => (
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
      <h1>Colors</h1>
      <p>
        Read the guidelines for the use of colors in the{' '}
        <a
          href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/farger-
1.952147"
        >
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <h2>Dark background</h2>
      <div className="gridItemContainer">{bgColorsWithWhiteTextPane}</div>
      <h2>Light background</h2>
      <div className="gridItemContainer">{bgColorsWithBlackTextPane}</div>
      <h2>Information and alert</h2>
      <div className="gridItemContainer">{informationAndAlertPane}</div>

      <h2>Success</h2>
      <div className="gridItemContainer">{successPane}</div>

      <h2>Error</h2>
      <div className="gridItemContainer">{errorPane}</div>
      <h2>Hover</h2>
      <div className="gridItemContainer">{hoverPane}</div>

      <h2>Text</h2>
      <div className="gridItemContainer">{textColorsPane}</div>
      <h2>Border</h2>
      <div className="gridItemContainer">{borderColorsPane}</div>
    </main>
  )
}

export default observer(() => {
  return (
    <>
      <Main />
    </>
  )
})
