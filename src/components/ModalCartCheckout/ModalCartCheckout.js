import {
  InputBox,
  InputComment,
  InputGroupBox,
  InputLabel,
  InputWrapper,
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
import { StyledBox } from './ModalCartCheckout.styled';

const modalRoot = document.getElementById('modal-root');

const ModalCartCheckout = ({ onClose, data }) => {
  console.log(data);

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
                    <ul>
                      {data.map(({ title, price, quantity }) => {
                        return (
                          <li>
                            <p>{title}</p> <p>{price}</p>
                            <p>{quantity}</p>
                          </li>
                        );
                      })}
                    </ul>
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
