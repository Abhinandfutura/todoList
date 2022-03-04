import React, { useState } from 'react';
import "./sample.css"
import { useEffect } from 'react';
import {useParams, useResolvedPath} from 'react-router-dom'
import axios from 'axios'
import {Modal,Button} from 'react-bootstrap'
function Sample() { 
  
  const [input, setinput] = useState("");
  const [item, viewitem] = useState({
    list:''
  });
  const [ab,setab]=useState("")
    const[view,setView] = useState([]);
    const [dat,setdat]=useState([]);
    const[status,setStatus]=useState(true)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
   
    const[value,setValue]=useState("");

  const read = (event) => {
   
    setinput({...input,[event.target.name]:event.target.value} );

  }


  //Add item...........................
  const AddItem=()=>{
  

    axios.post('http://localhost:3000/add',input).then((res)=>{
      console.log(res.data);

      
    setStatus(true)
  
  })
setStatus(false);

}
  const display=()=>{

    axios.get('http://localhost:3000/view').then((result)=>{
      
console.log("aaa",result.data)
    setView(result.data);
    
    setdat(result.data);
 
   

  })
setStatus(false)
  }
  const handlesee=(id)=>{

    setShow(true);
  
    setab(id);

  }
  const handleUpdate=async()=>{
    
  await  axios.post("http://localhost:3000/update",{ab,value}).then((res)=>{
    console.log("updated");
    // alert(res.data.message)
    setShow(false)
 
    
    setStatus(true)
  })
  
  setStatus(false)

  }
  console.log("hello",view)
   console.log("hai",dat)

  useEffect(() => {

  display();
 console.log("display");

  }, [status])
  

  
  
  //deleting..............

  const dele=(id)=>{

   
    axios.get(`http://localhost:3000/delete/${id}`).then((result)=>{
   
     console.log("delete",result);
   
   setStatus(true)
    })
setStatus(false)

  }

  //search............

  const Search=()=>{
  
 const val= dat.filter((i)=>{

    return( i.list===input.list)
  })
  console.log("search",val)
  setView(val)
  
  
  
    
  //   setSearch(result.data.list)
   
  // })

 
 
    }
   
    

  ///html section.......

  return (
  

    <div className="container">


      <div className="inputsection" action="">
        <h1>
          Todo App
        </h1>
        <input 
          onChange={read}  name='list'
          type="text" placeholder="Enter  items..." />
          


          <i    onClick={Search}
          className="fa-solid fa-magnifying-glass" 
          style={{ top: '81px',color:' #82979f',
          position:'absolute',
            right:'35px'}}></i>


        <button onClick={AddItem}>Add</button>
      </div>
     

     

      <ul>{
        
       
     view.map((value)=>{

          return(
          
          <li> {value.list} 


<i onClick={()=>handlesee(value._id)}   className="fa-solid fa-pen  icon"></i>

{/* 
  <Button variant="danger" onClick={handleShow}>
        <i   className="fa-solid fa-pen  icon" ></i>
        </Button> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Updation window</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type='text' onChange={(e)=>setValue(e.target.value)}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleUpdate()}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      


             <i  onClick={()=>dele(value._id)}   
          style={{ right: '26px',
          top:' 20px',position:'absolute',
          color:' #82979f'}} 
          className="fas fa-trash-alt"></i> 
      
           </li> 

         
          
          
          )})
          
          
                 

    
    

    } 


     
</ul>


 


    </div>
  )
}
export default Sample;
