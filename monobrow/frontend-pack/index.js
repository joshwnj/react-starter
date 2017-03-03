const babelify = require('babelify')
const monobrow = require('monobrow')

module.exports = monobrow.pack({
  vendor: [
    'classnames',
    'react',
    'react-dom',
    'redux',
    'redux-thunk',
    'redux-logger',
    'react-redux',
    'react-router',
    'react-router-redux',
    'xhr'
  ],

  setup: function setup (b, opts) {
    b.transform(babelify)
  }
})
