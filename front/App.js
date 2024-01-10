import styled from "styled-componets";
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layouts";
import Area from './components/area/Area'

function App() {
    return (
        <AppStyled className= "App">
        <Area />
        
            <MainLayout>
            
            </MainLayout>
        </AppStyled>
    );
}


const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;


`;

export default App;
