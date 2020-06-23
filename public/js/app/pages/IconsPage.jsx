import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

const ItemBox = props => {
  const { url, displayName, isWhite, width } = props
  const imgUrl = `url(/style/static/kth-style/img/kth-style/${url})`
  const itemBoxStyle = {
    backgroundImage: imgUrl,
    backgroundSize: '30px 30px',
    backgroundRepeat: 'no-repeat',
    backgroundColor: isWhite ? '#65656c' : '',
    margin: '20px auto auto auto',
    width: 'fit-content',
    backgroundPosition: 'center',
  }
  return (
    <div className="gridItem">
      <div className="itemBox" style={itemBoxStyle}></div>
      <div className="displayName">{displayName}</div>
      <CodeSnippet snippet={imgUrl} />
    </div>
  )
}
export const Main = props => {
  const items = [
    { displayName: 'alert-attention.svg', url: 'icons/alert-attention.svg' },
    { displayName: 'alert-info.svg', url: 'icons/alert-info.svg' },
    { displayName: 'alert-success.svg', url: 'icons/alert-success.svg' },
    { displayName: 'arrow-black-down.svg', url: 'icons/arrow-black-down.svg' },
    { displayName: 'arrow-black-left.svg', url: 'icons/arrow-black-left.svg' },
    { displayName: 'arrow-black-right.svg', url: 'icons/arrow-black-right.svg' },
    { displayName: 'arrow-cross-black.svg', url: 'icons/arrow-cross-black.svg' },
    { displayName: 'arrow-gallery.svg', url: 'icons/arrow-gallery.svg' },
    { displayName: 'arrow-sort-asc-black.svg', url: 'icons/arrow-sort-asc-black.svg' },
    { displayName: 'arrow-sort-asc-white.svg', url: 'icons/arrow-sort-asc-white.svg', isWhite: true },
    { displayName: 'arrow-sort-default-black.svg', url: 'icons/arrow-sort-default-black.svg' },
    { displayName: 'arrow-sort-default-white.svg', url: 'icons/arrow-sort-default-white.svg', isWhite: true },
    { displayName: 'arrow-sort-desc-black.svg', url: 'icons/arrow-sort-desc-black.svg' },
    { displayName: 'arrow-sort-desc-white.svg', url: 'icons/arrow-sort-desc-white.svg', isWhite: true },
    { displayName: 'arrow-up-down-black.svg', url: 'icons/arrow-up-down-black.svg' },
    { displayName: 'arrow-up-down-white.svg', url: 'icons/arrow-up-down-white.svg', isWhite: true },
    { displayName: 'arrow-white-down.svg', url: 'icons/arrow-white-down.svg', isWhite: true },
    { displayName: 'arrow-white-left.svg', url: 'icons/arrow-white-left.svg', isWhite: true },
    { displayName: 'arrow-white-right.svg', url: 'icons/arrow-white-right.svg', isWhite: true },
    { displayName: 'back-link-pill.svg', url: 'icons/back-link-pill.svg' },
    { displayName: 'back-link.svg', url: 'icons/back-link.svg' },
    { displayName: 'balance-scale-black.svg', url: 'icons/balance-scale-black.svg' },
    { displayName: 'balance-scale-white.svg', url: 'icons/balance-scale-white.svg', isWhite: true },
    { displayName: 'canvas.svg', url: 'icons/canvas.svg' },
    { displayName: 'check-mark.svg', url: 'icons/check-mark.svg' },
    { displayName: 'clock_grey_25.svg', url: 'icons/clock_grey_25.svg' },
    { displayName: 'clock_grey_50.svg', url: 'icons/clock_grey_50.svg' },
    { displayName: 'clock_grey_100.svg', url: 'icons/clock_grey_100.svg' },
    { displayName: 'clock_three_quarter.svg', url: 'icons/Clock_three_quarter.svg' },
    { displayName: 'document-white.svg', url: 'icons/document-white.svg', isWhite: true },
    { displayName: 'document.svg', url: 'icons/document.svg' },
    { displayName: 'en_UK.svg', url: 'icons/en_UK.svg' },
    { displayName: 'external-link.svg', url: 'icons/external-link.svg' },
    { displayName: 'file-archive-fa-regular.svg', url: 'icons/file-archive-fa-regular.svg' },
    { displayName: 'file-archive-fa-solid.svg', url: 'icons/file-archive-fa-solid.svg' },
    { displayName: 'file-audio-fa-regular.svg', url: 'icons/file-audio-fa-regular.svg' },
    { displayName: 'file-code-fa-regular.svg', url: 'icons/file-code-fa-regular.svg' },
    { displayName: 'file-code-fa-solid.svg', url: 'icons/file-code-fa-solid.svg' },
    { displayName: 'file-download-fa-solid.svg', url: 'icons/file-download-fa-solid.svg' },
    { displayName: 'file-excel-fa-regular.svg', url: 'icons/file-excel-fa-regular.svg' },
    { displayName: 'file-excel-fa-solid.svg', url: 'icons/file-excel-fa-solid.svg' },
    { displayName: 'file-export-fa-solid.svg', url: 'icons/file-export-fa-solid.svg' },
    { displayName: 'file-fa-regular.svg', url: 'icons/file-fa-regular.svg' },
    { displayName: 'file-fa-solid.svg', url: 'icons/file-fa-solid.svg' },
    { displayName: 'file-image-fa-regular.svg', url: 'icons/file-image-fa-regular.svg' },
    { displayName: 'file-image-fa-solid.svg', url: 'icons/file-image-fa-solid.svg' },
    { displayName: 'file-import-fa-solid.svg', url: 'icons/file-import-fa-solid.svg' },
    { displayName: 'file-pdf-fa-regular.svg', url: 'icons/file-pdf-fa-regular.svg' },
    { displayName: 'file-pdf-fa-solid.svg', url: 'icons/file-pdf-fa-solid.svg' },
    { displayName: 'file-powerpoint-fa-regular.svg', url: 'icons/file-powerpoint-fa-regular.svg' },
    { displayName: 'file-powerpoint-fa-solid.svg', url: 'icons/file-powerpoint-fa-solid.svg' },
    { displayName: 'file-upload-fa-solid.svg', url: 'icons/file-upload-fa-solid.svg' },
    { displayName: 'file-video-fa-regular.svg', url: 'icons/file-video-fa-regular.svg' },
    { displayName: 'file-video-fa-solid.svg', url: 'icons/file-video-fa-solid.svg' },
    { displayName: 'file-word-fa-regular.svg', url: 'icons/file-word-fa-regular.svg' },
    { displayName: 'file-word-fa-solid.svg', url: 'icons/file-word-fa-solid.svg' },
    { displayName: 'globe-white.svg', url: 'icons/globe-white.svg', isWhite: true },
    { displayName: 'globe.svg', url: 'icons/globe.svg' },
    { displayName: 'icon-from-canvas-blue.svg', url: 'icons/icon-from-canvas-blue.svg' },
    { displayName: 'link-white.svg', url: 'icons/link-white.svg', isWhite: true },
    { displayName: 'modal-info.svg', url: 'icons/modal-info.svg' },
    { displayName: 'pause-gallery.svg', url: 'icons/pause-gallery.svg' },
    { displayName: 'pen-blue.svg', url: 'icons/pen-blue.svg' },
    { displayName: 'pen.svg', url: 'icons/pen.svg' },
    { displayName: 'picture-white.svg', url: 'icons/picture-white.svg', isWhite: true },
    { displayName: 'pill-back-white.svg', url: 'icons/pill-back-white.svg', isWhite: true },
    { displayName: 'pill-back.svg', url: 'icons/pill-back.svg' },
    { displayName: 'play-gallery.svg', url: 'icons/play-gallery.svg' },
    { displayName: 'sv_SE.svg', url: 'icons/sv_SE.svg' },
    { displayName: 'table-modal.svg', url: 'icons/table-modal.svg' },
    { displayName: 'thumbs-down.svg', url: 'icons/thumbs-down.svg' },
    { displayName: 'thumbs-up.svg', url: 'icons/thumbs-up.svg' },
    { displayName: 'trash-can-blue.svg', url: 'icons/trash-can-blue.svg' },
    { displayName: 'trash-can-white.svg', url: 'icons/trash-can-white.svg', isWhite: true },
    { displayName: 'white-arrow.svg', url: 'icons/white-arrow.svg', isWhite: true },
    { displayName: 'back-to-top.svg', url: 'back-to-top.svg' },
    { displayName: 'input-clear-gray.svg', url: 'input-clear-gray.svg' },
    { displayName: 'input-clear.svg', url: 'input-clear.svg', isWhite: true },
    { displayName: 'KTH_Logotyp_RGB_2013-2.svg', url: 'KTH_Logotyp_RGB_2013-2.svg' },
    { displayName: 'quotation-mark.png', url: 'quotation-mark.png' },
    { displayName: 'search-icon.svg', url: 'search-icon.svg', isWhite: true },
    { displayName: 'select-arrow.png', url: 'select-arrow.png' },
  ]

  const itemsPane = items.map(item => (
    <ItemBox
      displayName={item.displayName}
      key={item.displayName}
      url={item.url}
      isWhite={item.isWhite}
      size={item.size}
      width={item.width}
    />
  ))
  return (
    <main role="main" id="mainContent" className="mainContent">
      <h1>Ikoner</h1>
      <div className="gridItemContainer">{itemsPane}</div>
    </main>
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
