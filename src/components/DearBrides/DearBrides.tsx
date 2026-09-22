'use client';
import React from 'react';
import { Container } from '@mui/material';
import {
  StyledH1,
  StyledH2,
  StyledP,
  StyledSection,
  StyledButtonWrapper,
  StyledWrapper,
  StyledWrapperLeft,
  StyledWrapperRight,
  StyledButton,
  StyledImg,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const DearBrides = () => {
  const { isMobile } = useResponsive();
  return (
    <section>
      <StyledSection isMobile={isMobile}>
        <Container sx={{ padding: isMobile ? '0' : '0 10px' }}>
          <StyledWrapper isMobile={isMobile}>
            <StyledWrapperLeft isMobile={isMobile}>
              <StyledH1 variant='h2' isMobile={isMobile}>dear brides</StyledH1>
              <StyledH2 variant='body1' isMobile={isMobile}>
                Please read the following information prior to filling out the
                booking form.
              </StyledH2>
              <StyledP variant='body1' isMobile={isMobile}>
                The earliest start time available for hair styling services is
                6.30 a.m.
              </StyledP> 
              <StyledP variant='body1' isMobile={isMobile}>
                Minimum booking package is " The Intimate" required for Friday,
                Saturday and bookings; May-October.
              </StyledP>
              <StyledP variant='body1' isMobile={isMobile}>
                Travel is available up to 1,5 hours from Amsterdam. For longer
                travel distances, overnight accommodation may be required. 
              </StyledP>
              <StyledP variant='body1' isMobile={isMobile}>
                Bridal previews are only available after a booking is made and
                the retainer has been paid. They are
                exclusively for brides, not bridal party members or moms. 
              </StyledP>
            </StyledWrapperLeft>
            <StyledWrapperRight isMobile={isMobile}>
              <StyledImg src='/img/contact/dearbrides.png' alt='dear brides' isMobile={isMobile} />
            </StyledWrapperRight>
          </StyledWrapper>
        </Container>
      </StyledSection>
      <StyledButtonWrapper>
        <StyledButton variant='contained' href='#form'>inquire now</StyledButton>
      </StyledButtonWrapper>
    </section>
  );
};
