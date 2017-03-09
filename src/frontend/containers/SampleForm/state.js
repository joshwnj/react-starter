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
    return presets.withValues
  },

  onTextChange: function (e) {
    const value = e.target.value
    if (!/^[0-9]+$/.test(value)) { return }

    this.setState({
      text: value
    })
  },

  onCheckboxChange: function (e) {
    this.setState({
      isChecked: e.target.checked
    })
  },

  onSubmit: function (e) {
    e.preventDefault()

    this.setState({
      isSubmitting: true
    })

    setTimeout(() => {
      this.setState({
        isSubmitting: false
      })
    }, 2000)
  },

  render: function () {
    return <Component {...this.state}
      onTextChange={this.onTextChange}
      onCheckboxChange={this.onCheckboxChange}
      onSubmit={this.onSubmit}
      />
  }
})
