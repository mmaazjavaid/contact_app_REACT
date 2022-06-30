import './App.css';
import AddContact from './components/AddContact';
import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';
import Header from './components/Header';
function App() {
  const Conacts=[
    {
      id:1,
      name:"maaz",
      email:"maaz@gmail.com"
    },
    {
      id:2,
      name:"taha",
      email:"taha@gmail.com"
    },
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={Conacts}/>
    </div>
  );
}

export default App;
