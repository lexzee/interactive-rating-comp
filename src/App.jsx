import { useState } from 'react'
import './App.css'
// import starIcon from './images/icon-star.svg';
// import thankIcon from './images/illustration-thank-you.svg'
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Rating />} />
          <Route path='/thanks' element={<ThankYou />} />
        </Routes>
        {/* <Rating />
        <ThankYou /> */}
        {/* <!-- Thank you state end --> */}
      </div>


      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/lexzee">Lexzee</a>.
      </div>
    </>
  )
}


export default App
