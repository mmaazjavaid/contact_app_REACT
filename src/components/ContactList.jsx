import React from 'react'

function ContactList({contacts}) {
  return (
    <div className='ui celled list'>
     {contacts.map((contact)=>{
      return(
        <div className='item'>
          <div className='content'>
            <div className='header'>{contact.name}</div>
            <div>{contact.email}</div>
          </div>
          <i className='trash alternate outline icon'></i>
        </div>
        
      )
     })}

    </div>
  )
}

export default ContactList