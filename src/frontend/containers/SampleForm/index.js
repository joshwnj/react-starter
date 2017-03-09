import React from 'react'
import cmz from 'cmz'
import SubmitButton from '../../components/SubmitButton'

const styles = cmz({
  form: `
  background: #eee;
  padding: 30px;
`,

  textInput: `
  background: transparent;
  border: none;
  border-bottom: 1px solid #999;
`
})


module.exports = function SampleForm (props) {
  if (props.error) {
    return <div style={{color: 'red'}}>{props.error.toString()}</div>
  }

  const canSubmit = props.text && props.isChecked

  return <form className={styles.form}>
    <input className={styles.textInput}
           type='text'
           value={props.text}
           onChange={props.onTextChange} />
    <input type='checkbox' checked={props.isChecked} onChange={props.onCheckboxChange} />
    <SubmitButton
      primary
      canSubmit={canSubmit}
      isSubmitting={props.isSubmitting}
      onClick={props.onSubmit} />
  </form>
}
