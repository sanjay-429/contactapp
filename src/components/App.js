import React, {useState, useEffect} from "react";
import {uuid} from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';

function App() {
     const LOCAL_STORAGE_KEY="contacts"
   const [contacts, setContacts]=useState([]);
   const [search, setSearch]=useState("");
  const[searchResult,setSearchResult]=useState([]);


     const addContactHandler=(contact)=>{
         setContacts([...contacts, {id: uuid(), ...contact}])
     }
    
     const removecontact=(id)=>{
       const newContactlist=contacts.filter((contact)=>{
         return contact.id!==id;
       });
       setContacts(newContactlist);
     }

     useEffect(()=>{
    const reterive =JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
     if(reterive) setContacts(reterive)
  },[])

     useEffect(()=>{
         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
     },[contacts])

     const searchHandler=(search)=>{
          setSearch(search);
          if(search!==""){
            const newcontactlist=contacts.filter((contact)=>{
              return Object.values(contact)
              .join("")
              .toLowerCase()
              .includes(search.toLowerCase());
            });
              setSearchResult(newcontactlist);
          }
          setSearchResult(contacts);
     };
  return (
    <div className="ui container">
       <Header />
       <AddContact  addContactHandler={addContactHandler}/> 
       <ContactList  term={search} searchKeyword={searchHandler} contacts={search.length<1?contacts:searchResult} getContactId={removecontact}/>
    </div>
  );
}

export default App;
