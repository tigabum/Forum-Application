import React from 'react'
import { useWindowDimensions } from '../hooks/useWindowDimensions'


function SideBar() {
    const {width} = useWindowDimensions()

    if (width<=760) {
        return null
    }
  return (
    <div className='sidebar'>
      Sidebar
    </div>
  )
}

export default SideBar
