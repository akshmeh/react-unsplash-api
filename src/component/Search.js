import {React, useState} from 'react'
import {searchPhoto} from '../api/unsplash'

export const Search = ({passSearchData}) => {
    const [word, setWord] = useState('');

        const fetchData = async () =>{
          // console.log(word);
          const resUnsplashData = await fetch(`${searchPhoto}${word}`)
          const unsplashData = await resUnsplashData.json();
          passSearchData(unsplashData)
        }

  return (
        <>
        <div className='search-container'>

        <input type="text" name="search" id="search" placeholder='Search Image...' onChange={(word)=>{setWord(word.target.value)}}/>
        <button type='submit' onClick={fetchData}>Submit</button>
        </div>
        </>
  )
}
