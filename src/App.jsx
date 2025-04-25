import { useState } from "react";

function App() {
  const [target] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const checkGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      setMessage("Please enter a valid number!");
      return;
    }

    if (numGuess === target) {
      setMessage('Congratulations! You guessed the correct number');
    } else {
      setMessage(numGuess > target ? 'Too High!' : 'Too Low!');
    }
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 10</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={checkGuess}>Check</button>
      <p>{message}</p>
      {message.startsWith("Congratulations") && <p>The target number was: {target}</p>}
    </div>
  );
}

export default App;