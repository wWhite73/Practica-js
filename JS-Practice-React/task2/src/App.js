import React from 'react';
import TextComponent from './TextComponent'; // Импортируем наш компонент

function App() {
  const text = "Это первое предложение. Это второе предложение. И это третье предложение.";

  return (
    <div>
      <h1>Компонент текста</h1>
      <TextComponent text={text} />
    </div>
  );
}

export default App;