import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'

const TypographyItems = ({ list }) => {
  return list.map((row, index) => (
    <div key={index} className="itemBox typographyItem border">
      <span className={row.className}>{row.text}</span>
      <p>
        <strong>HTML: </strong>
        <code className="language-html">{row.html}</code>
      </p>
      <p>
        <strong>Sass: </strong>
        <code>{row.sass}</code>
      </p>
      <div>
        <p>
          <strong>Användningsområde: </strong>
        </p>
        <ul>
          {row.usedFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ))
}

export const Main = props => {
  const tableRows = [
    {
      className: 't1',
      text: 'H1 - Heading',
      html: '<h1></h1>',
      sass: 'h1 { @include t1; }',
      usedFor: ['Rubrik nivå 1']
    },
    {
      className: 't2',
      text: 'H2 - Heading',
      html: '<h2></h2>',
      sass: 'h2 { @include t2; }',
      usedFor: ['Rubrik nivå 2']
    },
    {
      className: 't24',
      text: 'H2 - Heading',
      html: '<h2 class="t24"></h2>',
      sass: 'h2 { @include t24; }',
      usedFor: ['Rubrik puffblock bred']
    },
    {
      className: 't3',
      text: 'H3 - Heading',
      html: '<h3></h3>',
      sass: 'h3 { @include t3; }',
      usedFor: ['Rubrik nivå 3 (i artikel)']
    },
    {
      className: 't4',
      text: 'H4 - Heading',
      html: '<h4></h4>',
      sass: 'h4 { @include t4; }',
      usedFor: ['Rubrik nivå 4', 'Blockrubrik', 'Rubrik puffblock smal', 'Menyrubrik', 'Sitename']
    },
    {
      className: 't11',
      text: 'P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      html: '<p></p>',
      sass: '@include t11;',
      usedFor: ['Brödtext puff']
    },
    {
      className: 't12',
      text: 'P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      html: '<p class="t12"></p>',
      sass: '@include t12;',
      usedFor: ['Brödtext artikel']
    },
    {
      className: 't10',
      text: 'P - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      html: '<p class="t10"></p>',
      sass: '@include t10;',
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

      <div className="itemContainer">
        <TypographyItems list={tableRows} />
      </div>

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
