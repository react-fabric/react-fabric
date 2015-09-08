import React from 'react'
import { Link } from 'react-router'

import { Button } from 'react-fabric'

export default class Home extends React.Component {
  render() {
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row ms-bgColor-themePrimary" style={{padding: '20px 0'}}>
          <h1 className="ms-Grid-col ms-u-sm12" style={{textAlign: 'center'}}>
            <div className="ms-font-su ms-fontColor-white">
              react-fabric
            </div>
            <small className="ms-font-xl ms-fontColor-white">
              Office UI Fabric components built with React.
            </small>
          </h1>
        </div>
        <div className="ms-Grid-row" style={{padding: '20px 0'}}>
          <div className="ms-Grid-col ms-u-sm3" />
          <div className="ms-Grid-col ms-u-sm6" style={{textAlign: 'center'}}>
            <p className="ms-font-xl" style={{padding: '180px 0'}}>
              [[awesome teaser text and stuff]]
            </p>
            <p className="ms-font-m-plus">
              Meanwhile, check out the <Link to="/components">Components</Link> page.
            </p>
          </div>
          <div className="ms-Grid-col ms-u-sm3" />
        </div>
        <div className="ms-Grid-row ms-bgColor-themeLight" style={{padding: '20px 0'}}>
          <div className="ms-Grid-col ms-u-sm3" />
          <div className="ms-Grid-col ms-u-sm6" style={{textAlign: 'center'}}>
            <p className="ms-font-m-plus">
              Want to help? Check out the repository
            </p>
            <p>
              <a href="https://github.com/kmees/react-fabric">
                <Button>GitHub</Button>
              </a>
            </p>
          </div>
          <div className="ms-Grid-col ms-u-sm3" />
        </div>
      </div>
    )
  }
}
