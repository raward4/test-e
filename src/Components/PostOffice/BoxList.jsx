import React from "react"
import { Link } from "react-router-dom"
import BabiesImg from '../../assets/babiesstrol.png'

const BoxList = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <section className="po-box-list">
      <h1><img id="babyimg" src={BabiesImg} alt="Babies" /></h1>
      <h4>Babies Overview: Select a baby to see a timelog of feedings, diapers, and sleep</h4>
      {boxList.map((boxNo) => (
        <Link 
          className="po-box masked-corners" 
          to={`/postoffice/${boxNo}`} 
          key={boxNo}
        >
          <div className="inner-po-box masked-corners">
            {boxNo}
          </div>
        </Link>
      ))}
    </section>
  )
}

export default BoxList