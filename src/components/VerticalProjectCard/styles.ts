import { styled } from '~/stitches.config';

export const Box = styled('div', {
  position: 'relative',
  height: '25rem',
  maxWidth: '300px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  borderRadius: '1.5rem',
  backgroundColor: '$blue3',
  overflow: 'hidden',
});
export const ProjectImageWrapper = styled('div', {
  position: 'absolute',
  top: '10%',
});
export const Description = styled('div', {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10px)',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 0 ',
  h2: {
    color: '#fff',
  },
});
