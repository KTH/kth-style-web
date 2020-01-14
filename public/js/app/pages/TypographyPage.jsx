import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'

const TableRows = ({ list }) => {
  return list.map((row, index) => (
    <tr key={index} className="tableRow">
      <td>
        <span className={row.className}>{row.text}</span>
      </td>
      <td>
        <code className="language-html">{row.html}</code>
      </td>
      <td>
        <code>{row.css}</code>
      </td>
      <td>
        <ul>
          {row.usedFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </td>
    </tr>
  ))
}

export const Main = props => {
  const tableRows = [
    { className: 't1', text: 'H1 - Heading', html: '<h1></h1>', css: '@include t1;', usedFor: ['Rubrik nivå 1'] },
    { className: 't2', text: 'H2 - Heading', html: '<h2></h2>', css: '@include t2;', usedFor: ['Rubrik nivå 2'] },
    {
      className: 't24',
      text: 'H2 - Heading',
      html: '<h2 class="t24"></h2>',
      css: '@include t24;',
      usedFor: ['Rubrik puffblock bred']
    },
    {
      className: 't3',
      text: 'H3 - Heading',
      html: '<h3></h3>',
      css: '@include t3;',
      usedFor: ['Rubrik nivå 3 (i artikel)']
    },
    {
      className: 't4',
      text: 'H4 - Heading',
      html: '<h4></h4>',
      css: '@include t4;',
      usedFor: ['Rubrik nivå 4', 'Blockrubrik', 'Rubrik puffblock smal', 'Menyrubrik', 'Sitename']
    },
    {
      className: 't11',
      text: 'P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      html: '<p></p>',
      css: '@include t11;',
      usedFor: ['Brödtext puff']
    },
    {
      className: 't12',
      text: 'P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      html: '<p class="t12"></p>',
      css: '@include t12;',
      usedFor: ['Brödtext artikel']
    },
    {
      className: 't10',
      text: 'P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      html: '<p class="t10"></p>',
      css: '@include t10;',
      usedFor: ['Ingress', 'Megameny', 'Blockquote']
    }
  ]

  return (
    <div className="mainContent">
      <h1>Typografi</h1>
      <p>Detta är en lista med olika rubriker och varianter på brödtext som finns i KTH-style.</p>
      <p>
        Observera att de Sass-mixins som listas endast behöver användas om man vill få detta utseende på något annat än
        det element som denna är avsedd för (Till exempel så skulle man kunna lägga till{' '}
        <code>{'p { @include t4; }'}</code> i sin Sass för att få h4-stil på en paragraf-tagg). Mixins kan också
        användas istället för klassnamnen nedan. Inget klassnamn eller mixin krävs för standard-element av typen
        h1,h2,h3,h4 och p utan endast för vissa varianter av dessa.
      </p>
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th>Exempeltext</th>
            <th>Html</th>
            <th>Sass mixin</th>
            <th>Användningsområde</th>
          </tr>
          <TableRows list={tableRows} />
        </thead>
      </table>
      {/* <p>{`Message from styleStore: ${props.message}`}</p> */}
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
