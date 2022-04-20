
import React from "react"
import '../../styles/Resources.css'
import { resources } from "../../data/resources";

function Resources(props) {
  const resourcesItems = resources.map((resources) =>
  <li id='rsc'> 
    <> {resources.title}</> 
    <form action={resources.link}>
         <button class='rscbtn' type="submit">Click me</button>
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