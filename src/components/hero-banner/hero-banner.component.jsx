import React from 'react';

import {
    HeroBannerWrapper,
    HeroBannerContainer,
    HeroImageContainer, 
    HeroImage,
    BorderLine
} from './hero-banner.styles';

const HeroBanner = ({}) => (
    <HeroBannerWrapper>
        <HeroBannerContainer>
            <HeroImageContainer>
                <HeroImage />
            </HeroImageContainer>
        </HeroBannerContainer>
        <BorderLine />
    </HeroBannerWrapper>
)

export default HeroBanner;