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

// 1. Полный список медиафайлов: сохранены все текущие картинки + добавлено новое видео
const portfolioData = [
  // НОВОЕ ВИДЕО (Азиатский макияж)
  {
    title: 'Asian Soft Glam Video',
    type: 'video',
    category: 'asian',
    url: '/video/asian-bridal-video-amsterdam.mp4.mp4',
    alt: 'Asian bridal makeup process video in Amsterdam by Bride Palette',
    grid: '1 / 1 / 4 / 2',
    isTall: true,
  },
  
  // ТЕКУЩИЕ СНИМКИ С SEO-ОПИСАНИЯМИ И КАТЕГОРИЯМИ
  {
    title: 'IMG_0001',
    type: 'image',
    category: 'european',
    url: '/img/portfolio/section_1.jpg',
    alt: 'Classic European bridal hair and makeup in Amsterdam',
    grid: '5 / 1 / 8 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0002',
    type: 'image',
    category: 'tan',
    url: '/img/portfolio/section_2.jpg',
    alt: 'Bridal makeup for tan skin with golden glow in Netherlands',
    grid: '9 / 1 / 12 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0003',
    type: 'image',
    category: 'hairstyles',
    url: '/img/portfolio/section_3.jpg',
    alt: 'Textured wedding updo hairstyle by Amsterdam bridal hairstylist',
    grid: '13 / 1 / 14 / 2',
    isTall: false,
    {
  type: 'video',
  category: 'hairstyles', // Попадёт в папку/фильтр "Hairstyles & Updos"
  title: 'Bridal Half Up Half Down Styling | Amsterdam',
  url: '/video/bridal-half-up-half-down-hairstylist-amsterdam.mp4',
  alt: 'Textured bridal half up half down hairstyle with romantic waves by Amsterdam hairstylist Bride Palette',
  grid: '1 / 1 / 4 / 2', // Позиция в сетке
  isTall: true,
}
  },
  {
    title: 'IMG_0005',
    type: 'image',
    category: 'asian',
    url: '/img/portfolio/section_5.jpg',
    alt: 'Asian soft glam bridal beauty in Amsterdam by Bride Palette',
    grid: '15 / 1 / 18 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0007',
    type: 'image',
    category: 'european',
    url: '/img/portfolio/section_7.jpg',
    alt: 'Natural romantic bridal makeup Netherlands',
    grid: '19 / 1 / 20 / 2',
    isTall: true,
  },
  {
    title: 'IMG_0008',
    type: 'image',
    category: 'hairstyles',
    url: '/img/portfolio/section_8.jpg',
    alt: 'Wedding hairstyle details for bride in Amsterdam',
    grid: '1 / 2 / 2 / 3',
    isTall: false,
  },
  {
    title: 'IMG_0009',
    type: 'image',
    category: 'tan',
    url: '/img/portfolio/section_9.jpg',
    alt: 'Glowy bridal makeup on warm skin tone in Netherlands',
    grid: '3 / 2 / 6 / 3',
    isTall: true,
  },
  {
    title: 'IMG_0010',
    type: 'image',
    category: 'asian',
    url: '/img/portfolio/section_10.jpg',
    alt: 'Asian bridal hair styling and makeup in Amsterdam',
    grid: '7 / 2 / 10 / 3',
    isTall: true,
  },
  {
    title: 'IMG_0011',
    type: 'image',
    category: 'european',
    url: '/img/portfolio/section_11.jpg',
    alt: 'Soft glam European wedding look in Netherlands',
    grid: '11 / 2 / 14 / 3',
    isTall: true,
  },
  {
    title: 'IMG_0012',
    type: 'image',
    category: 'hairstyles',
    url: '/img/portfolio/section_12.jpg',
    alt: 'Textured bridal bun hairstyle Bride Palette',
    grid: '15 / 2 / 16 / 3',
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

  // Фильтрация элементов по категориям
  const filteredItems = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <StyledSection isMobile={isMobile}>
      <Container>
        <StyledH1 variant='h3'>every bride deserves</StyledH1>
        <StyledH2 variant='h3'>to fall in love with themselves</StyledH2>

        {/* 2. Кнопки переключения альбомов (Категорий) */}
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

        {/* 3. Галерея (Отрисовка фото и видео) */}
        <StyledWrapper isMobile={isMobile}>
          {filteredItems.map((item) => (
            item.type === 'video' ? (
              <div 
                key={item.url} 
                style={{ 
                  gridArea: item.grid, 
                  width: '100%', 
                  height: '100%', 
                  overflow: 'hidden', 
                  borderRadius: '8px' 
                }}
              >
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
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
                key={item.title}
                src={item.url}
                alt={item.alt} // Улучшено для SEO Google
                grid={item.grid}
                isTall={item.isTall}
              />
            )
          ))}
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
