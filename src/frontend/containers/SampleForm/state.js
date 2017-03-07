import React from 'react'

import Component from './index.js'

const presets = {}

presets.init = {
  text: '',
  isChecked: false,
  isSubmitting: false,
  error: null
}

presets.submitting = {
  ...presets.init,
  isSubmitting: true
}

presets.error = {
  ...presets.init,
  error: new Error('something bad happened')
}

presets.withValues = {
  ...presets.init,
  text: 'here is some text',
  isChecked: true
}

presets.textOnly = {
  ...presets.withValues,
  isChecked: false
}

presets.checkboxOnly = {
  ...presets.withValues,
  text: ''
}

// stateful container
module.exports = React.createClass({
  displayName: 'State',

  getInitialState: function () {
    return presets.checkboxOnly
  },

  render: function () {
    return <Component {...this.state} />
  }
})
