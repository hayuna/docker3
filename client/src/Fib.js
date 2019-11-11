import React from 'react';
import axios from 'axios';

const Fib = () => {

  const getDefinition = async() => {
    const { data } = await axios.get('/api/random')
    console.log(data)
  }

  const getTest = async() => {
    const { data } = await axios.get('/api/tests')
    console.log(data)
  }

  return (
    <div>
      <button onClick={getDefinition}>Get Definition</button>
      <button onClick={getTest}>Get Test</button>
    </div>
  );
}

export default Fib;