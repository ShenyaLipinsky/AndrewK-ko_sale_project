import {
  ModalWindow,
  CloseButton,
  Overlay,
  PrimaryButton,
  SecondaryButton,
  StyledForm,
  Title,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { Field, Formik } from 'formik';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import {
  StyledBox,
  InputLabel,
  InputBox,
  InputGroupBox,
  InputWrapper,
  ChartList,
  ChartListItem,
  InputComment,
} from './ModalCartCheckout.styled';
import { useState } from 'react';

const modalRoot = document.getElementById('modal-root');

const ModalCartCheckout = ({ onClose, data, email = '' }) => {
  console.log(data, email);

  const [UserName, setUserName] = useState();
  const [SecondName, setSecondName] = useState();
  const [ThirdName, setThirdName] = useState('');
  const [UserMail, setUserMail] = useState(email);
  const [UserPhone, setUserPhone] = useState();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let body = {
      userName: UserName,
      userSecondName: SecondName,
      userThirdName: ThirdName,
      userEmail: UserMail,
      userPhone: UserPhone,
    };
    // dispatch(productsOperations.add(body));
    // onClose();
  };

  const handleChange = e => {
    console.log(e);
    // if (!e.target) {
    // const { name } = e;
    // switch (name) {
    //   case 'category':
    //     setuse(e.label);
    //     break;

    //   default:
    //     break;
    // }
    // } else {
    const { name, value } = e.target;
    switch (name) {
      case 'UserName':
        setUserName(value);
        break;
      case 'UserSecondName':
        setSecondName(value);
        break;
      case 'UserThirdName':
        setThirdName(value);
        break;

      case 'UserMail':
        setUserMail(value);
        break;

      case 'UserPhone':
        setUserPhone(value);
        break;

      default:
        break;
    }
    // }
    console.log(UserName);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // const validDate = chosenDate => {
  //   return chosenDate.isBefore(moment(new Date()));
  // };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Media
          query="(min-width: 768px)"
          render={() => <CloseButton onClick={() => onClose()} />}
        />

        <Title>
          {
            // t('ModalAdd.Category')
            'Ваше замовлення:'
          }
        </Title>

        <Formik
        //   initialValues={initialValues}
        //   validationSchema={transactionSchema}
        //   onChange={handleChange}
        >
          {({ touched, errors }) => (
            <StyledBox>
              <InputBox>
                <InputGroupBox>
                  <InputWrapper>
                    <ChartList>
                      <ChartListItem>
                        <p>Товар</p>
                        <p>Ціна</p>
                        <p>К-ть</p>
                        <p>Дії</p>
                      </ChartListItem>
                      {data.map(({ title, price, quantity }) => {
                        return (
                          <ChartListItem>
                            <p>{title}</p>
                            <p>{price}</p>
                            <p>{quantity}</p>
                            <div>
                              <button>+</button>
                              <button>-</button>
                            </div>
                          </ChartListItem>
                        );
                      })}
                    </ChartList>
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="UserName">Ім'я: </InputLabel>
                    <Field
                      name="UserName"
                      type="text"
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        "Введіть ім'я"
                      }
                      required={true}
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="UserSecondName">Прізвище: </InputLabel>
                    <Field
                      name="UserSecondName"
                      type="text"
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        'Введіть прізвище'
                      }
                      required={true}
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="UserThirdName">
                      По батькові:
                    </InputLabel>
                    <Field
                      name="UserThirdName"
                      type="text"
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        `Введіть ${"ім'я"} по-батькові (не обов'язково)`
                      }
                      required={false}
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="UserMail">Пошта: </InputLabel>
                    <Field
                      name="UserMail"
                      type="email"
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        'Введіть вашу поштову скриньку'
                      }
                      required={true}
                      value={UserMail}
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="UserPhone">Телефон: </InputLabel>
                    <Field
                      name="UserPhone"
                      type="text"
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        'Ваш мобільний номер телефону'
                      }
                      required={true}
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                </InputGroupBox>
              </InputBox>
              <InputGroupBox>
                <PrimaryButton
                  type="submit"
                  htmlType="button"
                  onClick={() => {
                    //   handleSubmit();
                    console.log('click on submit');
                    console.log(
                      UserName,
                      SecondName,
                      ThirdName,
                      UserMail,
                      UserPhone
                    );
                  }}
                >
                  {/* {t('ModalAdd.ButtonAdd')} */}
                  Змінити
                </PrimaryButton>

                <SecondaryButton htmlType="button" onClick={() => onClose()}>
                  {/* {t('ModalAdd.ButtonCensel')} */}
                  Відміна
                </SecondaryButton>
              </InputGroupBox>
            </StyledBox>
          )}
        </Formik>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default ModalCartCheckout;
