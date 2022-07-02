import { useEffect, useState } from 'react';
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
      user
      ]
    })
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact handleSubmit={handleSubmit} />
      <ContactList contacts={Contacts}/>
    </div>
  );
}

export default App;
