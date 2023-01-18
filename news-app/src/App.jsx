import { useState } from 'react'
import './App.css'
import ApiHandler from './components/ApiHandler'
import Header from './components/Header'
import NewsApp from './components/NewsApp'
// import NewsCard from './components/NewsCard'

function App() {


  return (
    <div>
      <Header /> 
      {/* <CarouselPic /> */}
      <h1 className='text-xl text-red-500 underline'>MMA News App</h1>
      <p>This is a News app for mixed martial arts that utilizes the gNews.io and newsAPI.org api's to deliver MMA based news content.</p>
      <ApiHandler />
      <NewsApp />
    </div>
  )
}

export default App
