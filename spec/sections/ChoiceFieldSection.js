import React from 'react'

import ChoiceField from '../../src/ChoiceField'

const ButtonSection = () => (
  <section className="choice-field-section">
    <h2>ChoiceField</h2>
    <div>
      <ChoiceField name="choice1" label="Checkbox" />
      <ChoiceField name="choice2" type="radio" label="Radio" />
    </div>
  </section>
)

export default ButtonSection
