import React from 'react'
import {useParams} from 'react-router-dom'
function ContactDetails() {
    let param=useParams()
  return (
    <div  style={{display:'flex',justifyContent:'space-between',width:'100%',borderBottom:'1px solid grey',marginTop:'50px',marginBottom:'20px'}}>
          <div className='content'>
            <div className='header'>{param.name}</div>
            <div>{param.email}</div>
            
          </div>
        </div>
  )
}

export default ContactDetails