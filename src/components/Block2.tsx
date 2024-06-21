import styled from "styled-components";
import Scheme from './assets/Scheme.svg'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
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
`

const WhiteTextContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
`

const WhiteText = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
`

const Logo = styled.img`
    width: 500px;
    height: 500px;
    margin: 30px auto;
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