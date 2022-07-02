import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  let temperatureCelsius = Math.floor(((data.main.temp.toFixed(0))-32)*5/9)
  let temperatureFahrenheit = data.main.temp.toFixed(0)
  let temperatureFeelsCelsius = Math.floor(((data.main.feels_like.toFixed(0))-32)*5/9)
  let temperatureFeelsFahrenheit = data.main.feels_like.toFixed(0)
  return (
    <div className='relative flex flex-col justify-between max-w-[600px] w-full h-[85vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12 '>
        <div className='flex flex-col items-center '>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='130'
            height='130'
          />
          <p className='text-4xl text-emerald-50 '>{data.weather[0].main}</p>
        </div>
        <div className='flex flex-col '>
            <p className='text-8xl text-gray-300 '>{temperatureCelsius}&#176;C</p>
            <p className='text-8xl text-gray-300'>{temperatureFahrenheit}&#176;F</p>
        </div>

      </div>
      {/* Bottom */}

<div className='bg-black/40 relative p-8 rounded-md'>
    <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
    <div className='flex justify-between text-center'>
        <div>
            <p className='font-bold text-2xl'>{temperatureFeelsCelsius}&#176;C</p>
            <p className='text-xl'>Feels Like</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{temperatureFeelsFahrenheit}&#176;F</p>
            <p className='text-xl'>Feels Like</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Weather;
