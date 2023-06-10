import { useState } from 'react'
import './App.css'
// import starIcon from './images/icon-star.svg';
// import thankIcon from './images/illustration-thank-you.svg'
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [rate, setRate] = useState(
    {id: "0", style: {}}
  )
  const handleClick= (e) => {
    setRate((state) => {
      return {
        id: e.target.id,
        style: {backgroundColor: 'blue'}
      }
    })
    console.log("lel")
  }

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Rating handleClick={handleClick} rate={rate} />} />
          <Route path='/thanks' element={<ThankYou val={rate} />} />
        </Routes>
        {/* <Rating />
        <ThankYou /> */}
        {/* <!-- Thank you state end --> */}
      </div>


      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/lexzee">Lexzee</a>.
      </div>
    </>
  )
}


export default App
