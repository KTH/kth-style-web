import React from 'react'
import { observer } from 'mobx-react'
import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Col 1</th>
          <th scope="col">Col 2</th>
          <th scope="col">Col 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Lorem ipsum</td>
          <td>Dolor sit amet</td>
          <td>Consectetur adipiscing elit</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Lorem ipsum</td>
          <td>Dolor sit amet</td>
          <td>Consectetur adipiscing elit</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Lorem ipsum</td>
          <td>Dolor sit amet</td>
          <td>Consectetur adipiscing elit</td>
        </tr>
      </tbody>
    </table>
  )
}

export const Main = props => {
  const snippet = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Col 1</th>
      <th scope="col">Col 2</th>
      <th scope="col">Col 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Lorem ipsum</td>
      <td>Dolor sit amet</td>
      <td>Consectetur adipiscing elit</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Lorem ipsum</td>
      <td>Dolor sit amet</td>
      <td>Consectetur adipiscing elit</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Lorem ipsum</td>
      <td>Dolor sit amet</td>
      <td>Consectetur adipiscing elit</td>
    </tr>
  </tbody>
</table>`

  return (
    <main id="mainContent" className="mainContent">
      <h1>Tabeller</h1>
      <Table />
      <CodeSnippet snippet={snippet} />
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
