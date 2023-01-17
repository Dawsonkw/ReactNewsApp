import { useState } from 'react'
import './App.css'
import ApiHandler from './components/ApiHandler'
import NewsApp from './components/NewsApp'
// import NewsCard from './components/NewsCard'

function App() {

  return (
    <div>
      <h1 className='text-xl text-red-500 underline'>MMA News App</h1>
      <p>This is a News app for mixed martial arts that utilizes the newsdata.io and the newsAPI.org api's to deliver MMA based news content.</p>
      <ApiHandler />
      {/* <NewsCard /> */}
      <NewsApp />
    </div>
  )
}

export default App
