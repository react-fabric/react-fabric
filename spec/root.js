import React from 'react'
import cssm from 'react-css-modules'

import IconComponent from './components/IconComponent.js'

import style from './style'

// const FabricProvider = ({ children }) => (
//   <div>{ children }</div>
// )
// FabricProvider.propTypes = {
//   children: React.PropTypes.any
// }
// FabricProvider.childContextTypes = {
//   fabric: React.PropTypes.object
// }
// FabricProvider.getChildContext = () => {
//   console.log('getChildContext')
//   return ({
//     fabric: {
//       plainClasses: true
//     }
//   })
// }

const Root = () => (
  <div>
    <h1>react-fabric@{VERSION}</h1>
    <IconComponent />
  </div>
)

export default cssm(Root, style)
