import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import AddContact from './components/AddContact';
import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';
import Header from './components/Header';
function App() {
  const [Contacts,setContacts]=useState( JSON.parse(localStorage.getItem("contacts")));
  useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(Contacts));
  },[Contacts])
  useEffect(()=>{
   var data= localStorage.getItem("contacts")
   setContacts(JSON.parse(data));
  },[])
  const handleSubmit=(user)=>{
    setContacts((prev)=>{
      return[
      ...prev,
      {id:uuid(),...user}
      ]
    })
  }
  const handleDelete=(id)=>{
    alert("contact will be deleted")
   const filtered_array= Contacts.filter((prev)=>{
    return id!==prev.id
   })
   setContacts(filtered_array)
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact handleSubmit={handleSubmit} />
      <ContactList  handleDelete={handleDelete}  contacts={Contacts}/>
    </div>
  );
}

export default App;
