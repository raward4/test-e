import React from "react"

const SelectBox = (props) => {
  return (
    <select required name="boxNo" onChange={(e) => props.setBoxNum(e.target.value)}>
      <option value="">Select Baby</option>
      {props.boxNumbers.map((num) => (
        <option key={num} value={num}>Baby {num}</option>
      ))}
    </select>
  )
}

export default SelectBox