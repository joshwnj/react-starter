import React from 'react'

import Component from './index.js'

const presets = {}

presets.init = {
  loading: false,
  error: null,
  result: null
}

presets.loading = {
  ...presets.init,
  loading: true
}

presets.error = {
  ...presets.init,
  error: new Error('something bad happened')
}

presets.loaded = {
  ...presets.init,
  result: {
    message: 'Hello World'
  }
}

// stateful container
module.exports = React.createClass({
  displayName: 'State',

  getInitialState: function () {
    return presets.loaded
  },

  render: function () {
    return <Component {...this.state} />
  }
})
