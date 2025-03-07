import React from 'react';

const Message = ({ number }) => {
  const num = parseFloat(number);

  if (!number) {
    return null; // Не показываем сообщение, если поле пустое
  }

  if (num > 0) {
    return <p>Число больше нуля</p>;
  } else if (num < 0) {
    return <p>Число меньше нуля</p>;
  } else {
    return <p>Число равно нулю</p>;
  }
};

export default Message;