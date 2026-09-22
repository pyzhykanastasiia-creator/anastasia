'use client';
import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import { AccordionSection } from '../AccordionSection/AccordionSection';
import {
  StyledWrapper,
  StyledSection,
  // StyledUl,
  // StyledLi,
  // StyledH2,
  // StyledTextList,
  // StyledTextItem,
  // StyledP,
  // StyledP1,
  // StyledImage,
  // StyledHiddenContainer,
  // StyleSpan,
  // StyledArrowWrapper,
  StyledTitle,
  StyledButtonWrapper,
} from './Styled';
import { Arrow } from '../../assets/icons/Arrow';
import { useResponsive } from '@/contexts/ResponsiveContext';

// const config = [
//   {
//     title: 'Accordion1',
//     image: '/img/homepage/Homepage9.jpg',
//     name: 'Basic',
//     name2: 'Package',
//     price: '€ 1000',
//     name3: "What you'll receive:",
//     text: [
//       'CONSULTATION',
//       'TRIAL HAIR AND MAKEUP',
//       'MAKEUP FOR OPEN-BODY PARTS',
//       'MAKEUP FOR BRIDEGROOM',
//       'GIFT BAG WITH TOUCH-UP ITEMS',
//     ],
//   },
//   {
//     title: 'Accordion2',
//     image: '/img/homepage/Homepage10.jpg',
//     name: 'Basic',
//     spanName: ' +2guest',
//     name2: 'Package',
//     price: '€ 1300',
//     name3: "What you'll receive:",
//     text: [
//       'SOFT MAKEUP&HAIRSTYLE FOR 2 GUESTS (MAX 1 HOUR FOR EACH)',
//       'CONSULTATION',
//       'TRIAL HAIR AND MAKEUP',
//       'MAKEUP FOR OPEN-BODY PARTS',
//       'MAKEUP FOR BRIDEGROOM',
//       'GIFT BAG WITH TOUCH-UP ITEMS',
//     ],
//   },
//   {
//     title: 'Accordion3',
//     image: '/img/homepage/Homepage11.jpg',
//     name: 'Luxe',
//     name2: 'Package',
//     price: '€ 1400',
//     name3: "What you'll receive:",
//     text: [
//       'PERSONAL BEAUTY ASSISTANT FOR 8 HOURS',
//       'CONSULTATION',
//       'TRIAL HAIR AND MAKEUP',
//       'MAKEUP FOR OPEN-BODY PARTS',
//       'MAKEUP FOR BRIDEGROOM',
//       'GIFT BAG WITH TOUCH-UP ITEMS',
//     ],
//   },
//   {
//     title: 'Accordion4',
//     image: '/img/homepage/Homepage12.png',
//     name: '2 grooms',
//     name2: 'Package',
//     price: '€ 550',
//     name3: "What you'll receive:",
//     text: [
//       'CONSULTATION',
//       'MAKEUP FOR 2 GROOMS',
//       'HAIRSTYLE FOR 2 GROOMS',
//     ],
//   },
// ];

export const BridalPackages = () => {
  // const [active, setActive] = useState({
  //   Accordion1: false,
  //   Accordion2: false,
  //   Accordion3: false,
  //   Accordion4: false,
  // });

  // const handleToggle = (title: keyof typeof active) => {
  //   setActive((prev) => ({ ...prev, [title]: !prev[title] }));
  // };
  const { isMobile } = useResponsive();

  return (
    <StyledSection isMobile={isMobile}>
      <Container maxWidth='xl'>
      <StyledTitle variant='h2' isMobile={isMobile}>Bridal Packages</StyledTitle>
        <StyledWrapper>
          <AccordionSection />
          {/* <StyledUl>
            {config.map((item) => (
              <StyledLi key={item.title} 
              isActive={active[item.title as keyof typeof active]}>
                <StyledImage src={item.image} alt={item.title} />
                <StyledH2 variant='h4'>
                  {item.name}
                  {item.spanName && <StyleSpan>{item.spanName}</StyleSpan>}
                </StyledH2>

                <StyledP1 variant='body1'>{item.name2}</StyledP1>
                <StyledP variant='h3'>{item.price}</StyledP>
                
                {active[item.title as keyof typeof active] && (
                  <StyledHiddenContainer>
                    <StyledTextList variant='body2'>{item.name3}</StyledTextList>
                    {item.text.map((text) => (
                      <StyledTextItem key={text} variant='body2'>{text}</StyledTextItem>
                    ))}
                  </StyledHiddenContainer>
                )}
                <StyledArrowWrapper
                  onClick={() =>
                    handleToggle(item.title as keyof typeof active)
                  }
                  isActive={active[item.title as keyof typeof active]}
                >
                  <Arrow />
                </StyledArrowWrapper>
              </StyledLi>
            ))}
          </StyledUl> */}
          <StyledButtonWrapper>
            <Button variant='text' href='/contact#form'>unlock your quote</Button>
          </StyledButtonWrapper>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
