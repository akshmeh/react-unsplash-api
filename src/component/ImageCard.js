import {React} from 'react'
import './ImageCard.css'
import {Link} from 'react-router-dom'

export const ImageCard = (props) => {
  // !props.sponsorship ? 'No name' : props.sponsorship.sponsor.name
  return (
    <div className='image-card'>
        <div className="image">
            <img src={props.urls.full} alt=""/>
        </div>
        <div className='image-content'>
        <h4 className='image-name'>{props.user.name}</h4>
        <p className='image-likes'>Likes: {props.likes}</p>
        {/* <p className='image-likes'>Download: {props.downloads}</p> */}
        <Link className='image-download' to={`/react-unsplash-api/photo/${props.id}`}>View more</Link>
        </div>
    </div>
  )
}

