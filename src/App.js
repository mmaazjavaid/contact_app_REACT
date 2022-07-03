import { useEffect, useState } from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';
import AddContact from './components/AddContact';
import ContactCard from './components/ContactCard';
import ContactDetails from './components/ContactDetails';
import ContactList from './components/ContactList';
import api from './api';
import Header from './components/Header';
function App() {
  const [Contacts,setContacts]=useState([]);
  const [searchTerm,setsearchTerm]=useState("");
  const [saerchResults,setsaerchResults]=useState([]);
  const getContacts=async()=>{
    const res=await api.get('/contacts');
    const data= await res.data
    setContacts(data)
  }

  const handleSearch =(keyword)=>{
      setsearchTerm(keyword)
  }
  useEffect(()=>{
    if(searchTerm!==""){
      const filteredArray=Contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setsaerchResults(filteredArray)
    }else{
      setsaerchResults(Contacts)
    }
  },[searchTerm]) 
  
  useEffect(()=>{
  getContacts()
  },[])
  
  const handleSubmit= async(user)=>{
    const request={
      id:uuid(),
      ...user
    }
    const response =await api.post('/contacts',request)
    setContacts((prev)=>{
      return[
      ...prev,
      response.data
      ]
    })
  }
  const handleDelete= async(id)=>{
  const res=await api.delete(`/contacts/${id}`);
  setContacts(Contacts.filter((prev)=>{
    return id!==prev.id
  }))
  }
  return (
    <div className='ui container'>
      <BrowserRouter>
      <Header/>
      <Routes>
    
        <Route path='/addContact' element={<AddContact handleSubmit={handleSubmit} />} />
        <Route path='/contactlist' element={<ContactList handleSearch={handleSearch}  handleDelete={handleDelete} searchTerm={searchTerm}  contacts={searchTerm.length<1? Contacts:saerchResults}/>} />
        <Route path='/contactdetails/:email/:name' element={<ContactDetails/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
