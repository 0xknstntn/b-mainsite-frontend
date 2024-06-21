import styled from "styled-components";
import BytecoinWhite from './assets/BytecoinWhite.png'

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

const Logo = styled.img`
    width: 60px;
    height: 60px;
`


export const Header = () => {
    return(
        <Container>
            <Logo src={BytecoinWhite}/>
            <Name>Bytecoin</Name>
        </Container>
    )
}