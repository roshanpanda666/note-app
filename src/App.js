import './App.css';
import { useState } from 'react';
function App() {

  const[inputList,setList]=useState("")
  const[Items,afterClick]=useState([])

  const itemEvent=(event)=>{
      setList(event.target.value)
  }
  const listOfItem=()=>{
    afterClick((oldItems)=>{
      return[...oldItems,inputList]
    })
  }
  return (
    <>
      <div className="main-div">
          
          <div className="container">
            <div className="todotxt">
              <h1>TO DO LIST</h1>
            </div>

            <div className="inputfield">
              <input className="inputText" type="text" placeholder="add items" onChange={itemEvent} />
              <button className='addbtn' onClick={listOfItem}>+</button>
            </div>

            <div className="lists">
              <ul>
              
              { Items.map((itemval)=>{
                  return<li>{itemval}</li>
              })}
              
              </ul>
            </div>
             
          </div>
      </div>
    </>
  );
}

export default App;
