import React from 'react'
import { render } from 'react-dom'

import Sample from './containers/Sample/state'

render(
  <Sample />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
