import { useState } from 'react'
import './App.css'
import starIcon from './images/icon-star.svg';
import thankIcon from './images/illustration-thank-you.svg'

function App() {

  return (
    <>
      <div className="App">

        {/* <!-- Rating state start --> */}
        <div className="rating-state">
          <div className="icon">
            <img src={starIcon} alt="#" />
          </div>
          <h1 className="header">
            How did we do?
          </h1>
          <p className="description">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating">
            <button className="rate">1</button>
            <button className="rate">2</button>
            <button className="rate">3</button>
            <button className="rate">4</button>
            <button className="rate">5</button>
          </div>
          <button className="submit">
            Submit
          </button>
        </div>
        {/* <!-- Rating state end --> */}

        {/* <!-- Thank you state start --> */}
        <div className="thank-you-state">
          <img src={thankIcon} alt="Thank you Illustration" className="thankIcon" />
        </div>
        <p className="selected">
          You selected 4 out of 5
        </p>
        <h1 className="header">
          Thank you!
        </h1>
        <p className="description">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
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
