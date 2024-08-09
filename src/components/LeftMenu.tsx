import React, { useEffect, useState } from 'react'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { getCategories } from '../services/DataService'
import Category from '../models/Category'


function LeftMenu() {
    const {width} = useWindowDimensions()
    const [categories, setCategories] = useState<JSX.Element>(<div>Left Item</div>)

    useEffect(()=>{
      getCategories().then((categories:Category[])=>{
        const cats = categories.map((item)=>{
          return <li key={item.id} >{item.name} </li>
        })

        setCategories(<ul className='category' >{cats} </ul>)
      }).catch(err=>
        console.log("error inside LeftMenu", err)
      )
    },[])
    if (width <= 760) {
        return null
    }
  return (
    <div className='leftmenu'>
     {categories}
    </div>
  )
}

export default LeftMenu
