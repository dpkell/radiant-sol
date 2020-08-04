import styled from 'styled-components';
import heroImage from '../../assets/header-rs_1.jpeg';

// primary-color: #ff800c
// secondary-color: #df293b

export const HeroBannerWrapper = styled.div`
    height: 80vh;
    width: 100%;
`;
export const HeroBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BorderBox = styled.div`
    display: flex;
    justify-content: center;
`

export const BorderLine = styled.div`
    margin: 5rem 0;
    background: linear-gradient(to right, #ff800c, #df293b);
    padding: 1.5px 0;
    width: 85%;
`;
export const HeroImageContainer = styled.div`
    height: 75vh;
    width: 100%;
`;
export const HeroImage = styled.div`
    height: 100%;
    width: 100%;
    background-blend-mode: overlay;
    background-image: linear-gradient(
            to right bottom,
            #ff800c,
            #df293b
        ),
    url(${heroImage});
    background-size: cover;
    background-position: center;
`;