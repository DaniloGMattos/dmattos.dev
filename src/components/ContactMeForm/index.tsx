import { Form, InputBox, TextAreaBox } from './styles';

export const ContactMeForm = () => {
  return (
    <Form>
      <InputBox>
        <input placeholder=' ' type='text' name='name' id='' required />
        <span className='label'>Name</span>
      </InputBox>
      <InputBox>
        <input placeholder=' ' type='email' name='email' id='' required />
        <span className='label'>E-mail</span>
      </InputBox>
      <TextAreaBox>
        <textarea name='message' cols={50} required></textarea>
        <span className='label'>Message</span>
      </TextAreaBox>
    </Form>
  );
};
