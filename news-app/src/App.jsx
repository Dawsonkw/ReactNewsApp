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
      
      <ApiHandler />
      <NewsApp />
    </div>
  )
}

export default App


// 
// TO DO: 
// 
// Figure out how to do the Carousel
//  try using this library https://react-slick.neostack.com/docs/example/focus-on-select
//  https://stackoverflow.com/questions/53538992/loading-dynamic-images-fetched-using-api-in-react-responsive-carousel-react
//  
// 