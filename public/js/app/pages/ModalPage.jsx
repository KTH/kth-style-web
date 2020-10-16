import React, { useState } from 'react'
import { observer } from 'mobx-react'

import Modal from '../components/Modal'
import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  const [isOpen, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const lang = 'sv'

  return (
    <main id="mainContent" className="mainContent">
      <h1>Modaler</h1>

      <h2>Modal baserad på React</h2>
      <p>Denna modal är baserad på vår React-komponent och kräver således React i botten.</p>

      <button onClick={openModal} type="button" className="btn btn-primary">
        Öppna modalfönster
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal} lang={lang} title="Titel">
        <p>Detta är innehåll i en modal baserad på en React-komponent.</p>
      </Modal>

      <CodeSnippet
        snippet={`<button onClick={openModal} type="button" class="btn btn-primary">
  Öppna modalfönster
</button>
<Modal isOpen={isOpen} closeModal={closeModal} lang={lang} title="Titel">
  <p>Detta är innehåll i en modal baserad på en React-komponent.</p>
</Modal>`}
      />

      <h2>Modal baserad på Bootstrap</h2>
      <p>Denna modal är baserad på Bootstrap och kräver att man har Bootstrap CSS och JS tillgängligt i sitt prjekt.</p>

      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Öppna modalfönster
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3 className="modal-title" id="exampleModalLabel">
                Titel
              </h3>
            </div>
            <div className="modal-body">Detta är innehåll i en modal baserad på Bootstrap.</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <CodeSnippet
        snippet={`<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Öppna modalfönster
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h3 class="modal-title" id="exampleModalLabel">Titel</h3>
      </div>
      <div class="modal-body">Detta är innehåll i en modal baserad på Bootstrap.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Stäng</button>
      </div>
    </div>
  </div>
</div>`}
      />
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
