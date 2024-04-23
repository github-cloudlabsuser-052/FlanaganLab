import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;
const sentence = "take a sentence as input";
const reversedSentence = sentence.split(" ").reverse().join(" ");
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);

const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 35 }
];

const names = data.map(item => item.name);
console.log(names);
const nestedData = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ],
  [
    { name: 'Alice', age: 28 },
    { name: 'Eve', age: 32 },
    { name: 'Charlie', age: 40 }
  ]
];

const names = nestedData.flatMap(array => array.map(item => item.name));
console.log(names);