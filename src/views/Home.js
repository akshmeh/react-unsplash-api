import {React, useEffect, useState} from 'react'
import {randomPhotos} from '../api/unsplash'
import { ImageCard } from '../component/ImageCard';
import { Search } from '../component/Search';

function Home () {
  const [images, setImages] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      const resUnsplashData = await fetch(randomPhotos)
      const unsplashData = await resUnsplashData.json();
      setImages(unsplashData)
      setToggle(true)
    }
    fetchData()
  }, []);

  const passSearchData = (images) =>{
    // console.log(images);
    if(images.results.length === 0){
      emptyHandle();
    }else{
      setImages(images.results)
    }
  }
  const emptyHandle = async () =>{
    const resUnsplashData = await fetch(randomPhotos)
    const unsplashData = await resUnsplashData.json();
    setImages(unsplashData)
  }
  return (
    <div>
      <h1 className='app-title'>React Unsplash API App</h1>
      <Search passSearchData={passSearchData}/>
      {/* <h3>{images.length}</h3> */}
      <div className='image-section'>{!toggle ? <h2 className='app-loading'>Loading...</h2> : images.map((ele)=>{
      // console.log(ele.sponsorship);
      return <ImageCard key={ele.id} {...ele} />
     })}</div>
      {/* <a href={randomPhotos}>API</a> */}
    </div>
  )
}

export default Home
