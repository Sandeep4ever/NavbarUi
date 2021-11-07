import React,{useState} from 'react'
import styled from 'styled-components'
import Popup from './Popup';

const Assignto = () => {
  const [state, setstate] = useState(false)
 

const handleOpen = (e) => {
  // const optionvalue =e.target.value
  setstate(true)

  
  
}

const handleClose = (e) => {
  setstate(false)
  
  

  
//    if(e.target.id === "select") {
//         alert("sdlsdsd")
//  console.log("dnkf")


//        }

  //ab run karo ek bar alert pr kya aa raha sir alert nahi chal raha hai
  //run karna ab sir pura disable ho gya hai close karne per
  // e.target.id wala try karo ok
  // ek bar number do tumara mobile no sir  yes 8318888422
  
}

  return (
    <>
      <AssignDropdown>
  <select   onChange={handleOpen}  >
    <option value=""  disabled selected hidden  >Assign To</option>
    <option value="Automatically" >Automatically</option>
    <option value="Team_member"  >Team member</option>
</select>
      </AssignDropdown>
      <PopCenter>
    {state &&  <Popup onhandleClose={(e) =>handleClose(e)} />} 
     
     </PopCenter>
    
    </>
  )
}

export default Assignto

const AssignDropdown =styled.div`

select{
  width: 280px;
  height: 40px;
  background: #F7F7F7 0% 0% no-repeat padding-box;
  border-radius: 4px;
  option{
    width: 280px;
  height: 40px; 
  }
}

`
const PopCenter =styled.div`
width: 1366px;
height:706px;
display:flex;
align-items: center;
justify-content: center;

`