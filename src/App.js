// import './App.css';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Popup from './Components/Popup';

const App = () => {
  return (
    <>
    <MainContainer>
    <Container>
     <Navbar/>
   <PopCenter>
     <Popup/>
     </PopCenter>

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

`
const PopCenter =styled.div`
width: 1366px;
height:706px;
display:flex;
align-items: center;
justify-content: center;

`
