import styled from "styled-components";
import LogoBB from '../assets/BBLogo.webp'
import { useInView } from "react-intersection-observer";

const Logo = styled.img <{ marginM: string, opacityM: string }>`
    width: 400px;
    height: 400px;
    margin: auto;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all .3s ease-in-out;
    @media (max-width: 700px) {
        width: 300px;
        height: 300px;
    }
`


export const Block3Logo = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return(
        <Logo src={LogoBB} ref={ref}
        marginM={inView == true ? '-40px' : '10px'}
        opacityM={inView == true ? '1' : '0'}/>
    )
}