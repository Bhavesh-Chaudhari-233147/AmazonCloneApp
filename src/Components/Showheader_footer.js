import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Showheader_footer({children}) {
    const[showHead_Footer,setShowHead_Footer] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        console.log(location)
        if(location.pathname === '/')
        {
            setShowHead_Footer(false)
        }
        else
        {
            setShowHead_Footer(true)
        }
    },[location])

  return (
    <div>{showHead_Footer && children}</div>
  )
}

export default Showheader_footer