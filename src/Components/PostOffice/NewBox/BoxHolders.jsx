import React from "react"

const BoxHolders = (props) => {
  return (
    <div className="box-holders">
      {props.boxHolders.length ? <h4>Box Holders:</h4> : <h4>Add a Boxholder</h4>}
      {props.boxHolders.map((name, id) => (
        <div key={name}>
          <p>{name}</p>
          <button onClick={() => props.removeBoxHolder(name)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default BoxHolders