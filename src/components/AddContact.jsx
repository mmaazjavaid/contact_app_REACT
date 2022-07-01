import React, { useState } from 'react'

function AddContact(props) {
  const [user,setUser]=useState({
    "name":"",
    "email":""
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    props.handleSubmit(user);
    setUser({
      "name":"",
      "email":""
    })
  }
  return (
    
    <div className='ui main'>
      <h2>Add contact</h2>
      <form onSubmit={handleSubmit} className='ui form'>
        <div className='field'>
          <label  >Name</label>
          <input type="text" name='name' id='name' value={user.name} placeholder='name'
          onChange={(e)=>setUser(
            (prev)=>{
              return {
                ...prev,
                "name":e.target.value
              }
            }
          )}
          />
        </div>
        <div className='field'>
          <label >Email</label>
          <input type="Email" name='email' id= 'email' value={user.email} placeholder={'email'} onChange={(e)=>setUser(
            (prev)=>{
              return {
                ...prev,
                "email":e.target.value
              }
            }
          )} />
        </div>
        <button className='ui button blue'>Submit</button>
      </form>
    </div>
  )
}

export default AddContact