import React from 'react'
import { observer } from 'mobx-react'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Typography</h1>
      <p>
        Read the guidelines for the use of different text formats in the{' '}
        <a
          href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/rubriker-och-
brodtext-1.952152"
        >
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <p>
        The Sass mixins which is listed below is only needed if you want the styling on a different element than the
        element here. For example: <code>{'p { @include t4; }'}</code> will give the paragraph element the h4 styling.
        Mixins could also be used instead of the class names below. No classes nor mixins is required for standard
        elements like h1,h2,h3,h4 and p. Just for some variants of these.
      </p>
      <h2>Headings</h2>
      <div className="itemContainer">
        <div className="itemBox typographyItem border">
          <h1 className="t1">H1 heading</h1>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;h1&gt;&lt;/h1&gt;</code>
          </p>
          <p>
            <strong>Sass: </strong>
            <code>h1 {'{ @include t1; }'}</code>
          </p>
        </div>

        <div className="itemBox typographyItem border">
          <header role="presentation">
            <h1 id="page-heading" aria-labelledby="page-heading page-sub-heading">
              Headline
            </h1>
            <p id="page-sub-heading" aria-hidden="true">
              Subheading that clarifies the main heading
            </p>
          </header>
          <CodeSnippet
            snippet={`<header role="presentation">
  <h1 id="page-heading" aria-labelledby="page-heading page-sub-heading">Headline</h1>
  <p id="page-sub-heading" aria-hidden="true">Sub headline</p>
</header>`}
          />
        </div>

        <div className="itemBox typographyItem border no-top-pad">
          <h2 className="t2">H2 heading</h2>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;h2&gt;&lt;/h2&gt;</code>
          </p>
        </div>

        <div className="itemBox typographyItem border">
          <h2 className="t24">H2 sub block</h2>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;h2&gt;&lt;/h2&gt;</code>
          </p>
        </div>

        <div className="itemBox typographyItem border no-top-pad">
          <h3 className="t3">H3 heading</h3>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;h3&gt;&lt;/h3&gt;</code>
          </p>
        </div>

        <div className="itemBox typographyItem border no-top-pad">
          <h4 className="t4">H4 heading</h4>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;h4&gt;&lt;/h4&gt;</code>
          </p>
        </div>

        <h2 className="t2">Paragraphs</h2>

        <div className="itemBox typographyItem border">
          <div className="paragraphs">
            <p>P body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;div class="paragraphs"&gt;&lt;p&gt;&lt;/p&gt;&lt;/div&gt;</code>
          </p>
        </div>

        <div className="itemBox typographyItem border">
          <p className="t11">P short text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;p&gt;&lt;/p&gt;</code>
          </p>
        </div>

        <div className="itemBox typographyItem border">
          <p className="lead">P lead text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <strong>HTML: </strong>
            <code className="language-html">&lt;p class="lead"&gt;&lt;/p&gt;</code>
          </p>
        </div>
      </div>
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
