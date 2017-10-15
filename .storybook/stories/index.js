import React from 'react'
import { storiesOf } from '@storybook/react'
import Car from '../../svg/car.svg'

storiesOf('Info', module).add('Info', () => (
  <div>
    <h1>Design System</h1>
    <p>
      Created using{' '}
      <a href="https://storybook.js.org" className="link">
        React Storybook
      </a>
    </p>
  </div>
))
