import styled from "styled-components";
import Scheme from './assets/Scheme.webp'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    @media (max-width: 700px) {
        width: 85%;
        margin-top: 100px;
    }
`

const Name = styled.a`
    color: #fff;
    font-size: 40px;
    font-weight: 600;
`

const GreyTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
`

const GreyText = styled.a`
    color: #b5b5b5;
    font-size: 20px;
    font-weight: 600;
    @media (max-width: 700px) {
        font-size: 16px;
    }
`

const WhiteTextContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
    @media (max-width: 700px) {
        width: 90%;
    }
`

const WhiteText = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5rem;
    @media (max-width: 700px) {
        font-size: 16px;
        line-height: 1.3rem;
    }
`

const Logo = styled.img`
    width: 520px;
    height: 450px;
    margin: 60px auto;
    @media (max-width: 700px) {
        width: 320px;
        height: 270px;
    }
`


export const Block2 = () => {
    return (
        <Container>
            <Name>Economy</Name>
            <GreyTextContainer>
                <GreyText>Blockchain: TON</GreyText>
                <GreyText>Total supply: 21m BYTE</GreyText>
                <GreyText>Halvings: Every 1 month</GreyText>
                <GreyText>Total NFT Miners supply: 3000 NFT</GreyText>
                <GreyText>1 block = 1 day</GreyText>
            </GreyTextContainer>
            <WhiteTextContainer>
                <WhiteText>
                    Miners spend electricity while
                    mining, 80% of the electricity cost goes to liquidity pool through Deduct boosts. <br/>
                    Farmers provide liquidity to miners through liquidity pool and getrewards from boosts.
                </WhiteText>
            </WhiteTextContainer>
            <Logo src={Scheme}/>
        </Container>
    )
}