import { Link } from 'react-router-dom';
import starIcon from '../images/icon-star.svg';
import { RatingCircle } from './RatingCircle';

const Rating = ({ handleClick, rate}) => {
  const rating_nums = [1,2,3,4,5]
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
        {rating_nums.map( (num) => (
          <RatingCircle rate={rate} value = {num} handleClick = {handleClick} key = {num}/>
        ))}
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