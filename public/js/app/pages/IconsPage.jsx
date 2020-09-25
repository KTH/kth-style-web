import React from 'react'
import { observer } from 'mobx-react'

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
  const alertItems = [
    { displayName: 'alert-attention.svg', url: 'icons/alert-attention.svg' },
    { displayName: 'alert-info.svg', url: 'icons/alert-info.svg' },
    { displayName: 'alert-success.svg', url: 'icons/alert-success.svg' },
    { displayName: 'modal-info.svg', url: 'icons/modal-info.svg' },
    { displayName: 'table-modal.svg', url: 'icons/table-modal.svg' },
  ]
  const arrowItems = [
    { displayName: 'arrow-black-down.svg', url: 'icons/arrow-black-down.svg' },
    { displayName: 'arrow-black-left.svg', url: 'icons/arrow-black-left.svg' },
    { displayName: 'arrow-black-right.svg', url: 'icons/arrow-black-right.svg' },
    { displayName: 'arrow-white-down.svg', url: 'icons/arrow-white-down.svg', isWhite: true },
    { displayName: 'arrow-white-left.svg', url: 'icons/arrow-white-left.svg', isWhite: true },
    { displayName: 'arrow-white-right.svg', url: 'icons/arrow-white-right.svg', isWhite: true },
    { displayName: 'arrow-blue-right.svg', url: 'icons/arrow-blue-right.svg' },
    { displayName: 'arrow-blue-down.svg', url: 'icons/arrow-blue-down.svg' },
    { displayName: 'arrow-long-black-right.svg', url: 'icons/arrow-long-black-right.svg' },
    { displayName: 'arrow-long-white-right.svg', url: 'icons/arrow-long-white-right.svg', isWhite: true },
    { displayName: 'arrow-long-blue-right.svg', url: 'icons/arrow-long-blue-right.svg' },
    { displayName: 'arrow-long-blue-left.svg', url: 'icons/arrow-long-blue-left.svg' },
    { displayName: 'arrow-sort-asc-black.svg', url: 'icons/arrow-sort-asc-black.svg' },
    { displayName: 'arrow-sort-asc-white.svg', url: 'icons/arrow-sort-asc-white.svg', isWhite: true },
    { displayName: 'arrow-sort-default-black.svg', url: 'icons/arrow-sort-default-black.svg' },
    { displayName: 'arrow-sort-default-white.svg', url: 'icons/arrow-sort-default-white.svg', isWhite: true },
    { displayName: 'arrow-sort-desc-black.svg', url: 'icons/arrow-sort-desc-black.svg' },
    { displayName: 'arrow-sort-desc-white.svg', url: 'icons/arrow-sort-desc-white.svg', isWhite: true },
    { displayName: 'arrow-cross-black.svg', url: 'icons/arrow-cross-black.svg' },
    { displayName: 'arrow-up-down-black.svg', url: 'icons/arrow-up-down-black.svg' },
    { displayName: 'arrow-up-down-white.svg', url: 'icons/arrow-up-down-white.svg', isWhite: true },
    { displayName: 'back-to-top.svg', url: 'back-to-top.svg' },
  ]
  const galleryItems = [
    { displayName: 'arrow-gallery.svg', url: 'icons/arrow-gallery.svg' },
    { displayName: 'pause-gallery.svg', url: 'icons/pause-gallery.svg' },
    { displayName: 'play-gallery.svg', url: 'icons/play-gallery.svg' },
  ]
  const fileItems = [
    { displayName: 'document-white.svg', url: 'icons/document-white.svg', isWhite: true },
    { displayName: 'document.svg', url: 'icons/document.svg' },
    { displayName: 'file-archive-fa-regular.svg', url: 'icons/file-archive-fa-regular.svg' },
    { displayName: 'file-archive-fa-solid.svg', url: 'icons/file-archive-fa-solid.svg' },
    { displayName: 'file-audio-fa-regular.svg', url: 'icons/file-audio-fa-regular.svg' },
    { displayName: 'file-video-fa-regular.svg', url: 'icons/file-video-fa-regular.svg' },
    { displayName: 'file-video-fa-solid.svg', url: 'icons/file-video-fa-solid.svg' },
    { displayName: 'file-code-fa-regular.svg', url: 'icons/file-code-fa-regular.svg' },
    { displayName: 'file-code-fa-solid.svg', url: 'icons/file-code-fa-solid.svg' },
    { displayName: 'file-download-fa-solid.svg', url: 'icons/file-download-fa-solid.svg' },
    { displayName: 'file-upload-fa-solid.svg', url: 'icons/file-upload-fa-solid.svg' },
    { displayName: 'file-word-fa-regular.svg', url: 'icons/file-word-fa-regular.svg' },
    { displayName: 'file-word-fa-solid.svg', url: 'icons/file-word-fa-solid.svg' },
    { displayName: 'file-excel-fa-regular.svg', url: 'icons/file-excel-fa-regular.svg' },
    { displayName: 'file-excel-fa-solid.svg', url: 'icons/file-excel-fa-solid.svg' },
    { displayName: 'file-export-fa-solid.svg', url: 'icons/file-export-fa-solid.svg' },
    { displayName: 'file-import-fa-solid.svg', url: 'icons/file-import-fa-solid.svg' },
    { displayName: 'file-fa-regular.svg', url: 'icons/file-fa-regular.svg' },
    { displayName: 'file-fa-solid.svg', url: 'icons/file-fa-solid.svg' },
    { displayName: 'file-image-fa-regular.svg', url: 'icons/file-image-fa-regular.svg' },
    { displayName: 'file-image-fa-solid.svg', url: 'icons/file-image-fa-solid.svg' },
    { displayName: 'file-pdf-fa-regular.svg', url: 'icons/file-pdf-fa-regular.svg' },
    { displayName: 'file-pdf-fa-solid.svg', url: 'icons/file-pdf-fa-solid.svg' },
    { displayName: 'file-powerpoint-fa-regular.svg', url: 'icons/file-powerpoint-fa-regular.svg' },
    { displayName: 'file-powerpoint-fa-solid.svg', url: 'icons/file-powerpoint-fa-solid.svg' },
  ]
  const flagItems = [
    { displayName: 'en_UK.svg', url: 'icons/en_UK.svg' },
    { displayName: 'sv_SE.svg', url: 'icons/sv_SE.svg' },
    { displayName: 'globe-white.svg', url: 'icons/globe-white.svg', isWhite: true },
    { displayName: 'globe.svg', url: 'icons/globe.svg' },
  ]
  const otherItems = [
    { displayName: 'balance-scale-black.svg', url: 'icons/balance-scale-black.svg' },
    { displayName: 'balance-scale-white.svg', url: 'icons/balance-scale-white.svg', isWhite: true },
    { displayName: 'check-mark.svg', url: 'icons/check-mark.svg' },
    { displayName: 'external-link.svg', url: 'icons/external-link.svg' },
    { displayName: 'link-white.svg', url: 'icons/link-white.svg', isWhite: true },
    { displayName: 'pen-blue.svg', url: 'icons/pen-blue.svg' },
    { displayName: 'pen.svg', url: 'icons/pen.svg' },
    { displayName: 'picture-white.svg', url: 'icons/picture-white.svg', isWhite: true },
    { displayName: 'thumbs-down.svg', url: 'icons/thumbs-down.svg' },
    { displayName: 'thumbs-up.svg', url: 'icons/thumbs-up.svg' },
    { displayName: 'trash-can-blue.svg', url: 'icons/trash-can-blue.svg' },
    { displayName: 'trash-can-white.svg', url: 'icons/trash-can-white.svg', isWhite: true },
    { displayName: 'input-clear-gray.svg', url: 'input-clear-gray.svg' },
    { displayName: 'input-clear.svg', url: 'input-clear.svg', isWhite: true },
    { displayName: 'KTH_Logotyp_RGB_2013-2.svg', url: 'KTH_Logotyp_RGB_2013-2.svg' },
    { displayName: 'quotation-mark.png', url: 'quotation-mark.png' },
    { displayName: 'search-icon.svg', url: 'search-icon.svg', isWhite: true },
  ]

  const alertItemsPane = alertItems.map(item => (
    <ItemBox
      displayName={item.displayName}
      key={item.displayName}
      url={item.url}
      isWhite={item.isWhite}
      size={item.size}
      width={item.width}
    />
  ))

  const arrowItemsPane = arrowItems.map(item => (
    <ItemBox
      displayName={item.displayName}
      key={item.displayName}
      url={item.url}
      isWhite={item.isWhite}
      size={item.size}
      width={item.width}
    />
  ))

  const galleryItemsPane = galleryItems.map(item => (
    <ItemBox
      displayName={item.displayName}
      key={item.displayName}
      url={item.url}
      isWhite={item.isWhite}
      size={item.size}
      width={item.width}
    />
  ))

  const fileItemsPane = fileItems.map(item => (
    <ItemBox
      displayName={item.displayName}
      key={item.displayName}
      url={item.url}
      isWhite={item.isWhite}
      size={item.size}
      width={item.width}
    />
  ))

  const flagItemsPane = flagItems.map(item => (
    <ItemBox
      displayName={item.displayName}
      key={item.displayName}
      url={item.url}
      isWhite={item.isWhite}
      size={item.size}
      width={item.width}
    />
  ))

  const otherItemsPane = otherItems.map(item => (
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
    <main id="mainContent" className="mainContent">
      <h1>Ikoner</h1>

      <h2>Information</h2>
      <div className="gridItemContainer">{alertItemsPane}</div>

      <h2>Pilar</h2>
      <div className="gridItemContainer">{arrowItemsPane}</div>

      <h2>Galleri</h2>
      <div className="gridItemContainer">{galleryItemsPane}</div>

      <h2>Filer</h2>
      <div className="gridItemContainer">{fileItemsPane}</div>

      <h2>Flaggor</h2>
      <div className="gridItemContainer">{flagItemsPane}</div>

      <h2>Övriga</h2>
      <div className="gridItemContainer">{otherItemsPane}</div>
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
