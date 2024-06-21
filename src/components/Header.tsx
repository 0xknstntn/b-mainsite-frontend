import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
`

const Name = styled.a`
    color: #fff;
    font-size: 25px;
    font-family: 600;
`


export const Header = () => {
    return(
        <Container>
            <Name>Bytecoin</Name>
        </Container>
    )
}