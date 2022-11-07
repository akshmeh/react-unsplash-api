import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { eachPhoto,clienID } from '../api/unsplash';
import {Link} from 'react-router-dom'
import './Photo.css'

export const Photo = () => {
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);
    
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () =>{
            // console.log(id);
          const resUnsplashData = await fetch(`${eachPhoto}/${id}${clienID}`)
          const unsplashData = await resUnsplashData.json();
        //   console.log(unsplashData);
          setData(unsplashData)
          setToggle(true)
        }
        fetchData()
      }, [id]);

  return (
    <div className='container'>
        {
            !toggle ? <h2 className='app-loading'>Loading...</h2> :
             <div className="card shadow h-100">
            <img src={data.urls.full} alt="" />
        <div className="card-body text-secondary">
         
          <h3 className="card-title">{data.user.name}</h3>
          
          
          <div className="row mt-2">
            <div className="col d-flex flex-column">
              <img className="avatar-img img-thumbnail shadow" src={data.user.profile_image.small} alt="avatar" />
              <div>

              <h5 className="small">Username: {data.user.first_name}</h5>
              {!data.user.instagram_username ? <p>User doesn't have an Instagram</p> : <Link to={`httLinks://www.instagram.com/${data.user.instagram_username}`}>instagram: {data.user.instagram_username}</Link>}
              
              <p>Likes: {data.likes}</p>
          <p>Downloads: {data.downloads}</p>
              </div>
            </div>
            <div className="buttons">
                <Link onClick={()=>{window.open(data.links.download, "_blank")}} >Download</Link>
                <Link onClick={() => {navigator.clipboard.writeText(`${data.urls.full}`);alert('Linked Copied to Clipboard!')}}>Share</Link>
            </div>
          </div>

        </div>
        
      </div>
        }
        

    </div>
  )
}
