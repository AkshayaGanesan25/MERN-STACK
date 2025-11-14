import './parent.css'
const Card = (props) => {
    const {figu,title,description} = props;
  return (
    <div className="card">
        <img src={figu} alt={title || 'developer'}></img>
        <h1>{title} </h1>
      <p> {description} </p>
      
    </div>
  )
}

export default Card
