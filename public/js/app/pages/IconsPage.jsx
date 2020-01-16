import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

const ItemBox = props => {
  const { url, displayName, isWhite } = props
  const imgUrl = `url(/style/static/kth-style/img/kth-style/${url})`
  const itemBoxStyle = {
    backgroundImage: imgUrl,
    backgroundSize: '30px 30px',
    backgroundRepeat: 'no-repeat',
    backgroundColor: isWhite ? '#65656c' : '',
    width: 'fit-content',
    backgroundPosition: 'center'
  }
  return (
    <div>
      <div className="itemBox" style={itemBoxStyle}></div>
      <div>{displayName}</div>
      <CodeSnippet snippet={imgUrl} />
    </div>
  )
}
export const Main = props => {
  const items = [
    { displayName: 'Alert-Attention.svg', url: 'icons/alert-attention.svg' },
    { displayName: 'Alert-info.svg', url: 'icons/alert-info.svg' },
    { displayName: 'Alert-success.svg', url: 'icons/alert-success.svg' },
    { displayName: 'Arrow-black-down.svg', url: 'icons/arrow-black-down.svg' },
    { displayName: 'Arrow-black-left.svg', url: 'icons/arrow-black-left.svg' },
    { displayName: 'Arrow-black-right.svg', url: 'icons/arrow-black-right.svg' },
    { displayName: 'Arrow-cross-black.svg', url: 'icons/arrow-cross-black.svg' },
    { displayName: 'Arrow-gallery.svg', url: 'icons/arrow-gallery.svg' },
    { displayName: 'Arrow-sort-asc-black.svg', url: 'icons/arrow-sort-asc-black.svg' },
    { displayName: 'Arrow-sort-asc-white.svg', url: 'icons/arrow-sort-asc-white.svg', isWhite: true },
    { displayName: 'Arrow-sort-default-black.svg', url: 'icons/arrow-sort-default-black.svg' },
    { displayName: 'Arrow-sort-default-white.svg', url: 'icons/arrow-sort-default-white.svg', isWhite: true },
    { displayName: 'Arrow-sort-desc-black.svg', url: 'icons/arrow-sort-desc-black.svg' },
    { displayName: 'Arrow-sort-desc-white.svg', url: 'icons/arrow-sort-desc-white.svg', isWhite: true },
    { displayName: 'Arrow-up-down-black.svg', url: 'icons/arrow-up-down-black.svg' },
    { displayName: 'Arrow-up-down-white.svg', url: 'icons/arrow-up-down-white.svg', isWhite: true },
    { displayName: 'Arrow-white-down.svg', url: 'icons/arrow-white-down.svg', isWhite: true },
    { displayName: 'Arrow-white-left.svg', url: 'icons/arrow-white-left.svg', isWhite: true },
    { displayName: 'Arrow-white-right.svg', url: 'icons/arrow-white-right.svg', isWhite: true },
    { displayName: 'Back-link-pill.svg', url: 'icons/back-link-pill.svg' },
    { displayName: 'Back-link.svg', url: 'icons/back-link.svg' },
    { displayName: 'Balance-scale-black.svg', url: 'icons/balance-scale-black.svg' },
    { displayName: 'Balance-scale-white.svg', url: 'icons/balance-scale-white.svg', isWhite: true },
    { displayName: 'Canvas.svg', url: 'icons/canvas.svg' },
    { displayName: 'Check-mark.svg', url: 'icons/check-mark.svg' },
    { displayName: 'Clock_grey_25.svg', url: 'icons/clock_grey_25.svg' },
    { displayName: 'Clock_grey_50.svg', url: 'icons/clock_grey_50.svg' },
    { displayName: 'Clock_grey_100.svg', url: 'icons/clock_grey_100.svg' },
    { displayName: 'Clock_three_quarter.svg', url: 'icons/Clock_three_quarter.svg' },
    { displayName: 'Document-white.svg', url: 'icons/document-white.svg', isWhite: true },
    { displayName: 'Document.svg', url: 'icons/document.svg' },
    { displayName: 'En_UK.svg', url: 'icons/en_UK.svg' },
    { displayName: 'External-link.svg', url: 'icons/external-link.svg' },
    { displayName: 'File-archive-fa-regular.svg', url: 'icons/file-archive-fa-regular.svg' },
    { displayName: 'File-archive-fa-solid.svg', url: 'icons/file-archive-fa-solid.svg' },
    { displayName: 'File-audio-fa-regular.svg', url: 'icons/file-audio-fa-regular.svg' },
    { displayName: 'File-code-fa-regular.svg', url: 'icons/file-code-fa-regular.svg' },
    { displayName: 'File-code-fa-solid.svg', url: 'icons/file-code-fa-solid.svg' },
    { displayName: 'File-download-fa-solid.svg', url: 'icons/file-download-fa-solid.svg' },
    { displayName: 'File-excel-fa-regular.svg', url: 'icons/file-excel-fa-regular.svg' },
    { displayName: 'File-excel-fa-solid.svg', url: 'icons/file-excel-fa-solid.svg' },
    { displayName: 'File-export-fa-solid.svg', url: 'icons/file-export-fa-solid.svg' },
    { displayName: 'File-fa-regular.svg', url: 'icons/file-fa-regular.svg' },
    { displayName: 'File-fa-solid.svg', url: 'icons/file-fa-solid.svg' },
    { displayName: 'File-image-fa-regular.svg', url: 'icons/file-image-fa-regular.svg' },
    { displayName: 'File-image-fa-solid.svg', url: 'icons/file-image-fa-solid.svg' },
    { displayName: 'File-import-fa-solid.svg', url: 'icons/file-import-fa-solid.svg' },
    { displayName: 'File-pdf-fa-regular.svg', url: 'icons/file-pdf-fa-regular.svg' },
    { displayName: 'File-pdf-fa-solid.svg', url: 'icons/file-pdf-fa-solid.svg' },
    { displayName: 'File-powerpoint-fa-regular.svg', url: 'icons/file-powerpoint-fa-regular.svg' },
    { displayName: 'File-powerpoint-fa-solid.svg', url: 'icons/file-powerpoint-fa-solid.svg' },
    { displayName: 'File-upload-fa-solid.svg', url: 'icons/file-upload-fa-solid.svg' },
    { displayName: 'File-video-fa-regular.svg', url: 'icons/file-video-fa-regular.svg' },
    { displayName: 'File-video-fa-solid.svg', url: 'icons/file-video-fa-solid.svg' },
    { displayName: 'File-word-fa-regular.svg', url: 'icons/file-word-fa-regular.svg' },
    { displayName: 'File-word-fa-solid.svg', url: 'icons/file-word-fa-solid.svg' },
    { displayName: 'Globe-white.svg', url: 'icons/globe-white.svg', isWhite: true },
    { displayName: 'Globe.svg', url: 'icons/globe.svg' },
    { displayName: 'Icon-from-canvas-blue.svg', url: 'icons/icon-from-canvas-blue.svg' },
    { displayName: 'Link-white.svg', url: 'icons/link-white.svg', isWhite: true },
    { displayName: 'Modal-info.svg', url: 'icons/modal-info.svg' },
    { displayName: 'Pause-gallery.svg', url: 'icons/pause-gallery.svg' },
    { displayName: 'Pen-blue.svg', url: 'icons/pen-blue.svg' },
    { displayName: 'Pen.svg', url: 'icons/pen.svg' },
    { displayName: 'Picture-white.svg', url: 'icons/picture-white.svg', isWhite: true },
    { displayName: 'Pill-back-white.svg', url: 'icons/pill-back-white.svg', isWhite: true },
    { displayName: 'Pill-back.svg', url: 'icons/pill-back.svg' },
    { displayName: 'Play-gallery.svg', url: 'icons/play-gallery.svg' },
    { displayName: 'Sv_SE.svg', url: 'icons/sv_SE.svg' },
    { displayName: 'Table-modal.svg', url: 'icons/table-modal.svg' },
    { displayName: 'Thumbs-down.svg', url: 'icons/thumbs-down.svg' },
    { displayName: 'Thumbs-up.svg', url: 'icons/thumbs-up.svg' },
    { displayName: 'Trash-can-blue.svg', url: 'icons/trash-can-blue.svg' },
    { displayName: 'Trash-can-white.svg', url: 'icons/trash-can-white.svg', isWhite: true },
    { displayName: 'White-arrow.svg', url: 'icons/white-arrow.svg', isWhite: true },
    { displayName: 'Back-to-top.svg', url: 'back-to-top.svg' },
    { displayName: 'Input-clear-gray.svg', url: 'input-clear-gray.svg' },
    { displayName: 'Input-clear.svg', url: 'input-clear.svg' },
    { displayName: 'KTH_Logotyp_RGB_2013-2.svg', url: 'KTH_Logotyp_RGB_2013-2.svg' },
    { displayName: 'Quotation-mark.png', url: 'quotation-mark.png' },
    { displayName: 'Search-icon.svg', url: 'search-icon.svg', isWhite: true },
    { displayName: 'Select-arrow.png', url: 'select-arrow.png' }
  ]

  const itemsPane = items.map(item => (
    <ItemBox displayName={item.displayName} key={item.displayName} url={item.url} isWhite={item.isWhite} />
  ))
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
