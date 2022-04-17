
const SelectQuantity = (props) => {
  return (
    <select required name="quantity" onChange={(e) => props.setQuantity(e.target.value)}>
      <option value="">Select amt in oz</option>
      {props.quantity.map((num) => (
        <option key={num} value={num}>PO Box {num}</option>
      ))}
    </select>
  )
}

export default SelectQuantity