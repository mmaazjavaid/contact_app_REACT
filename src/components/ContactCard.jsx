import React from 'react'
import {Link} from 'react-router-dom'
function ContactCard({name,email,handleDelete}) {
  return (
    <div  style={{display:'flex',justifyContent:'space-between',width:'100%',borderBottom:'1px solid grey',marginBottom:'20px'}}>
          <div className='content'>
            <Link to={`/contactdetails/${email}/${name}`}>
            <div className='header'>{name}</div>
            <div>{email}</div>
            </Link>
            
          </div>
          <i onClick={handleDelete}  className='trash alternate outline icon right' style={{color:"red" , marginTop:"7px",cursor:'pointer' }}></i>
        </div>
  )
}

export default ContactCard