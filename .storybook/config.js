import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import pkg from '../package.json'

setOptions({
  name: pkg.name,
  url: 'https://2020.nimbletankdemo.com',
  downPanelInRight: false
})

function loadStories() {
  require('./stories/index.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
