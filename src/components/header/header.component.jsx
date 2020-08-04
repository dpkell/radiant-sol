import React from 'react';


import { 
    HeaderContainer,
    HeaderBorderLine,
    LeftNavContainer,
    CenterNavContainer,
    RightNavContainer,
    LogoSubTitle,
    LogoTitle
} from './header.styles';

const Header = ({}) => (
    <div className='nav-wrapper'>
        <HeaderBorderLine />
        <HeaderContainer>
            <LeftNavContainer>
                
            </LeftNavContainer>

            <CenterNavContainer>
                <LogoTitle>Radiant Sol</LogoTitle>
                <LogoSubTitle>Custom Jewelry Designs</LogoSubTitle>
            </CenterNavContainer>

            <RightNavContainer>

            </RightNavContainer>
        </HeaderContainer>
    </div>
)

export default Header;