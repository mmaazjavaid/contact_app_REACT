import React from 'react'
import uuid from 'react-uuid'
import ContactCard from './ContactCard'

function ContactList({contacts,handleDelete}) {
  return (
    <div className='ui celled list'>
     {contacts.map((contact,index)=>{
      return(
        
        <ContactCard handleDelete={()=>handleDelete(contact.id)}  id={uuid()} key={uuid()} name={contact.name} email={contact.email} />
      )
     })}

    </div>
  )
}

export default ContactList