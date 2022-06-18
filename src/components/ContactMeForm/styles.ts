import { styled } from '~/stitches.config';

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  input: {
    width: '100%',
    height: '2.5rem',
    borderRadius: '99999px',
  },
  textarea: {
    width: '100%',
    height: '6rem',
    resize: 'none',
    borderRadius: '5px',
  },
});
