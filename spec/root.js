import React from 'react'
import cssm from 'react-css-modules'

import ButtonSection from './sections/ButtonSection.js'
import ChoiceFieldSection from './sections/ChoiceFieldSection.js'
import DialogSection from './sections/DialogSection.js'
import DropdownSection from './sections/DropdownSection.js'
import IconSection from './sections/IconSection.js'
import LinkSection from './sections/LinkSection.js'

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
    <ButtonSection />
    <ChoiceFieldSection />
    <DialogSection />
    <DropdownSection />
    <IconSection />
    <LinkSection />
  </div>
)

export default cssm(Root, style)
