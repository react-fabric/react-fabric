import React from 'react'

import ChoiceField from '../../src/ChoiceField'

const ButtonSection = () => (
	<section className="choice-field-section">
    <h2>ChoiceField</h2>
    <div>
      <ChoiceField label="Checkbox" />
      <ChoiceField type="radio" label="Radio" />
    </div>
	</section>
)

export default ButtonSection
