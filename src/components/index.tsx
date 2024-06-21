import styled from "styled-components";
import { Header } from "./Header";
import { MainBlock } from "./MainBlock";
import { Block2 } from "./Block2";

const Container = styled.div`
    width: 800px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`


export const MainIndex = () => {
    return(
        <Container>
            <Header />
            <MainBlock />
            <Block2 />
        </Container>
    )
} 