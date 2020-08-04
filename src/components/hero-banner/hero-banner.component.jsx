import React from 'react';

import {
    HeroBannerWrapper,
    HeroBannerContainer,
    HeroImageContainer, 
    HeroImage,
    BorderBox,
    BorderLine
} from './hero-banner.styles';

const HeroBanner = ({}) => (
    <HeroBannerWrapper>
        <HeroBannerContainer>
            <HeroImageContainer>
                <HeroImage />
            </HeroImageContainer>
        </HeroBannerContainer>
        <BorderBox>
            <BorderLine />
        </BorderBox>
        
    </HeroBannerWrapper>
)

export default HeroBanner;