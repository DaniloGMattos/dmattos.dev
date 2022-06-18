import { styled } from '~/stitches.config';

export const Box = styled('div', {
  position: 'absolute',
  width: 773,
  height: 272,
  borderRadius: 10,
  top: '30%',
  right: '-20%',
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(15px)',
  display: 'flex',
  flexDirection: 'column',
});
