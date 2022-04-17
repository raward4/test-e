import React from "react"

const SelectRecipient = (props) => {
  return (
    <select required name="recipient" onChange={props.handleChange}>
      <option value="">Select Amount</option>
      {props.selectedBox?.map((name, idx) => (
        <option key={idx} value={name}>{name}</option>
      ))}
    </select>
  )
}

export default SelectRecipient