import React ,{useState,useEffect}from 'react'
import './App.css'

export default function App() {
  const [Api,setApi]=useState()

  useEffect(()=>{
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=naruto`)
    .then(res => res.json())
    .then(res=> {
      setApi(res)
    })

  },[])


  return(
    <div class='main-container'>
      {Api !== undefined ?
      <div class='sub-container' >
        {Api.data.slice(0, 8).map((info,id)=>(
          <div class='map-container' style={{backgroundColor:`#${id}${id}${id}`}} key={id}>
            <h4 class='title'>{info.attributes.slug}</h4>
            <div class='img-container'>
            <img class='img-poster' src={info.attributes.posterImage.small}/>
            </div>
            </div>
        ))}
      </div>


     :null }



    </div>

  )
}

