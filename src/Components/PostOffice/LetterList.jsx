import React from "react"
import Letter from './Letter'

const LetterList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th width="8%">Date</th>
          <th>Event</th>
          <th>Details</th>
          <th>Amount</th>
          <th width="2%">Note</th>
        </tr>
      </thead>
      <tbody>
        {props.letterIds.map((id) => (
          <Letter key={id} id={id} letters={props.letters} markAsRead={props.markAsRead} />
        ))}
      </tbody>
    </table>
  )
}

export default LetterList