import styled from "styled-components";
import { Header } from "./Header";
import { MainBlock } from "./MainBlock";

const Container = styled.div`
    width: 800px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const MainIndex = () => {
    return(
        <Container>
            <Header />
            <MainBlock />
        </Container>
    )
} 