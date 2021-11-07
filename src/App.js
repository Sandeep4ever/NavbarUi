// import './App.css';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Assignto from './Components/Assignto';
const App = () => {
  return (
    <>
    <MainContainer>
    <Container>
     <Navbar/>
    
       <Assignto/>
      

     

   

    </Container>
      
    </MainContainer>
    </>

  )
}

export default App
 
const MainContainer =styled.div`
/* width: 100vw;
height: 100vh; */
display:flex;
justify-content: center;
background-color: skyblue;

`
const Container =styled.div`
width: 1366px;
height: 768px;
background-color: #ffffff;
overflow-x: hidden;
overflow-y: hidden;

`
// const DisableBc =styled.div`

// `

