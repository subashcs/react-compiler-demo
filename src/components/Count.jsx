import React from 'react'

export const Count = ({onClick}) => {
  console.log("compiler check: count component called");
  return (
    <div className="card">
    <button onClick={onClick}>
      Increment Count
    </button>
  </div>
  )
}