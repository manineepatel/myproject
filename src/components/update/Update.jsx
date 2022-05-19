
import axios from 'axios';
import React,{useState,useffect} from 'react';
import { useEffect } from 'react';
import {Form,Button} from 'semantic-ui-react';


const Update=()=>{
    const[id,setId]=useState("");
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    console.log(firstname)
    const data = {
        firstName: firstname,
        lastName: lastname,
        email: email
      }

    const inevent=()=>{
        axios.put('http://localhost:8081/api/employees/' + id, data);
    }
    useEffect(()=>{
        setfirstname(localStorage.getItem('firstname'));
        setlastname(localStorage.getItem('lastname'));
        setemail(localStorage.getItem('email'));
        setId(localStorage.getItem('ID'));
    },[])
    return(
        <div>
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name="fname" value={firstname}
      onChange={(event)=>setfirstname(event.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name="lname" value={lastname}
      onChange={(event)=>setlastname(event.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' name="email" value={email}
      onChange={(event)=>setemail(event.target.value)} />
    </Form.Field>
    
    <Button type='submit' onClick={inevent}>Update</Button>
  </Form>
        </div>
    )
}
export default Update;