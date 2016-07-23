import React from 'react'
import cssm from 'react-css-modules'

import ButtonSection from './sections/ButtonSection.js'
import ChoiceFieldSection from './sections/ChoiceFieldSection.js'
import DialogSection from './sections/DialogSection.js'
import DropdownSection from './sections/DropdownSection.js'
import IconSection from './sections/IconSection.js'
import LinkSection from './sections/LinkSection.js'
import ListSection from './sections/ListSection.js'
import SearchBoxSection from './sections/SearchBoxSection.js'
import TableSection from './sections/TableSection.js'

import style from './style'

const Root = () => (
  <div>
    <h1>react-fabric@{VERSION}</h1>
    <ButtonSection />
    <ChoiceFieldSection />
    <DialogSection />
    <DropdownSection />
    <IconSection />
    <LinkSection />
    <ListSection />
    <SearchBoxSection />
    <TableSection />
  </div>
)

export default cssm(Root, style)
