import { Form, InputBox } from './styles';

export const ContactMeForm = () => {
  return (
    <Form>
      <InputBox>
        <input type='text' name='name' id='' required />
        <span className='label'>Name</span>
      </InputBox>
      <InputBox>
        <input type='email' name='email' id='' required />

        <span className='label'>E-mail</span>
      </InputBox>

      <textarea name='message' cols={50} required></textarea>
    </Form>
  );
};
