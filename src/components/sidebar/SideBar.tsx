import React from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import SideBarMenus from './SideBarMenus'




function SideBar() {
    const {width} = useWindowDimensions()

    if (width<=760) {
        return null
    }
  return (
    <div className='sidebar' >

      <SideBarMenus/>
    </div>
  )
}

export default SideBar
