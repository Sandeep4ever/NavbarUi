import React from 'react';
import styled from 'styled-components';

const Popup = () => {
  return (
    <>
      <PopupContainer>
        <Crossbtn>
        
          <img src="./images/close.svg" alt="" />
        </Crossbtn>
        <Team>
          Assign to team member
        </Team>
        <Selector>
        <form >
  <label for="member">Select member</label>
   <br />
  <select name="team" id="cars">
    <option value="Tech">Tech member</option>
    <option value="opertor">opertor</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br />
  <button >Create</button>
</form>
       
    
        </Selector>

      </PopupContainer>
    </>
  )
}

export default Popup

const PopupContainer =styled.div`
width: 548px;
height: 277px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 6px;

`
const Crossbtn =styled.div`
width:12.31px;
height:12.31px;
color:#020202;
float: right;
padding-top:16px;
padding-right:30px;
cursor: pointer;



`
const Team =styled.div`
/* width:199px; */
height:23px;
/* font: normal normal medium 16px/15px Poppins; */
font-family: 'Poppins', sans-serif;
letter-spacing: 0.15px;
color: #000000;
font-size: 16px;
font-weight:bold;
padding-left: 53px;
padding-top: 25px;

`

const Selector =styled.div` 

form{
  padding-left: 53px;
  padding-top:40px;

  label{
    font: normal normal normal 11px/15px Poppins;
letter-spacing: 0.1px;
color: #000000
  }
  select{
   width:447px;
   height:48px;
   background: #0000000B 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
margin-top: 9px;
cursor: pointer;


  }
  button{
     width:302px;
     height:49px;
     margin-top: 49px;
     margin-left:70px;
     border: 2px solid #767676;
border-radius: 4px;
font: normal normal medium 13px/20px Poppins;
font-family: 'Poppins', sans-serif;
letter-spacing: 0px;
color: #414141;
opacity: 1;
cursor: pointer;

  }
}

`