import {
  InputLabel,
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
  InputBox,
  InputGroupBox,
  InputWrapper,
  ChartList,
  ChartListItem,
  InputComment,
} from './ModalCartCheckout.styled';
import { useState } from 'react';

const modalRoot = document.getElementById('modal-root');

const ModalCartCheckout = ({ onClose, data }) => {
  console.log(data);

  const [UserName, setUserName] = useState();
  const [SecondName, setSecondName] = useState();
  const [ThirdName, setThirdName] = useState();

  const dispatch = useDispatch();

  //   const handleSubmit = () => {
  //     let body = {
  //       price: parseInt(sum),
  //       category: getCategoryHref.href,
  //       title: title,
  //       product_about: productAbout,
  //       TM: tradeMark,
  //       description: cardDescription,
  //       short_description: shortDescription,
  //       image: cardImage,
  //       full_images: fullImages,
  //       image_of_size: [imageOfSize, sizing],
  //       instruction_description: [imageOfInstruction, instruction],
  //       recommended_products: checkedRecommended,
  //     };
  //     dispatch(productsOperations.add(body));
  //     // onClose();
  //   };

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
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        `Введіть ${"ім'я"} по-батькові (не обов'язково)`
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
