import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import {
  ErrorMessageBox,
  FormContainer,
  InputContainer,
  InputStyled,
} from 'components/LogIn/LogIn.styled';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ name, email, password }) => {
    dispatch(authOperations.register({ name, email, password }));
  };

  //email: "shenyalipinskiy@gmail.com"
  //name: 'Eugene';
  //password: '123456789';

  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        nameRegExp,
        `*Ім'я може мати літери, апострофи, дефіси та пробіли`
      )
      .min(2, `*Ім'я має бути більше двох літер`)
      .required(`*Ім'я обов'язкове`),
    email: yup
      .string()
      .email('*Не корректна адреса електронної пошти')
      .required(`*Пошта обов'язкова`),
    password: yup
      .string()
      .min(6, '*Пароль має містити мінімум 6 символів')
      .required(`*Пароль обов'язковий`),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmitForm(values);
        setSubmitting(true);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <FormContainer>
            <Form name="registration" noValidate onSubmit={handleSubmit}>
              <InputContainer className="mb-5" controlId="formBasicName">
                <Form.Label>Ім'я:</Form.Label>
                <InputStyled
                  type="name"
                  name="name"
                  placeholder="Введіть Ім'я"
                  value={values.name}
                  onChange={handleChange}
                  className={touched.name && errors.name ? 'error' : null}
                  required
                />
                {touched.name && errors.name ? (
                  <ErrorMessageBox className="error-message">
                    {errors.name}
                  </ErrorMessageBox>
                ) : null}
              </InputContainer>

              <InputContainer className="mb-5" controlId="formBasicEmail">
                <Form.Label>Пошта:</Form.Label>
                <InputStyled
                  type="email"
                  name="email"
                  placeholder="Введіть пошту"
                  value={values.email}
                  onChange={handleChange}
                  className={touched.email && errors.email ? 'error' : null}
                  required
                />
                {touched.email && errors.email ? (
                  <ErrorMessageBox className="error-message">
                    {errors.email}
                  </ErrorMessageBox>
                ) : null}
              </InputContainer>

              <InputContainer className="mb-5" controlId="formBasicPassword">
                <Form.Label>Пароль:</Form.Label>
                <InputStyled
                  type="password"
                  name="password"
                  placeholder="Введіть пароль"
                  value={values.password}
                  onChange={handleChange}
                  className={
                    touched.password && errors.password ? 'error' : null
                  }
                  required
                />
                {touched.password && errors.password ? (
                  <ErrorMessageBox className="error-message">
                    {errors.password}
                  </ErrorMessageBox>
                ) : null}
              </InputContainer>

              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Зареєструватись
              </Button>
            </Form>
          </FormContainer>
        );
      }}
    </Formik>
  );
};

export default Registration;
