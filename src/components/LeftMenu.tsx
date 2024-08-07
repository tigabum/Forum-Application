import React from 'react'
import { useWindowDimensions } from '../hooks/useWindowDimensions'


function LeftMenu() {
    const {width} = useWindowDimensions()
    if (width <= 760) {
        return null
    }
  return (
    <div className='leftmenu'>
      Leftmenu
    </div>
  )
}

export default LeftMenu
