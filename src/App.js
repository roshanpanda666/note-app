import './App.css';
import { useState } from 'react';
function App() {

  const[inputList,setList]=useState("")
  const[Items,afterClick]=useState([])
  const[bar,leftbar]=useState("noAnimatebar")

  const itemEvent=(event)=>{
      setList(event.target.value)
  }
  const listOfItem=()=>{
    afterClick((oldItems)=>{
      return[...oldItems,inputList]
    })

      leftbar("leftbar")
    
    
  }

  const deleteItems=()=>{
    alert("deleted")
  }
  return (
    <>
      <div className="main-div">
          <div className={bar}></div>
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
                  return(
                    <div className='fatherlist'>
                      <div className="iconsW">
                      <i className="fa-solid fa-circle-xmark"
                      onClick={deleteItems}></i>
                      </div>
                     
                      <li>{itemval}</li>
                    </div>
                  )
              })}
              
              </ul>
            </div>
             
          </div>
        <div className={bar}></div>
      </div>
    </>
  );
}

export default App;
