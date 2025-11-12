import React, { useEffect, useState } from 'react'

export default function Home() {

  const [location,setLocation] = useState({lat:null,lon:null})
  const [error,setError] = useState(null)

  const findLocation = async ()=>{
    try {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
         console.log("Position received:", position);
        setLocation({
          lat:position.coords.latitude,
          lon:position.coords.longitude
        })       
      },
    (err)=>{
      console.error("Geolocation error:", err); 
      setError(err.message)
    })
    }else{
      setError("Geolocation is not supported by this browser.")
    }
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div className='container'>
      <h1>“Stay connected to your prayers, wherever you are.”</h1>
      <p>In the rhythm of our daily lives, prayer offers a moment of peace, reflection, and connection. Whether you're at home, traveling, or somewhere in between, staying aligned with your Salah times helps keep your heart centered. Let us guide you to the right time — simply choose your location to begin your spiritual journey today.</p>
    <pre>Prayer times based on where you are — choose your city to get started.</pre>
    <hr />
    <p>Your Location</p>
    <button onClick={findLocation}>find</button>
    <p>Latitude:{location.lat}</p>
    <p>Longititude:{location.lon}</p>
    </div>
  )
}
