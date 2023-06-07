import { Link } from 'react-router-dom';
import starIcon from '../images/icon-star.svg';

const Rating = ({ handleClick, rate}) => {
  const handleHover = (e) => {
    // console.log(`Hovered over ${e.target.id}`)
    // console.log(e.target.style)
  }
  return (
    <div className="rating-state">
      <div className="icon">
        <img src={starIcon} alt="#" className='starIcon'/>
      </div>
      <h1 className="header">
        How did we do?
      </h1>
      <p className="description">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <div className="rating">
        <button
          className="rate"
          id='1'
          onClick={handleClick}
          onMouseOver={handleHover}
        >1</button>
        <button
          className="rate"
          id='2'
          onClick={handleClick}
          onMouseOver={handleHover}
        >2</button>
        <button
          className="rate"
          id='3'
          onClick={handleClick}
          onMouseOver={handleHover}
        >3</button>
        <button
          className="rate"
          id='4'
          onClick={handleClick}
          onMouseOver={handleHover}
        >4</button>
        <button
          className="rate"
          id='5'
          onClick={handleClick}
          onMouseOver={handleHover}
        >5</button>
      </div>
      <Link to='thanks'>
        <button className="submit" disabled={rate <= 0 ? true : false}>
          Submit
        </button>
      </Link>
    </div>
  )
}

export default Rating