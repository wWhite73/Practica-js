import React, { useRef } from 'react';

const MyForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы
    console.log(inputRef.current.value); // выводим значение в консоль
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введите значение:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;