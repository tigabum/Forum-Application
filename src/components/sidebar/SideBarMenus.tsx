import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/AppState'
import { useDispatch } from 'react-redux'
import { UserProfileSetType } from '../../store/user/reducer'
import './SideBarMenus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SideBarMenus=()=> {
    const dispatch = useDispatch()
    const user = useSelector((state:AppState)=>state.user)

    useEffect(()=>{
        dispatch({
            type:UserProfileSetType,
            payload:{
                id:1,
                userName:"Testuser"
            }
        })
    },[dispatch])
  return (
    <React.Fragment>
        <FontAwesomeIcon icon={faUser} />
      <span className='menu-user'> 
      {user?.userName}
      </span>
    </React.Fragment>
  )
}

export default SideBarMenus
