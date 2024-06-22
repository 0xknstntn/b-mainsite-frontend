import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { Block3Logo } from "./Logo";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const WhiteText = styled.a <{ marginM: string, opacityM: string }>`
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all .3s ease-in-out;
    @media (max-width: 700px) {
        font-size: 22px;
    }
`

const DescriptionContainer = styled.div`
    width: 550px;
    margin: auto;
    text-align: center;
    margin-top: 30px;
    @media (max-width: 700px) {
        width: 90%;
        margin-top: 20px;
    }
`

const WhiteTextDescription = styled.a`
    color: #fff;
    font-size: 19px;
    font-weight: 500;
    @media (max-width: 700px) {
        font-size: 14px;
        line-height: 1.3rem;
    }
`




export const Block3 = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <Container>
            <WhiteText ref={ref}
                marginM={inView == true ? '60px' : '80px'}
                opacityM={inView == true ? '1' : '0'}>Following Bitcoin`s principles</WhiteText>
            <DescriptionContainer>
                <WhiteTextDescription>
                    Bytecoin mirrors Bitcoin's economic model, but instead of
                    electricity costs being paid to power companies, these costs
                    are redirected to Bytecoin's liquidity pool on a decentralized
                    exchange (DEX). This mechanism enhances Bytecoin's liquidity
                    while maintaining the core principles of Bitcoin economy.
                </WhiteTextDescription>
            </DescriptionContainer>
            <Block3Logo />
        </Container>
    )
}