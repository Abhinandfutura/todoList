import React, { useState } from 'react';
import "./sample.css"
function Sample() {
  const [input, setinput] = useState("");
  const [product, viewproduct] = useState([])

  const read = (event) => {
    console.log("value", event.target.value)
    setinput(event.target.value)

  }
  console.log("state", input)

  const display = () => {

    viewproduct([...product,input])
setinput('');


  }
  console.log("product", product)
  
  
  
  const dele=(delproduc)=>{
  
    const result= product.filter((i)=>{
      return(i!=delproduc)
    })
    viewproduct(result)


  }

  //search............

  const search=(data)=>{
   const searched=product.filter((items)=>{


     return( items==data)
    })
    viewproduct(searched)

  }

  ///html section.......

  return (

    <div className="container">

      <div className="inputsection" action="">
        <h1>
          Todo App
        </h1>
        <input 
          onChange={read} value={input}
          type="text" placeholder="Enter  items..." />


          <i    onClick={()=>search(input)}
          class="fa-solid fa-magnifying-glass" 
          style={{ top: '81px',color:' #82979f',
            right:'35px'}}></i>


        <button onClick={display}>Add</button>
      </div>




     <ul>
        {
  product.map((value)=>{
    return(
   <li>  {value}  <i  onClick={()=>dele(value)}   
   style={{ right: '26px',
    top:' 20px',
    color:' #82979f'}}className="fas fa-trash-alt"></i>  </li>   )})
 
    } 

</ul>
 

    
    </div>
  )
}
export default Sample;
