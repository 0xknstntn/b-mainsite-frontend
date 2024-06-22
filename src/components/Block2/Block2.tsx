import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { Block2Description } from "./Description";
import { Block2Scheme } from "./Scheme";

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

const Name = styled.a <{ marginM: string, opacityM: string }>`
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all .3s ease-in-out;
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



export const Block2 = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <Container>
            <Name ref={ref}
                marginM={inView == true ? '0px' : '30px'}
                opacityM={inView == true ? '1' : '0'}>Economy</Name>
            <GreyTextContainer>
                <GreyText>Blockchain: TON</GreyText>
                <GreyText>Total supply: 21m BYTE</GreyText>
                <GreyText>Halvings: Every 1 month</GreyText>
                <GreyText>Total NFT Miners supply: 3000 NFT</GreyText>
                <GreyText>1 block = 1 day</GreyText>
            </GreyTextContainer>
            <Block2Description />
            <Block2Scheme />
        </Container>
    )
}