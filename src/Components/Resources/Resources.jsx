
import React from "react"
import '../../styles/Resources.css'
import { resources } from "../../data/resources";

function Resources(props) {
  const resourcesItems = resources.map((resources) =>
  <li id='rsc'> 
    <h3> {resources.title}</h3> 
    <form action={resources.link}>
         <button type="submit">Click me</button>
    </form>
  </li>)
;
return (
  <div id="resourceL">
    <ol>
    {resourcesItems}
    </ol>
  </div>
)
}

export default Resources