'use client';
import React from 'react';
import { Container } from '@mui/material';
import {
  StyledH1,
  StyledH2,
  StyledP,
  StyledImgWrapper,
  StyledUl,
  StyledLi,
  StyledSection,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';
import { SwiperComponent } from '@/components/Swiper/Swiper';

const config = {
  hairstyles: [
    {
      title: 'Hairstyle 1',
      image: '/img/homepage/Homepage3.jpg',
    },
    {
      title: 'Hairstyle 2',
      image: '/img/homepage/Homepage4.jpg',
    },
    {
      title: 'Hairstyle 3',
      image: '/img/homepage/Halfuphalfdownhairstyle.JPG',
    },
  ]
};

export const SomeOf = () => {
  const { isMobile } = useResponsive();
  return (
    <section>
      <StyledSection isMobile={isMobile}>
        <Container>
          <StyledH1 variant='h2'>Some of my work</StyledH1>
          <StyledH2 variant='h2'>Requested Hairstyles</StyledH2>
          <StyledP variant='body1' isMobile={isMobile}>
            I’m not here to do a quick hairstyle and leave. I become your
            Personal Beauty Assistant — someone who stays with you the entire
            day, ensuring that everything beauty-related feels perfect,
            effortless, and entirely *you*.
          </StyledP>
          <StyledImgWrapper>
            {isMobile && (
              <SwiperComponent config={config.hairstyles} id='hairstylesMobile' />
            )}
            {!isMobile && (
              <StyledUl>
                {config.hairstyles.map((hairstyle) => (
                  <StyledLi url={hairstyle.image} key={hairstyle.title} />
                ))}
              </StyledUl>
            )}
          </StyledImgWrapper>
        </Container>
      </StyledSection>
    </section>
  );
};
