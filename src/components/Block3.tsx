import styled from "styled-components";
import LogoBB from './assets/BBLogo.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const WhiteText = styled.a`
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
`

const DescriptionContainer = styled.div`
    width: 550px;
    margin: auto;
    text-align: center;
    margin-top: 30px;
`

const WhiteTextDescription = styled.a`
    color: #fff;
    font-size: 19px;
    font-weight: 500;
`

const Logo = styled.img`
    width: 400px;
    height: 400px;
    margin: auto;
`


export const Block3 = () => {
    return (
        <Container>
            <WhiteText>Following Bitcoin`s principles</WhiteText>
            <DescriptionContainer>
                <WhiteTextDescription>
                    Bytecoin mirrors Bitcoin's economic model, but instead of
                    electricity costs being paid to power companies, these costs
                    are redirected to Bytecoin's liquidity pool on a decentralized
                    exchange (DEX). This mechanism enhances Bytecoin's liquidity
                    while maintaining the core principles of Bitcoin economy.
                </WhiteTextDescription>
            </DescriptionContainer>
            <Logo src={LogoBB}/>
        </Container>
    )
}