import React from 'react'

function ContactCard({name,email,handleDelete}) {
  return (
    <div className='item'>
          <div className='content'>
            <div className='header'>{name}</div>
            <div>{email}</div>
          </div>
          <i onClick={handleDelete}  className='trash alternate outline icon' style={{color:"red" , marginTop:"7px",cursor:'pointer' }}></i>
        </div>
  )
}

export default ContactCard