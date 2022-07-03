import React from 'react'
import uuid from 'react-uuid'
import ContactCard from './ContactCard'

function ContactList({contacts,handleDelete}) {
  return (
<>
<div  className='ui search' style={{marginTop:'70px'}} >
  <div className='ui icin input'>
    <input type="text" placeholder='Search' className='prompt' />
    <i className='search icon'></i>
  </div>
</div>
<div style={{marginTop:'10px'}} className='ui celled list'>
     {contacts.map((contact,index)=>{
      return(
        
        <ContactCard handleDelete={()=>handleDelete(contact.id)}  id={uuid()} key={uuid()} name={contact.name} email={contact.email} />
      )
     })}

    </div>
</>
    
  )
}

export default ContactList