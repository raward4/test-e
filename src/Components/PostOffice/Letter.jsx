import React from "react"
import SelectQuantity from "./quantity"

const Letter = (props) => {
  const thisLetter = props.letters[props.id]

  return (
    <>
      <tr>
        <td id="letter-date">{thisLetter.date}</td>
        <td id="letter-recipient">{thisLetter.recipient}</td>
        <td id="letter-sender">{thisLetter.sender}</td>
        <div class="letter-subject">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">{thisLetter.subject[0]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[1]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[2]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[3]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[4]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[5]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[6]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[7]}</a>
    <a class="dropdown-item" href="#">{thisLetter.subject[8]}</a>
  </div>
</div>
        <td id="letter-checkbox">
          <input
            name="isRead"
            type="checkbox"
            checked={thisLetter.read}
            onChange={() => props.markAsRead(props.id, !thisLetter.read)}
          />
        </td>
      </tr>
      <tr>
        <td id="letter-content" colSpan="5">
          {thisLetter.content}
        </td>
      </tr>
    </>
  )
}

export default Letter