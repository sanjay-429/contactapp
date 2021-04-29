import React, {useRef} from "react";
import ContactCard from "./ContactCard";

const ContactList=(props)=>{
    const inputEl=useRef("");
  const deletecontact=(id)=>{
   props.getContactId(id);
  }

    const renderconstlist=props.contacts.map((contact)=>{
        return (
         <ContactCard contact={contact} clickHandler={deletecontact} key={contact.id}/>
        )
    });

      const getSearchTerm=()=>{
         props.searchKeyword(inputEl.current.value);
      };
    return(
       <div className="main">
           <div className="ui serach">
               <div style={{marginTop:"20px"}}className="ui icon input">
                   <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
                  <i className="search icon"></i>
               </div>
           </div>
        <div className="ui celled list">
             <h2>Contact List</h2>
          {renderconstlist}
        </div>
        </div>
    );
}
export default ContactList;