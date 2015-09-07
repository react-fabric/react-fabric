import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ms-NavBar">
          <ul className="ms-NavBar-items">
            <li className="ms-NavBar-item">
              <Link className="ms-NavBar-link" to="/">react-fabric</Link>
            </li>
            <li className="ms-NavBar-item ms-NavBar-item--right">
              <a href="https://www.github.com/kmees/react-fabric" >
                <img src="/images/GitHub-Mark-32px.png" width="24" style={{padding: '8px'}} />
              </a>
            </li>
            <li className="ms-NavBar-item ms-NavBar-item--right">
              <Link className="ms-NavBar-link" to="components">Components</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}
