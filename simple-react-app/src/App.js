import React, { useState } from 'react';
import Header from './Header';

function App() {
  // Declare a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="My React App" />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;