import Image from 'next/image';
import { styled } from '~/stitches.config';

export const Wrapper = styled('main', {
  maxWidth: '1120px',
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',
  alignItems: ' center',
  justifyContent: 'space-between',
});
export const Banner = styled('section', {
  width: '100%',
  height: '25rem',
  marginBottom: '7rem',
  backgroundColor: 'rgba(196, 196, 196, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  padding: '4rem 0 0 1rem',
  h1: {
    maxWidth: '60%',
    fontSize: '5rem',
    textAlign: 'center',
    letterSpacing: '0.2rem',
    span: {
      color: '$cyan9',
    },
  },
});
export const Hero = styled('section', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem',
});
export const HeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  justifyContent: 'center',
  gap: '0.5rem',
  maxWidth: '50%',
  h6: {
    color: '$plum6',
    font: '400 1.5rem Fira Code, monospace',
  },
  h1: {
    fontSize: '4rem',
  },
  h3: {
    fontSize: '2rem',
  },
  p: {
    fontSize: '1.5rem',
  },
});

export const HeroImage = styled(Image, {});
export const About = styled('section', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const AboutImage = styled(Image, {});
export const AboutContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
  maxWidth: '40%',
  h3: {
    fontSize: '2rem',
  },
  p: {
    fontSize: '1.5rem',
  },
});
export const Projects = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  h3: {
    fontSize: '2rem',
    alignSelf: 'flex-start',
  },
});
export const CardContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});
export const Footer = styled('footer', {
  width: '100%',
  backgroundColor: '#090909',
  h3: {
    fontSize: '2rem',
  },
  '& .footer-content': {
    display: 'flex',
    margin: '0 auto',
    height: '25rem',
    maxWidth: '1120px',
    padding: '4rem 0 1rem 0',
    justifyContent: 'space-between',
    gap: '4rem',

    '& .footer-decoration': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',

      '& .icon': {
        width: '100%',
        height: '2rem',
        backgroundColor: '#fff',
      },
    },
    '& .form-container': {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
  },
});
export const IconButton = styled('button', {
  borderRadius: '99999px',
  padding: '4px 16px',
  color: '$cyan11',
  backgroundColor: '$cyan4',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  maxWidth: 'fit-content',
  alignSelf: 'flex-end',
  fontSize: '18px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '$cyan5',
  },
  '&:active': {
    backgroundColor: '$cyan6',
  },
  '&:focus-visible': {
    outline: '-webkit-focus-ring-color auto 1px',
  },
});
