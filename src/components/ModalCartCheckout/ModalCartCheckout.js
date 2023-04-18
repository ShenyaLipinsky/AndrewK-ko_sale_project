import {
  InputBox,
  InputComment,
  InputGroupBox,
  InputLabel,
  InputWrapper,
  ModalWindow,
  Overlay,
  PrimaryButton,
  SecondaryButton,
  StyledForm,
  Title,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { Field, Formik } from 'formik';
import { useEffect } from 'react';
import { CloseButton } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import Media from 'react-media';
import { useDispatch } from 'react-redux';

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
            'Редагування товару'
          }
        </Title>

        <Formik
        //   initialValues={initialValues}
        //   validationSchema={transactionSchema}
        //   onChange={handleChange}
        >
          {({ touched, errors }) => (
            <StyledForm autoComplete="off">
              <InputBox>
                <InputGroupBox>
                  <h4>Картка товару: </h4>
                  <InputWrapper>
                    <InputLabel htmlFor="Title">Арт: </InputLabel>
                    <Field
                      name="title"
                      //   value={data.title}
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        // data.title
                        'lol'
                      }
                      //   onChange={handleChange}
                      as={InputComment}
                      maxLength={20}
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
            </StyledForm>
          )}
        </Formik>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default ModalCartCheckout;
