import './Card.css';

export const Card = ({url,title,description,scale}) =>{
  return(
    <div className='container' style={{gridColumn:`span ${scale}`}}>
        
        <img src={url} className='img' alt="" />
        
        <div className='informacion'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
    </div>
  )
}