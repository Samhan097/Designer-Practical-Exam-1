import React from 'react'
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder'
import Overlay from './Overlay'

function Destination() {
  return (
    <>
        <div className='destination'>
        <h1>Our Destinations</h1>
        <MultipleSelectPlaceholder />
        <Overlay />
        </div>
    </>
  )
}

export default Destination