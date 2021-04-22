import React,{useState} from 'react'
import {useLazyQuery} from "@apollo/client"
import {GET_WEATHER} from '../graphql/get-weather'
import Spinner from './Spinner'
function Home() {
    const [city,setCity]=useState('')
    const [getWeather,{loading,error,data}] = useLazyQuery(GET_WEATHER)

    if (error)return <h1>Whoops...Somethiing is wrong</h1>;
    if (loading)return <Spinner/>;
    if (data) {
        console.log(data)
    }

    return (
        <>
          <div className='home'>
              <div className='input-section center'>
              <input
                 type='text'
                 placeholder='City name...'
                
                 onChange={(event)=>setCity(event.target.value)}
              />
              <button 
                disabled={city=== ""}
                onClick={()=> getWeather({  variables:{name:city}})}
                >
                    Search
               </button>
              </div>
              
               
              
                  {data &&
                  <section className='weather-card'>
                  <h5>City : {data.getCityByName.name}</h5>
                  <h5>Country : {data.getCityByName.country} </h5>
                  <h5>Weather Type : {data.getCityByName.weather.summary.title} </h5>
                  
                  <div className='details'>
                      <h6>Details</h6>
                      <ul>
                      <li>Description : {data.getCityByName.weather.summary.description} </li>
                      <li>Humidity : {data.getCityByName.weather.clouds.humidity}</li>
                      <li>Visibility : {data.getCityByName.weather.clouds.visibility}</li>
                      <li>Temperature : {data.getCityByName.weather.temperature.actual} </li>
                      <li>Mini Temperature : {data.getCityByName.weather.temperature.min} </li>
                      <li>Max Temperature : {data.getCityByName.weather.temperature.max} </li>
                      <li>Wind Temperature: {data.getCityByName.weather.wind.deg}</li>
                      <li>Wind Speed: {data.getCityByName.weather.wind.speed}</li>
                      </ul>
                  </div>
                  </section>
                  }
              
        </div>  
        </>
    )
}

export default Home
