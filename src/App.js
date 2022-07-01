import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';
import Header from './components/Header';
function App() {
  const [Conacts,setContacts]=useState([]);
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
      <ContactList contacts={Conacts}/>
    </div>
  );
}

export default App;
