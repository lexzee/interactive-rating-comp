
export const RatingCircle = ({rate,value,handleClick}) => {

    const {id,style} = rate


    const handleHover = (e) => {
        e.target.classList.toggle("hovered")
    }
    return(
        <button
        className="rate"
        id={value}
        onClick={handleClick}
        onMouseOver= {handleHover}
        onMouseLeave = {handleHover}
        style = {{ backgroundColor: +id === value  ? "blue" : "",}}
      >{value}</button>
    )
}