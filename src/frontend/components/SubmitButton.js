import React from 'react'
import cmz from 'cmz'
import { blue } from '../colors'
import { smallLabel } from '../styles'

const button = cmz(`
& {
  background: #fff;
  border-color: #333;
  border-radius: 4px;
  padding: 8px 24px;
}

&:hover {
  color: ${blue};
  border-color: ${blue};
}

&[disabled] {
  color: #ccc;
  border: 2px solid #999;
}
`).compose(smallLabel)

const primaryButton = cmz(`
  background: ${blue};
  color: #fff;
  border-color: #fff;
`).compose(button)

module.exports = function (props) {
  return props.isSubmitting ?
    <span>Submitting...</span> :
    <button
      className={props.primary ? primaryButton : button}
      onClick={props.onClick}
      disabled={!props.canSubmit}
    >Submit</button>
}
