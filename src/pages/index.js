import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch} from "react-icons/bs"
import Image from 'next/image'
import Weather from '../../components/Weather'
import Spinner from '../../components/Spinner'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [city,setCity] = useState('');
  const [weather,setWeather] = useState('');
  const [loading,setLoading] = useState(false);


  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  // console.log(city);
  const fetchWeather = (e) =>{
    e.preventDefault()
    setLoading(true);
    axios.get(url).then((response)=>{
      setWeather(response.data);
      // console.log(response.data);
    })
    setCity('')
    setLoading(false)
  }

  if(loading){
    return <Spinner/>
  }else{
    

  return (
    <>
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'></div>
      <Image src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b"
      layout='fill'
      alt='bg image'
      className='object-cover'
      />
      <div className='relative flex justify-between itemscenter max-w-[500px] m-auto text-white z-[10] p-10'>
        <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
          <div>
            <input onChange={(e)=>setCity(e.target.value)} className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:' type="text" placeholder='search city'/>
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20}/>
            </button>
        </form>
      </div>

      {weather.main && <Weather data={weather} /> }
    </>
  )
  
}
}
