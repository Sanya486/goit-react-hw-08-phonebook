import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string().matches(
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    {
      message: `Names has to start with an alphabetical character (Latin or Cyrillic) and can contain spaces, hyphens, or single quotes. Names must not have leading or trailing spaces.`,
    }
  ),
  number: Yup.string().matches('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$', {
    message:
      'Please write only phone numbers with optional international prefix, area code, and various separator characters.',
  }),
});
