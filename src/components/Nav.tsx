import React from 'react'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const {width} = useWindowDimensions()
  const getMobileViews = () => {
    if(width<=765){
return <FontAwesomeIcon className='nav-mobile-menu' icon={faBars} />
    } else {
      return null
    }
  }
  return (
    <nav className='navigation'>
     { getMobileViews()}
      <strong>SuperForum</strong>
    </nav>
  )
}

export default Nav
