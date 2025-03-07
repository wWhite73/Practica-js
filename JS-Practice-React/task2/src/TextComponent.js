import React, { useState } from 'react';

const TextComponent = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);

  // Разделяем текст на предложения
  const sentences = text.split('.').filter(sentence => sentence.trim() !== '');
  const firstSentence = sentences[0] ? `${sentences[0]}.` : '';

  const toggleText = () => {
    setShowFullText(prev => !prev);
  };

  return (
    <div>
      <p>{showFullText ? text : firstSentence}</p>
      <button onClick={toggleText}>
        {showFullText ? 'Скрыть' : 'Показать подробнее'}
      </button>
    </div>
  );
};

export default TextComponent;