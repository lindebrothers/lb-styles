import React from 'react';
import FlexView from './components/flex-view';

function App(props) {
  return (
    <React.Fragment>

    <FlexView className="section-card invert-all" style={{backgroundColor: 'palevioletred'}}>
      <div className="container section-card-inner" style={{backgroundColor: 'yellow'}}>
        <div className="row" style={{backgroundColor: 'sandybrown', padding: '0rem 0rem 2rem 0rem'}}>
          <div className="column" style={{marginTop: '7%', textAlign: 'center'}}>
            <h1 className="h1-super" >LB Styles</h1>
            <h4 style={{marginTop: '.8rem'}}>A sass boiler plate to quickly get started</h4>
          </div>
        </div>
      </div>
    </FlexView>

    <FlexView className="section-card color-bg-forth color-text-primary">
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <article className="columns">
            <h2>About</h2>
            <hr />
            <p>
              LB-styles is a light weighted boiler plate to establish <b>base</b> styles. It is based on SASS technology. You can modified and customize
              the preset and make it fit your personal design. The boiler plate is made to fit React applications and
              primarily Snowpack based project.
            </p>
            <h4>Get started</h4>
            
            <pre className="u-full-width">
              <code className="not-inverted">
                yarn add lb-styles
              </code>
            </pre>
            or
            <pre className="u-full-width">
              <code className="not-inverted">
                npm i -D lb-styles
              </code>
            </pre>
          </article>
        </div>
      </div>
    </FlexView>

    <FlexView className="section-card invert-all" style={{backgroundColor: 'palevioletred'}}>
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <div className="columns">
            <h2>Grid system</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="columns color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              twelve
          </div>
        </div>
        <div className="row">
          <div className="columns one color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              one
          </div>
          <div className="columns eleven color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              eleven
          </div>
        </div>
        <div className="row">
          <div className="columns two color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              two
          </div>
          <div className="columns ten color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              ten
          </div>
        </div>
        <div className="row">
          <div className="columns three color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              three
          </div>
          <div className="columns nine color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              nine
          </div>
        </div>
        <div className="row">
          <div className="columns four color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              four
          </div>
          <div className="columns eight color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              eight
          </div>
        </div>
        <div className="row">
          <div className="columns five color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              five
          </div>
          <div className="columns seven color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              seven
          </div>
        </div>
        <div className="row">
          <div className="columns six color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              six
          </div>
          <div className="columns six color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              six
          </div>
        </div>
        <div className="row">
          <div className="columns seven color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              seven
          </div>
          <div className="columns five color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              five
          </div>
        </div>
        <div className="row">
          <div className="columns eight color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              eight
          </div>
          <div className="columns four color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              four
          </div>
        </div>
        <div className="row">
          <div className="columns nine color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              nine
          </div>
          <div className="columns three color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              three
          </div>
        </div>
        <div className="row">
          <div className="columns ten color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              ten
          </div>
          <div className="columns two color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              two
          </div>
        </div>
        <div className="row">
          <div className="columns eleven color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              eleven
          </div>
          <div className="columns one color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              one
          </div>
        </div>
        <div className="row">
          <div className="columns color-bg-secondary" style={{padding: 5, textAlign: 'center', marginBottom:16}}>
              twelve
          </div>
        </div>
        <div className="row">
          <div className="columns">
              Example
              <pre>
                <code className="not-inverted">{
`<div className="container">
  <div className="row">
    <div className="columns four">
      four
    </div>
    <div className="columns eight">
      eight
    </div>
  </div>
</div>`
                }</code>
              </pre>
          </div>
        </div>
        <div className="row" style={{margin:'4rem 0rem 4rem 0rem'}}>
          <div className="columns">
            <h2>Responsive break points</h2>
            <hr />
          </div>
        </div>
        <div className="row" style={{margin:'4rem 0rem 4rem 0rem'}}>
          <div className="columns two color-bg-fifth" style={{height: '20rem'}}>
            <FlexView>
              <h6>Small</h6>
              <div>0px</div>
            </FlexView>
          </div>
          <div className="columns four color-bg-fifth " style={{height: '20rem'}}>
            <FlexView>
              <h6>Medium</h6>
              <div>400px</div>
            </FlexView>
          </div>
          <div className="columns six color-bg-fifth" style={{height: '20rem'}}>
            <FlexView>
              <h6>Large</h6>
              <div>600px</div>
            </FlexView>
          </div>
        </div>
      </div>
    </FlexView>

    <FlexView className="section-card invert-all" style={{backgroundColor: 'Mediumvioletred'}}>
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <article className="columns">
            <h2>Typegraphy</h2>
            <hr />
            <h1 className="h1-super">H1 super headline</h1>
            <h1>H1 headline</h1>
            <h2>H2 headline</h2>
            <h3>H3 headline</h3>
            <h4>H4 headline</h4>
            <h5>H5 headline</h5>
            <h6>H6 headline</h6>
            <p>
              p <br />
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
      </div>
      </FlexView>
      <FlexView className="section-card color-bg-forth">
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <div className="columns">
            <h2>Buttons</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="columns">
              <h6>Default Buttons</h6>

          </div>
        </div>
        <div className="row">
          <div className="columns three">
              <a className="button u-full-width" href="#">Anchor button</a>
          </div>
          <div className="columns three">
              <button className="u-full-width" >Button element</button>
          </div>
          <div className="columns three">
            <input className="u-full-width" type="submit" value="submit input" />
          </div>
          <div className="columns three">
            <input className="u-full-width" type="button" value="button input" />
          </div>
        </div>
        <div className="row">
          <div className="columns">
              <h6>Primary Buttons</h6>
          </div>
        </div>
        <div className="row">
          <div className="columns three">
              <a className="button button-primary u-full-width" href="#">Anchor button</a>
          </div>
          <div className="columns three">
              <button className="button-primary u-full-width">Button element</button>
          </div>
          <div className="columns three">
            <input className="button button-primary u-full-width" type="submit" value="submit input" />
          </div>
          <div className="columns three">
            <input className="button button-primary u-full-width" type="button" value="button input" />
          </div>
        </div>
        <div className="row">
          <div className="columns">
              <h6>Secondary Buttons</h6>
          </div>
        </div>
        <div className="row">
          <div className="columns three">
              <a className="button button-secondary u-full-width" href="#">Anchor button</a>
          </div>
          <div className="columns three">
              <button className="button-secondary u-full-width">Button element</button>
          </div>
          <div className="columns three">
            <input className="button button-secondary u-full-width" type="submit" value="submit input" />
          </div>
          <div className="columns three">
            <input className="button button-secondary u-full-width" type="button" value="button input" />
          </div>
        </div>
        <div className="row">
          <div className="columns">
              <h6>Inverted Buttons</h6>
          </div>
        </div>
        <div className="row invert-all" style={{backgroundColor: 'palevioletred', padding: 16, paddingBottom: 0}}>
          <div className="columns three">
              <a className="button button-inverted u-full-width" href="#">Anchor button</a>
          </div>
          <div className="columns three">
              <button className="button-inverted u-full-width">Button element</button>
          </div>
          <div className="columns three">
            <input className="button-inverted u-full-width" type="submit" value="submit input" />
          </div>
          <div className="columns three">
            <input className="button-inverted u-full-width" type="button" value="button input" />
          </div>
        </div>
        <div className="row">
          <div className="columns">
              Example
              <pre>
                <code className="not-inverted">{
`<div className="container">
  <div className="row invert-all" style={{backgroundColor: 'salmon', padding: 16, paddingBottom: 0}}>
    <div className="columns three">
        <a className="button button-inverted u-full-width" href="#">Anchor button</a>
    </div>
    <div className="columns three">
        <button className="button-inverted u-full-width">Button element</button>
    </div>
    <div className="columns three">
      <input className="button-inverted u-full-width" type="submit" value="submit input" />
    </div>
    <div className="columns three">
      <input className="button-inverted u-full-width" type="button" value="button input" />
    </div>
  </div>
</div>`
            }</code>
              </pre>
            </div>
          </div>
      </div>
      </FlexView>
      <FlexView className="section-card invert-all color-bg-primary">
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <div className="columns">
            <h2>Forms</h2>
            <hr />
          </div>
        </div>
        <form>
        <div className="row">
          <div className="six columns">
            <label for="exampleEmailInput">Input Field</label>
            <input type="email" placeholder="Fill something short" id="exampleEmailInput" />
          </div>
          <div className="six columns">
            <label for="exampleRecipientInput">Select</label>
            <select id="exampleRecipientInput">
              <option value="Option 1">One option</option>
              <option value="Option 2">Another option</option>
              <option value="Option 3">The last option</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="columns eight">
            <label for="exampleMessage">Text area</label>
            <textarea style={{minHeight: 100}} placeholder="Fill with some words …"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="columns"></div>
            <label>
              <input type="checkbox" />
              <span> Checkbox</span>
            </label>
            <label>
              <input type="radio" />
              <span> Radio</span>
            </label>
            <input className="button-secondary" type="submit" value="Submit" />
          </div>
        </form>
        </div>
      </FlexView>
      <FlexView className="section-card invert-all color-bg-third">
      <div className="container">
        <div className="row">
          <div className="columns">
            <h2>Lists</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="columns six">
            <b>Batman</b>
            <ul>
              <li>
                Strength
                <ul>
                  <li>Strong</li>
                  <li>Healthy</li>
                </ul>
              </li>
              <li>Location
                <ul>
                  <li>Gotham City</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="columns six">
            <b>Joker</b>
            <ol>
              <li>
                Strength
                <ol>
                  <li>Funny</li>
                  <li>Smart</li>
                </ol>
              </li>
              <li>Location
                <ol>
                  <li>Underground</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
      </FlexView>
      <FlexView className="section-card invert-all color-bg-fifth">
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <article className="columns">
            <h2>Tables</h2>
            <hr />
            <table class="u-full-width">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Strength</th>
                  <th>Super powers</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Batman</td>
                  <td>110%</td>
                  <td>Strong and healthy</td>
                  <td>Gotham City</td>
                </tr>
                <tr>
                  <td>Joker</td>
                  <td>10%</td>
                  <td>Funny, Smart, Evil</td>
                  <td>Underground</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </FlexView>
    <FlexView className="section-card" style={{backgroundColor: 'mistyrose'}}>
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <article className="columns">
            <h2>Code</h2>
            <hr />
            <pre>
              <code>{`
                const location = (who) => {
                  return who === 'joker' ? 'Underground' : 'Gotham City'
                }
              `}</code>
            </pre>
          </article>
        </div>
      </div>
    </FlexView>
      <FlexView className="section-card">
      <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <article className="columns six">
            <h2>Dolor sit amet</h2>
            <hr />
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </article>
          <article className="columns six">
            <h3>Explicabo illo inventore veritatis</h3>
            <p>
              Soloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br/><br/> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br/><br/> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </article>
        </div>
      </div>
      </FlexView>
    <div className="container">
        <div className="row" style={{marginBottom:'4rem'}}>
          <article className="columns six">
            <h2>Without section</h2>
            <hr />
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </article>
          <article className="columns six">
            <h3>Explicabo illo inventore veritatis</h3>
            <p>
              Soloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br/><br/> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br/><br/> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </article>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;