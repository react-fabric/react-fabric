import React from 'react'

import Button from '../../src/Button'

const ButtonSection = () => (
	<section className="button-section">
    <h2>Button</h2>
    <div>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button disabled>Disabled</Button>
    </div>
    <div>
      <Button type="command" glyph="star">Command</Button>
      <Button type="compound" description="with description">Compound</Button>
    </div>
    <div>
      <Button type="hero" glyph="star">Hero</Button>
    </div>
	</section>
)

export default ButtonSection
