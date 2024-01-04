import React from 'react';
import Search from './Spinner.gif'

export default function Spinner() {
  return (
    <div className='text-center sm'>
      <img src={Search} alt="Search" />
    </div>
  )
}
