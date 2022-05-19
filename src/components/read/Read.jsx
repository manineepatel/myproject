import axios from 'axios';
import React from 'react';
import { useEffect,useState} from 'react';
import {Table ,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Read=()=>{
    const[apidata,setApidata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/api/employees')
        .then((getData)=>{
            setApidata(getData.data)
        })
    })
    const setID=(id,firstname,lastname, email)=>{
    console.log(id);
    localStorage.setItem('ID',id);
    localStorage.setItem('firstname',firstname);
    localStorage.setItem('lastname',lastname);
    localStorage.setItem('email',email);

    }

    const getData=()=>{
        axios.get('http://localhost:8081/api/employees')
        .then((getData)=>{
            setApidata(getData.data)})
        
    }
    const Deletedata=(id,firstname,lastname, email)=>{
        axios.delete('http://localhost:8081/api/employees/' + id)
        .then(()=>{
            getData();

        })
    }


    return(
        <>
        <div className="main">
           
    <Table celled>
    <Table.Header key="Table.Header">
      <Table.Row>
        <Table.HeaderCell>firstname</Table.HeaderCell>
        <Table.HeaderCell>lastname</Table.HeaderCell>
        <Table.HeaderCell>emil</Table.HeaderCell>
        <Table.HeaderCell>update</Table.HeaderCell>
        <Table.HeaderCell>delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body key="Table.Body">
      {apidata.map((data)=>{
          return(
            
        <Table.Row>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
        <Table.Cell>{data.email}</Table.Cell>
        <Table.Cell>
            <Link to='/update'>
            <Button color="green" onClick={()=>setID(data.id, data.firstName, data.lastName, data.email)}>update</Button>
            </Link>
        </Table.Cell>
        <Table.Cell>
        
            <Button color="red" onClick={()=>{Deletedata(data.id,data.firstName, data.lastName, data.email)}}>delete</Button>
            
        </Table.Cell>
      </Table.Row>
          )})}
     
    </Table.Body>
    </Table>

    
  

      
    </div>
   
  </>
    )

}
export default Read;