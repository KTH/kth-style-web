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
      <h1>Modals</h1>
      <p>
        Read the guidelines for the use of modals in the{' '}
        <a
          href="
https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/modaler-
1.952157"
        >
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <h2>Modals based on React</h2>
      <p>This modal is based on a React component and require React.</p>

      <button onClick={openModal} type="button" className="btn btn-primary">
        Open modal
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal} lang={lang} title="Titel">
        <p>This is content in a React based modal.</p>
      </Modal>

      <CodeSnippet
        snippet={`<button onClick={openModal} type="button" class="btn btn-primary">
  Open modal
</button>
<Modal isOpen={isOpen} closeModal={closeModal} lang={lang} title="Title">
  <p>This is content in a react based modal..</p>
</Modal>`}
      />

      <h2>Modal based on Bootstrap</h2>
      <p>This modal is based on Bootstrap and require Bootstrap CSS and JS in the project.</p>

      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Open modal
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
                Title
              </h3>
            </div>
            <div className="modal-body">This is content in a modal based on Bootstrap.</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
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
        <h3 class="modal-title" id="exampleModalLabel">Title</h3>
      </div>
      <div class="modal-body">This is content in a modal based on Bootstrap.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
