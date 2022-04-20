import React from "react";

const JokeButton = (props) => {
  return (
      <button onClick={props.callApi}>
        <button onClick={DadJokes}>Click for Dad Joke</button>
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
        <prompt>{Joke}</prompt>}</div>
    )
}

export default DadJokes