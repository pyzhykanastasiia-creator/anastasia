import React from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledP,
  StyledSection,
  StyledWrapper,
  StyledH1,
  StyledH2,
  StyleUL,
  StyledLi,
  StyledWrapperLeft,
  StyledWrapperRight,
  StyledImage,
  StyledText,
  StyledPOrange,
  StyledImgWrapper,
  StyledImgText,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const TrustedBy = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledSection>
      <Container>
        <StyledWrapper isMobile={isMobile}>
          <StyledWrapperLeft>
            <StyledH1 variant='h3' isMobile={isMobile}>
              TRUSTED BY OVER 800+ BRIDES
            </StyledH1>
            <StyledH2 variant='h3' isMobile={isMobile}>
              more than just makeup and hair
            </StyledH2>
            <StyledP variant='body2'>
              You don’t want to *just look* beautiful on your wedding day. You
              want to feel held, understood, and guided — from the moment you
              open your eyes until the last touch-up before the evening photos.
            </StyledP>
            <StyledP variant='body2'>
              You want someone who’s not only a top-level expert but also your
              calm presence, your invisible right hand, and your source of
              confidence when emotions run high.
            </StyledP>
            <StyledP variant='body2'>
              I take full care of your look — from the trial to the last
              touch-up on the wedding day.
            </StyledP>
            <StyleUL>
              <StyledLi>
                <StyledP variant='body2'>
                  · I guide you through every decision with calm, loving
                  clarity: hair down or up, veil or no veil, glow or matte —
                  nothing is left to chance.
                </StyledP>
              </StyledLi>
              <StyledLi>
                <StyledP variant='body2'>
                  · I create a peaceful, emotionally safe space around you, so
                  you feel grounded and radiant — even if your heart is racing.
                </StyledP>
              </StyledLi>
              <StyledLi>
                <StyledP variant='body2'>
                  · I’m your mirror when you doubt. Your steady breath when
                  nerves kick in. Your extra pair of eyes, hands, and heart.
                </StyledP>
              </StyledLi>
            </StyleUL>
            <StyledP variant='body2'>
              *This isn’t a standard bridal service.*
              <br />
              This is a luxury experience created for brides who want to feel
              truly seen, incredibly beautiful, and completely supported.
            </StyledP>
            <br />
            <Button variant='text' href='/contact#form' component='a'>
              BOOK VIDEO CONSULTATION
            </Button>
          </StyledWrapperLeft>
          <StyledWrapperRight isMobile={isMobile}>
            <StyledImgWrapper isMobile={isMobile}>
              <StyledImage
                src='/img/homepage/Homepage2.jpg'
                alt='Homepage2'
                isMobile={isMobile}
              />
              {isMobile && (
                <StyledImgText variant='body2'>
                  “ You deserve to feel calm, stunning and truly like a queen”
                </StyledImgText>
              )}
            </StyledImgWrapper>
            {!isMobile && (
              <StyledText>
                <StyledP variant='body2'>I want you to say:</StyledP>
                <StyledPOrange variant='body2'>
                  “This was everything I didn’t even know
                </StyledPOrange>
                <StyledPOrange variant='body2'>I needed.</StyledPOrange>
                <StyledPOrange variant='body2'>She was magic.”</StyledPOrange>
              </StyledText>
            )}
          </StyledWrapperRight>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
