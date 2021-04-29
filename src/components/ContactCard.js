import React from "react";
import user from "../images/user.jpg";


  const ContactCard=(props)=>{
       const {id,name,email}=props.contact;
       return (
        <div className="item">
            <img src={user} alt="user" className="ui avatar image"/>
        <div className="content">
            <div className="header">
                {name}
            </div>
            <div>{email}</div>
        </div>
       <div style={{marginLeft:"60%",color:"red", marginTop:"7px", cursor:"pointer"}} onClick={()=>props.clickHandler(id)}> <i className="trash alternate outline icon"></i>
    </div>
    </div>
       );

  }
  export default ContactCard;
