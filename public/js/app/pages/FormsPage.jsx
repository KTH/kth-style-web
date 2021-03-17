/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => (
  <main id="mainContent" className="mainContent">
    <h1>Forms</h1>
    <p>
      Read the guidelines for the use of forms and their elements in the{' '}
      <a
        href="
https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/formular-
1.952156"
      >
        KTH Style guide
      </a>{' '}
      at the KTH Intranet (Information in Swedish).
    </p>
    <div className="itemContainer">
      <div className="form">
        <h2>Form controls</h2>

        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleInputText1">
              Text input
            </label>
            <input type="text" className="form-control" id="exampleInputText1" />
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="yourElementId">Text input</label>
    <input type="text" class="form-control" id="yourElementId"></input>
  </div>
</form>`}
        />

        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleInputNumber">
              Number input
            </label>
            <input type="number" className="form-control" id="exampleInputNumber" />
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="exampleInputNumber">Number input</label>
    <input type="number" class="form-control" id="exampleInputNumber"></input>
  </div>
</form>`}
        />

        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleInputDate">
              Date input
            </label>
            <input type="date" className="form-control" id="exampleInputDate" />
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="exampleInputDate">Dte input</label>
    <input type="date" class="form-control" id="exampleInputDate"></input>
  </div>
</form>`}
        />

        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
</form>`}
        />

        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleFormControlInput1">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="yourElementId">Email address</label>
    <input type="email" class="form-control" id="yourElementId" placeholder="name@example.com"></input>
  </div>
</form>`}
        />

        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleFormControlSelect1">
              Select
            </label>
            <div className="form-select form-group">
              <div className="select-wrapper">
                <select
                  defaultValue="undefined"
                  className="form-control"
                  id="exampleFormControlSelect1"
                  aria-label="Välj något"
                >
                  <option value="undefined">Välj...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="exampleFormControlSelect1">Example select</label>
    <div class="form-select form-group">
      <div class="select-wrapper">
        <select class="form-control" id="exampleFormControlSelect1" aria-label="Välj något">
          <option selected>Välj...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  </div>
</form>`}
        />

        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleFormControlTextarea1">
              Textarea
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="yourElementId">Example textarea</label>
    <textarea class="form-control" id="yourElementId" rows="3"></textarea>
  </div>
</form>`}
        />
        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
              Checkboxes
            </label>
            <div className="form-check form-group">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-control-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <div className="form-check form-group">
              <input type="checkbox" className="form-check-input" id="exampleCheck2" />
              <label className="form-control-label" htmlFor="exampleCheck2">
                Check me out
              </label>
            </div>
            <div className="form-check form-group">
              <input type="checkbox" className="form-check-input" id="exampleCheck3" />
              <label className="form-control-label" htmlFor="exampleCheck3">
                Check me out
              </label>
            </div>
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
    <div className="form-group">
      <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
        Checkboxes
      </label>
      <div class="form-check form-group">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-control-label" for="exampleCheck1">Check me out</label>
      </div>
      <div class="form-check form-group">
        <input type="checkbox" class="form-check-input" id="exampleCheck2"></input>
        <label class="form-control-label" for="exampleCheck2">Check me out</label>
      </div>
      <div class="form-check form-group">
        <input type="checkbox" class="form-check-input" id="exampleCheck3"></input>
        <label class="form-control-label" for="exampleCheck3">Check me out</label>
      </div>
    </div>
</form>`}
        />
        <form>
          <div className="form-group">
            <label className="form-control-label" htmlFor="exampleFormControlRadioButtons">
              Radio buttons
            </label>
            <div className="form-check form-group">
              <input type="radio" className="form-check-input" name="example2" value="Option 1" id="exampleRadios1" />
              <label className="form-control-label" htmlFor="exampleRadios1">
                Option 1
              </label>
            </div>
            <div className="form-check form-group">
              <input type="radio" className="form-check-input" name="example2" value="Option 2" id="exampleRadios2" />
              <label className="form-control-label" htmlFor="exampleRadios2">
                Option 2
              </label>
            </div>
            <div className="form-check form-group">
              <input type="radio" className="form-check-input" name="example2" value="Option 3" id="exampleRadios3" />
              <label className="form-control-label" htmlFor="exampleRadios3">
                Option 3
              </label>
            </div>
          </div>
        </form>
        <CodeSnippet
          snippet={`<form>
  <div className="form-group">
    <label className="form-control-label" htmlFor="exampleFormControlRadioButtons">
      Radio buttons
    </label>
    <div class="form-check form-group">
      <input type="radio" class="form-check-input" name="example2" value="Option 1" id="exampleRadios1"/>
      <label class="form-control-label" for="exampleRadios1">Option 1</label>
    </div>
    <div class="form-check form-group">
      <input type="radio" class="form-check-input" name="example2" value="Option 2" id="exampleRadios2"/>
      <label class="form-control-label" for="exampleRadios2">Option 2</label>
    </div>
    <div class="form-check form-group">
      <input type="radio" class="form-check-input" name="example2" value="Option 3" id="exampleRadios3"/>
      <label class="form-control-label" for="exampleRadios3">Option 3</label>
    </div>
  </div>
</form>`}
        />

        <h2>Group related elements with fieldset and legend tags</h2>

        <form>
          <fieldset>
            <legend>Choose one of the following options</legend>
            <div className="form-check form-group">
              <input type="radio" className="form-check-input" name="example3" value="Option 1" id="radio1" />
              <label className="form-control-label" htmlFor="radio1">
                Option 1
              </label>
            </div>
            <div className="form-check form-group">
              <input type="radio" className="form-check-input" name="example3" value="Option 2" id="radio2" />
              <label className="form-control-label" htmlFor="radio2">
                Option 2
              </label>
            </div>
            <div className="form-check form-group">
              <input type="radio" className="form-check-input" name="example3" value="Option 3" id="radio3" />
              <label className="form-control-label" htmlFor="radio3">
                Option 3
              </label>
            </div>
          </fieldset>
        </form>
        <CodeSnippet
          snippet={`<form>
  <fieldset>
    <legend>Choose one of the following options</legend>
    <div class="form-check form-group">
      <input type="radio" class="form-check-input" name="example3" value="Option 1" id="radio1"/>
      <label class="form-control-label" for="radio1">Option 1</label>
    </div>
    <div class="form-check form-group">
      <input type="radio" class="form-check-input" name="example3" value="Option 2" id="radio2"/>
      <label class="form-control-label" for="radio2">Option 2</label>
    </div>
    <div class="form-check form-group">
      <input type="radio" class="form-check-input" name="example3" value="Option 3" id="radio3"/>
      <label class="form-control-label" for="radio3">Option 3</label>
    </div>
  </fieldset>
</form>`}
        />
      </div>
    </div>
  </main>
)

export default observer(() => (
  <>
    <Main />
  </>
))
