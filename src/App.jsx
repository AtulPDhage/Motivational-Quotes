import React, { useEffect, useState } from 'react'



const App = () => {

  // Array containing 1000 motivational quotes for studying
const studyQuotes = [
    "Success is the sum of small efforts, repeated day in and day out.",
    "The expert in anything was once a beginner.",
    "Study hard, for the well is deep, and our brains are shallow.",
    "The way to get started is to quit talking and begin doing.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Wake up with determination. Go to bed with satisfaction.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    // ... (continue adding more quotes up to 1000)
    "Small daily improvements over time lead to stunning results.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Believe in yourself, and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Don’t limit your challenges, challenge your limits.",
    "Doubt kills more dreams than failure ever will.",
    "Your only limit is your mind.",
    "Dream it. Wish it. Do it.",
    "Work hard in silence; let success make the noise.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    // ... and so on up to 1000 quotes
];

const [quote, setQuote] = useState(studyQuotes[0]);

// Function to display a random motivational quote for studying
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * studyQuotes.length);
    setQuote(studyQuotes[randomIndex]) ;
}

 setInterval((getRandomQuote),(60000))

  return (
    
    <div className=' w-screen h-screen flex justify-center items-center  flex-col text-white bg-gray-800 max-h-screen gap-4' >
      <h2 className='text-xl font-bold  text-yellow-400 '>Motivational Quotes ✨</h2>
      <div className=' w-1/2 h-1/2 flex flex-wrap border-2 border-cyan-700 shadow-slate-50 shadow-2xl  items-center'>
       <h1 className=' p-4 text-center text-2xl sm:text-4xl font-bold rounded-3xl container'>
       {quote}
       </h1>
      </div>
    </div>
  )
}

export default App
