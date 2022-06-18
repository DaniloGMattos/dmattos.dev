import { styled } from '~/stitches.config';

export const Form = styled('form', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  textarea: {
    width: '100%',
    height: '6rem',
    resize: 'none',
    borderRadius: '5px',
  },
});
export const InputBox = styled('div', {
  position: 'relative',
  width: '100%',

  input: {
    outline: 'none',

    width: '100%',
    height: '2.5rem',
    padding: '10px',
    borderRadius: '99999px',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.25)',
    '&:valid, &:focus': {
      border: '1px solid $cyan9',
    },
    '&:valid ~span, &:focus ~span': {
      transform: 'translate(10px,-7px)',
      fontSize: '0.65em',
      padding: '0 10px',
      borderRadius: '99999px',
      background: '$cyan9',
    },
  },
  span: {
    position: 'absolute',
    pointerEvents: 'none',
    left: 0,
    padding: '10px',
    transition: '0.5s',
  },
});
