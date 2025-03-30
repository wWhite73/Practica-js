import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.backgroundColor);

  const handleChange = (event) => {
    const color = event.target.value;
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <div style={{ backgroundColor, height: '100vh', transition: 'background-color 0.5s' }}>
      <input type="color" onChange={handleChange} />
      <p>Выберите цвет фона</p>
    </div>
  );
};

export default ColorPicker;