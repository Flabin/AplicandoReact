import { useState } from "react";
import { Tweet } from "./components/tweet";

  function App() {
    const [tweets, setTweet] = useState<string[]>([
      'Tweet 1',
      'Tweet 2',
      'Tweet 3',
      'Tweet 4',
    ])

    function createTweet(){
      setTweet([...tweets,'tweet 5', 'tweet 6'])
    }

    return ( 
      <div> 
        {tweets.map(tweet => {
          return <Tweet text={tweet} />
        })}

        <button onClick={createTweet}>Adicionar tweet</button>
    </div>
    );
  }

export default App
