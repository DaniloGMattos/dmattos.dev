import { Form } from './styles';

export const ContactMeForm = () => {
  return (
    <Form>
      <input type='text' name='name' id='' />
      <input type='email' name='email' id='' />
      <textarea name='message' cols={50}></textarea>
    </Form>
  );
};
