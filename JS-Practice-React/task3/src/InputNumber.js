import React, { useState } from 'react';
import Message from './Message'; // Импортируем компонент Message

const InputNumber = () => {
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={handleChange} 
        placeholder="Введите число" 
      />
      <Message number={number} />
    </div>
  );
};

export default InputNumber;