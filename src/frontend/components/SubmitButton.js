import React from 'react'

module.exports = function (props) {
  return props.isSubmitting ?
    <span>Submitting...</span> :
    <button
      onClick={props.onClick}
      disabled={!props.canSubmit}
    >Submit</button>
}
