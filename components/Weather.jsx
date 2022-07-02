import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  let temperatureCelsius = Math.floor(((data.main.temp.toFixed(0))-32)*5/9)
    let temperatureFahrenheit = data.main.temp.toFixed(0)
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12 '>
        <div className='flex flex-col items-center '>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl text-amber-100'>{data.weather[0].main}</p>
        </div>
        <div className='flex justify-between text-center pl-9 '>
            <p className='text-9xl text-green-200'>{temperatureCelsius}&#176;C</p>
            <p className='text-9xl pl-8 text-pink-200'>{temperatureFahrenheit}&#176;F</p>
        </div>

      </div>
      {/* Bottom */}

<div className='bg-black/40 relative p-8 rounded-md'>
    <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
    <div className='flex justify-between text-center'>
        <div>
            <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
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
