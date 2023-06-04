import { Link } from 'react-router-dom';
import starIcon from '../images/icon-star.svg';

const Rating = () => {
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
        <button className="rate">1</button>
        <button className="rate">2</button>
        <button className="rate">3</button>
        <button className="rate">4</button>
        <button className="rate">5</button>
      </div>
      <Link to='thanks'>
        <button className="submit">
          Submit
        </button>
      </Link>
    </div>
  )
}

export default Rating