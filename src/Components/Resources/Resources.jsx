
import React from "react"
import '../../styles/App.css'
import { resources } from "../../data/resources";

function Resources(props) {
  const resourcesItems = resources.map((resources) =>
   <li key={resources.id}>
    <h3> {resources.title}</h3> 
    <form action={resources.link}>
         <button type="submit">Click me</button>
    </form>
   </li>
  )
;
return (
  <div>
  {resourcesItems}
  </div>
)
}

export default Resources