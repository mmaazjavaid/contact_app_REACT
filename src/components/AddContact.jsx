import React from 'react'

function AddContact() {
  return (
    <div className='ui main'>
      <h2>Add contact</h2>
      <form className='ui form'>
        <div className='field'>
          <label  >Name</label>
          <input type="text" name='name' id='name' placeholder='name' />
        </div>
        <div className='field'>
          <label >Contact</label>
          <input type="text" name='contact' id= 'contact' />
        </div>
        <button className='ui button blue'>Submit</button>
      </form>
    </div>
  )
}

export default AddContact