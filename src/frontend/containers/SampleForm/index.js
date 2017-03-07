import React from 'react'
import SubmitButton from '../../components/SubmitButton'

module.exports = function SampleForm (props) {
  if (props.error) {
    return <div style={{color: 'red'}}>{props.error.toString()}</div>
  }

  const canSubmit = props.text && props.isChecked

  return <form>
    <input type='text' value={props.text} />
    <input type='checkbox' checked={props.isChecked} />
    <SubmitButton canSubmit={canSubmit} isSubmitting={props.isSubmitting} />
  </form>
}
