import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Forms</h1>
      <div className="itemContainer">
        <div className="form">
          <h2>Form controls</h2>
          <div className="itemBox">
            <form>
              <div className="form-group">
                <label className="form-control-label" htmlFor="exampleInputText1">
                  Text input
                </label>
                <input type="text" className="form-control" id="exampleInputText1"></input>
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
          </div>

          <div className="itemBox">
            <form>
              <div className="form-group">
                <label className="form-control-label" htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
            </form>
            <CodeSnippet
              snippet={`<form>
  <div class="form-group">
    <label class="form-control-label" for="yourElementId">Password</label>
    <input type="password" class="form-control" id="yourElementId" placeholder="Password"></input>
  </div>
</form>`}
            />
          </div>

          <div className="itemBox">
            <form>
              <div className="form-group">
                <label className="form-control-label" htmlFor="exampleFormControlInput1">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
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
          </div>

          <div className="itemBox">
            <form>
              <div className="form-group">
                <label className="form-control-label" htmlFor="exampleFormControlSelect1">
                  Example select
                </label>
                <div className="form-select form-group">
                  <div className="select-wrapper">
                    <select
                      defaultValue={'undefined'}
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
          </div>

          <div className="itemBox">
            <form>
              <div className="form-group">
                <label className="form-control-label" htmlFor="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
          </div>

          <h2>Checkboxes</h2>
          <div className="itemBox">
            <form>
              <div className="form-check form-group">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-control-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
            </form>
            <CodeSnippet
              snippet={`<form>
  <div class="form-check form-group">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-control-label" for="exampleCheck1">Check me out</label>
  </div>
</form>`}
            />
          </div>

          <h2 id="radio-group">Radio buttons</h2>
          <div className="itemBox">
            <form>
              <div className="form-check form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Option 1"
                  id="exampleRadios1"
                  aria-labelledby="radio-group"
                />
                <label className="form-control-label" htmlFor="exampleRadios1">
                  Option 1
                </label>
              </div>
              <div className="form-check form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Option 2"
                  id="exampleRadios2"
                  aria-labelledby="radio-group"
                />
                <label className="form-control-label" htmlFor="exampleRadios2">
                  Option 2
                </label>
              </div>
              <div className="form-check form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Option 3"
                  id="exampleRadios3"
                  aria-labelledby="radio-group"
                />
                <label className="form-control-label" htmlFor="exampleRadios3">
                  Option 3
                </label>
              </div>
            </form>
            <CodeSnippet
              snippet={`<form>
  <div class="form-check form-group">
    <input type="radio" class="form-check-input" value="Option 1" id="exampleRadios1"/>
    <label class="form-control-label" for="exampleRadios1">Option 1</label>
  </div>
  <div class="form-check form-group">
    <input type="radio" class="form-check-input" value="Option 2" id="exampleRadios2"/>
    <label class="form-control-label" for="exampleRadios2">Option 2</label>
  </div>
  <div class="form-check form-group">
    <input type="radio" class="form-check-input" value="Option 3" id="exampleRadios3"/>
    <label class="form-control-label" for="exampleRadios3">Option 3</label>
  </div>
</form>`}
            />
          </div>
        </div>
      </div>
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
