import thankIcon from '../images/illustration-thank-you.svg'

const ThankYou = ({val}) => {
  return (
    <div className="thank-you-state">
      <img src={thankIcon} alt="Thank you Illustration" className="thankIcon" />
      <p className="selected">
        You selected {val.id} out of 5
      </p>
      <h1 className="header">
        Thank you!
      </h1>
      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYou