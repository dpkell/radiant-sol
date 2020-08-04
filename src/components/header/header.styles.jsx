import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/logo-basic.svg';

export const HeaderContainer = styled.header`
    height: 8.5rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background: #fff;
    
`;
// export const RadiantLogo = styled(Logo)`
//     height: 100%;
//     width: auto;
    
// `;

export const LogoTitle = styled.h1`
    font-family: 'Cinzel';
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.6;
    text-transform: uppercase;
    margin: 0;
    padding-right: 3rem;
`;

export const LogoSubTitle = styled.h3`
    font-family: 'Cinzel';
    fony-size: 2.2rem;
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0;
    padding-left: 3rem;
`
export const LeftNavContainer = styled.div`
    height: 100%;
    width: 15rem;

`;

export const CenterNavContainer = styled.div`
    height: 100%;
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RightNavContainer = styled.div`
    height: 100%;
    width: 15rem;
`;

export const HeaderBorderLine = styled.div`
background: linear-gradient(to right, #ff800c, #df293b);
padding: 1.5px 0;
width: 100%;
`;
