import React, { useState } from 'react';
import { Button } from 'reactstrap';

// ant.design
export default function ReviewFunction() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <Button color='danger' onClick={() => setCounter(counter + 1)}>
        Click Me
      </Button>
    </div>
  );
}
