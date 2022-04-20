import React from "react";

const JokeButton = (props) => {
  return (
      <button class='dj' onClick={props.callApi}>
        <button class='dj' onClick={DadJokes}>Click for Dad Joke</button>
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
         <div class='djoke'><h1>Need a lift-me-up?</h1>
         <div>{Joke === "" ? <JokeButton callApi={fetchApi} /> : 
        <prompt>{Joke}</prompt>}</div></div>
    )
}

export default DadJokes