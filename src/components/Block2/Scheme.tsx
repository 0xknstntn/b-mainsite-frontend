import styled from "styled-components";
import Scheme from '../assets/Scheme.webp'
import { useInView } from "react-intersection-observer";

const Logo = styled.img <{ marginM: string, opacityM: string }>`
    width: 520px;
    height: 450px;
    margin: auto;
    margin-bottom: 60px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all .3s ease-in-out;
    @media (max-width: 700px) {
        width: 320px;
        height: 270px;
    }
`


export const Block2Scheme = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <>
            <Logo src={Scheme} ref={ref}
                marginM={inView == true ? '60px' : '80px'}
                opacityM={inView == true ? '1' : '0'} />
        </>
    )
}