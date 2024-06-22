import styled from "styled-components";
import { Header } from "./Header";
import { MainBlock } from "./MainBlock";
import { Block2 } from "./Block2";
import { Block3 } from "./Block3";

const Container = styled.div`
    width: 800px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    @media (max-width: 800px) {
        width: 700px;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`


export const MainIndex = () => {
    return(
        <Container>
            <Header />
            <MainBlock />
            <Block2 />
            <Block3 />
        </Container>
    )
} 