import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter">
      <textarea
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
