import React from "react";
import ReactDOM from "react-dom";
  
const Button = (props) => {
  return <button onClick={props.callApi}>
   Dad Joke
   </button>;
}
const DadJokes = () => {
    const [Joke, setJoke] = React.useState("");
  
    const fetchApi = () => {
        // Fetching data from the API
            fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
      };
    return (
        // Return the Button Component with a conditional statement
        <div>{Joke === "" ? <Button callApi={fetchApi} /> : 
<p>{Joke}</p>
}</div>
      );
}
  
export default DadJokes
