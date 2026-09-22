'use client';

import React, { useState } from 'react';
import { Container } from '@mui/material';
import {
  StyledSection,
  StyledWrapper,
  StyledH1,
  StyledH2,
  StyledImg,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

const portfolioData = [
  // 1. Азиатское видео
  {
    title: 'Asian Soft Glam Video',
    type: 'video',
    category: 'asian',
    url: '/video/asian-bridal-video-amsterdam.mp4.mp4',
    alt: 'Asian bridal makeup process video in Amsterdam by Bride Palette',
    grid: '1 / 1 / 4 / 2',
    isTall: true,
  },
  // 2. Видео Half Up Half Down
  {
    title: 'Bridal Half Up Half Down Styling | Amsterdam',
    type: 'video',
    category: 'hairstyles',
    url: '/video/bridal-half-up-half-down-hairstylist-amsterdam.mp4',
    alt: 'Textured bridal half up half down hairstyle with romantic waves by Amsterdam hairstylist Bride Palette',
    grid: '1 / 2 / 4 / 3',
    isTall: true,
  },
  // 3. НОВОЕ ВИДЕО: Low Updo (Низкий пучок)
  {
    title: 'Bridal Low Updo Hairstyle | Amsterdam',
    type: 'video',
    category: 'hairstyles',
    url: '/video/bridal-low-updo-hairstyle-amsterdam.mp4',
    alt: 'Textured bridal low updo hairstyle with romantic volume in Amsterdam by Bride Palette',
    grid: '4 / 1 / 7 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0001',
    type: 'image',
    category: 'european',
    url: '/img/portfolio/section_1.jpg',
    alt: 'Classic European bridal hair and makeup in Amsterdam',
    grid: '4 / 2 / 7 / 3',
    isTall: true,
  },
  {
    title: 'IMG_0002',
    type: 'image',
    category: 'tan',
    url: '/img/portfolio/section_2.jpg',
    alt: 'Bridal makeup for tan skin with golden glow in Netherlands',
    grid: '7 / 1 / 10 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0003',
    type: 'image',
    category: 'hairstyles',
    url: '/img/portfolio/section_3.jpg',
    alt: 'Textured wedding updo hairstyle by Amsterdam bridal hairstylist',
    grid: '7 / 2 / 9 / 3',
    isTall: false,
  },
  {
    title: 'IMG_0005',
    type: 'image',
    category: 'asian',
    url: '/img/portfolio/section_5.jpg',
    alt: 'Asian soft glam bridal beauty in Amsterdam by Bride Palette',
    grid: '10 / 1 / 13 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0007',
    type: 'image',
    category: 'european',
    url: '/img/portfolio/section_7.jpg',
    alt: 'Natural romantic bridal makeup Netherlands',
    grid: '9 / 2 / 11 / 3',
    isTall: false,
  },
  {
    title: 'IMG_0008',
    type: 'image',
    category: 'hairstyles',
    url: '/img/portfolio/section_8.jpg',
    alt: 'Wedding hairstyle details for bride in Amsterdam',
    grid: '13 / 1 / 15 / 2',
    isTall: false,
  },
  {
    title: 'IMG_0009',
    type: 'image',
    category: 'tan',
    url: '/img/portfolio/section_9.jpg',
    alt: 'Glowy bridal makeup on warm skin tone in Netherlands',
    grid: '11 / 2 / 14 / 3',
    isTall: true,
  },
  {
    title: 'IMG_0010',
    type: 'image',
    category: 'asian',
    url: '/img/portfolio/section_10.jpg',
    alt: 'Asian bridal hair styling and makeup in Amsterdam',
    grid: '15 / 1 / 18 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0011',
    type: 'image',
    category: 'european',
    url: '/img/portfolio/section_11.jpg',
    alt: 'Soft glam European wedding look in Netherlands',
    grid: '14 / 2 / 17 / 3',
    isTall: true,
  },
  {
    title: 'IMG_0012',
    type: 'image',
    category: 'hairstyles',
    url: '/img/portfolio/section_12.jpg',
    alt: 'Textured bridal bun hairstyle Bride Palette',
    grid: '18 / 1 / 20 / 2',
    isTall: false,
  },
  {
    title: 'IMG_0013',
    type: 'image',
    category: 'tan',
    url: '/img/portfolio/section_13.jpg',
    alt: 'Sun-kissed bronzed bridal makeup in Amsterdam',
    grid: '17 / 2 / 20 / 3',
    isTall: true,
  },
];

export const EveryBrideDeserves = () => {
  const { isMobile } = useResponsive();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <StyledSection isMobile={isMobile} style={{ backgroundColor: '#ffffff', color: '#000000' }}>
      <Container style={{ backgroundColor: '#ffffff' }}>
        <StyledH1 variant='h3' style={{ color: '#000000' }}>every bride deserves</StyledH1>
        <StyledH2 variant='h3'>to fall in love with themselves</StyledH2>

        {/* Переключатель категорий */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          margin: '25px 0 35px 0',
        }}>
          {[
            { id: 'all', label: 'All Work' },
            { id: 'asian', label: 'Asian Bridal' },
            { id: 'tan', label: 'Tan & Golden Skin' },
            { id: 'european', label: 'Classic Soft Glam' },
            { id: 'hairstyles', label: 'Hairstyles & Updos' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              style={{
                padding: '8px 20px',
                borderRadius: '25px',
                border: '1px solid #2b2b2b',
                backgroundColor: activeCategory === tab.id ? '#2b2b2b' : '#ffffff',
                color: activeCategory === tab.id ? '#ffffff' : '#2b2b2b',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 500,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Галерея медиафайлов */}
        <StyledWrapper isMobile={isMobile}>
          {filteredItems.map((item, index) => {
            const gridStyle = activeCategory === 'all' ? item.grid : 'auto';

            return item.type === 'video' ? (
              <div 
                key={item.url + index} 
                style={{ 
                  gridArea: gridStyle, 
                  width: '100%', 
                  minHeight: '350px',
                  height: '100%', 
                  overflow: 'hidden', 
                  borderRadius: '8px',
                  backgroundColor: '#fafafa',
                }}
              >
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ) : (
              <StyledImg
                key={item.title + index}
                src={item.url}
                alt={item.alt}
                grid={gridStyle}
                isTall={item.isTall}
              />
            );
          })}
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
