import React from 'react'

module.exports = function (props) {
  return props.isSubmitting ?
    <span>Submitting...</span> :
    <button disabled={!props.canSubmit}>Submit</button>
}
