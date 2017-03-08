import React from 'react'

module.exports = function Sample (props) {
  if (props.loading) {
    return <div>Loading...</div>
  }

  if (props.error) {
    return <div style={{color: 'red'}}>{props.error.toString()}</div>
  }

  if (props.result) {
    return <div>{props.result.message}</div>
  }

  return <div>Nothing loaded</div>
}
