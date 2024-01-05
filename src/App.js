import React, { useState } from "react";
import "./App.css";

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Life is what happens when you're busy making other plans. - Allen Sanders",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only way to do great work is to love what you do. - Steve Jobs",
];

function App() {
  const [randomQuote, setQuote] = useState(quotes[0]);

  function buttonClick() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(quote);
  }
  return (
    <div className="App">
      <div className="randomQuote"> {randomQuote}</div>
      <button className="nextQuote" onClick={buttonClick}>
        Next Quote
      </button>
    </div>
  );
}

export default App;
