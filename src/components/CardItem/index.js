import './index.css'

const CardItem = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-direction">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
