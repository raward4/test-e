import React from "react";
import Alert from "react-bootstrap/Alert";

const JokeButton = (props) => {
  return (
      <button onClick={props.callApi}>
      <Alert variant="success">
        <button onClick={DadJokes}>Joke</button></Alert>
        </button>
        )
};

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
      <div>{Joke === "" ? <JokeButton callApi={fetchApi} /> : 
        <>
          <Alert variant="success" style={{ width: "42rem" }}>
<Alert.Heading>
  {Joke}
</Alert.Heading>
</Alert></>}     
      </div>
      );

      /*
      <button onClick={DadJoke}</button>
  JokeButton
<div>
<Alert variant="success" style={{ width: "42rem" }}>
<Alert.Heading>
  {Joke}
</Alert.Heading>
</Alert>
</div>
      */
}
  
export default DadJokes


//<button onClick={JokeAlert}>Dad Jokes</button>

