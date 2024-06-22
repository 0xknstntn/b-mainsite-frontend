import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const WhiteTextContainer = styled.div <{ marginM: string, opacityM: string }>`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all .3s ease-in-out;
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


export const Block2Description = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <WhiteTextContainer ref={ref}
        marginM={inView == true ? '20px' : '30px'}
        opacityM={inView == true ? '1' : '0'}>
            <WhiteText>
                Miners spend electricity while
                mining, 80% of the electricity cost goes to liquidity pool through Deduct boosts. <br />
                Farmers provide liquidity to miners through liquidity pool and getrewards from boosts.
            </WhiteText>
        </WhiteTextContainer>
    )
}