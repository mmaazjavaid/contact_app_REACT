import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Header() {
  return (
    <>
    <div className='ui fixed menu' >
        <div className='ui container center'>
            <h2>Contact Manager</h2>
            
        </div>
        <div>
          <Link className='ui button blue' to='addContact'>Add Contact</Link>
        </div>
        <div>
        <Link to='contactlist' className='ui button blue'>Contact List</Link>
        </div>


    </div>
    </>
    

  )
}

export default Header