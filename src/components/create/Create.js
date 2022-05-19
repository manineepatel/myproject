import axios from 'axios';
import React,{useState} from 'react';
import {Form,Button} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


const Create=()=>{
  const navigate = useNavigate();
  
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[data,setdata]=useState(null);
    console.log(firstname)

    const inevent=()=>{
      
    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email
    }
    axios.post('http://localhost:8081/api/employees',data).then(() => {navigate('/read')})
      
    }
    
    

    return(
        <div className="center">
<h1> create operation</h1>
<Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name="fname" 
      onChange={(event)=>setfirstname(event.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name="lname" 
      onChange={(event)=>setlastname(event.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' name="email" 
      onChange={(event)=>setemail(event.target.value)} />
    </Form.Field>
    
    <Button type='submit' onClick={inevent}>Submit</Button>
  </Form>
        </div>
    )
}
export default Create;