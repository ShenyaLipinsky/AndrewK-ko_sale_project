import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { Formik, Field } from 'formik';
// import { FormError } from '../AuthForm/FormError';
import * as yup from 'yup';
import moment from 'moment';
// import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Media from 'react-media';
import Select from 'react-select';
import { selectStyles } from './SelectStyles';
import PropTypes from 'prop-types';
import {
  Overlay,
  ModalWindow,
  CloseButton,
  Title,
  StyledForm,
  InputBox,
  InputWrapper,
  InputCategory,
  InputAmount,
  // InputDate,
  // CalendarIcon,
  InputComment,
  PrimaryButton,
  SecondaryButton,
  InputGroupBox,
  InputLabel,
  FullImagesInputBox,
  InputImageButtonAdd,
  InputImageButtonRemove,
  InputRecommendedBtnAdd,
  InputRecommendedBtnRemove,
} from './ModalAddTransaction.styled';
// import {
//   Switcher,
//   SwitchBox,
//   Switch,
//   StyledButton,
//   Income,
//   Expense,
// } from './TypeSwitcher.styled';
import { PlusOutlined, MinusOutlined, DownOutlined } from '@ant-design/icons';

// import {
//   addTransaction,
//   categoriesSelectors,
//   getCategories,
// } from '../../redux';
import './rdt-styles.css';
import { navItems } from 'components/AppBar/NavItems';
import { fetchProducts } from 'components/services/API-Products_DB';
import { productsOperations } from 'redux/products/productsOperations';
import { createGlobalStyle } from 'styled-components';
import { OffcanvasTitle } from 'react-bootstrap';

const modalRoot = document.getElementById('modal-root');

const transactionSchema = yup.object().shape({
  sum: yup
    .number()
    .positive('Sum must be a positive number')
    .required('Sum is a required field'),
  category: yup.string().required('Choose category'),
  comment: yup.string(),
  date: yup
    .date()
    .max(moment().add(1, 'hour'), `Date should be today or earlier`)
    .default(() => new Date())
    .required(),
  type: yup.string().required(),
});

const ModalAddTransaction = ({ onClose, data }) => {
  // console.log(data);
  const [title, setTitle] = useState(data.title);
  const [tradeMark, setTradeMark] = useState(data.TM);
  const [category, setCategory] = useState(data.category);
  const [cardDescription, setCardDescription] = useState(data.description);
  const [cardImage, setCardImage] = useState(data.image);
  const [sum, setSum] = useState(data.price);
  const [shortDescription, setShortDescription] = useState(
    data.short_description
  );
  const [productAbout, setProductAbout] = useState(data.product_about);
  const [fullImages, setFullImages] = useState(data.full_images);
  const [imageOfSize, setImageOfSize] = useState(data.image_of_size[0]);
  const [sizing, setSizing] = useState(data.image_of_size[1]);
  const [imageOfInstruction, setImageOfInstruction] = useState(
    data.instruction_description[0]
  );
  const [instruction, setInstruction] = useState(
    data.instruction_description[1]
  );
  const [recommended, setRecommended] = useState([]);
  const [checkedRecommended, setCheckedRecommended] = useState(
    data.recommended_products === undefined ? [''] : data.recommended_products
  );
  const [checkedRecomTitle, setCheckedRecomTitle] = useState([]);

  const [typeTransaction, setTypeTransaction] = useState('income');

  const { t } = useTranslation();
  const initialValues = {
    sum: 0,
    title: '',
    category: '',
    tradeMark: '',
    cardDescription: '',
    cardImage: '',
    shortDescription: '',
    productAbout: '',
    fullImages: [],
    imageOfSize: '',
    sizing: '',
    imageOfInstruction: '',
    instruction: '',
    recommended: [],
  };

  const dispatch = useDispatch();

  const categories = navItems[0].buttons;
  const getCategoryHref = categories.find(el => category === el.text);

  useEffect(() => {
    const recommendedProducts = async () => {
      await fetchProducts()
        .then(res =>
          res.result.map(({ title, _id }) => {
            return { title, _id };
          })
        )
        .then(setRecommended);
    };
    recommendedProducts();
  }, []);

  useEffect(() => {
    categories.map(({ href, text }) => {
      if (data.category === href) {
        return setCategory(text);
      }
      return data.category;
    });
  }, [categories, data.category]);

  useEffect(() => {
    if (recommended === undefined || recommended.length === 0) {
      return;
    }
    let newTitleArray = checkedRecommended.map(elem => {
      const newTitle = recommended.find(el => elem === el._id);
      if (newTitle === undefined) {
        return 'Виберіть рекомендовані товари';
      }
      return newTitle.title;
    });
    return setCheckedRecomTitle(newTitleArray);
  }, [checkedRecommended, recommended]);
  // useEffect(() => {
  //   dispatch(getCategories());
  // }, [dispatch]);

  const handleChange = e => {
    console.log(e);
    if (!e.target) {
      const { name } = e;
      switch (name) {
        case 'category':
          setCategory(e.label);
          break;

        case 'recommended':
          const { label, value } = e;

          let contains = function (array, item) {
            return !!~array.indexOf(item);
          };

          if (checkedRecommended.length === 0) {
            setCheckedRecommended([e.value]);
            return;
          }

          if (contains(checkedRecommended, e.value)) {
            return;
          }

          setCheckedRecommended(prevState => {
            const newState = e.value;
            prevState.map((el, idx, __) => {
              if (el === '') {
                prevState.pop();
              }
              return e.value;
            });
            console.log('NewState', newState);

            return [...prevState, newState];
          });
          break;

        default:
          break;
      }
    } else if (e.target.name === 'fullImages') {
      const { value } = e.target;
      setFullImages(prevState => {
        const index = parseInt(e.target.getAttribute('data-index'));
        const newState = prevState.map((el, idx, __) => {
          if (idx === index) {
            return (el = fullImages[index] = value);
          }
          return el;
        });
        return newState;
      });
    } else {
      const { name, value } = e.target;
      console.log(e);
      switch (name) {
        case 'sum':
          setSum(value);
          break;

        case 'title':
          setTitle(value);
          break;

        // case 'category':
        //   setCategory(value);
        //   break;

        case 'tradeMark':
          setTradeMark(value);
          break;

        case 'cardDescription':
          setCardDescription(value);
          break;

        case 'cardImage':
          setCardImage(value);
          break;

        case 'shortDescription':
          setShortDescription(value);
          break;

        case 'productAbout':
          setProductAbout(value);
          break;

        case 'imageOfSize':
          setImageOfSize(value);
          break;

        case 'sizing':
          setSizing(value);
          break;

        case 'instruction':
          setInstruction(value);
          break;

        case 'imageOfInstruction':
          setImageOfInstruction(value);
          break;

        default:
          break;
      }
    }
  };

  // const handleIncome = e => {
  //   if (e.target.checked === true) {
  //     return setTypeTransaction('income');
  //   }
  //   setTypeTransaction('expense');
  // };

  const handleSubmit = () => {
    let body = {
      price: parseInt(sum),
      category: getCategoryHref.href,
      title: title,
      product_about: productAbout,
      TM: tradeMark,
      description: cardDescription,
      short_description: shortDescription,
      image: cardImage,
      full_images: fullImages,
      image_of_size: [imageOfSize, sizing],
      instruction_description: [imageOfInstruction, instruction],
      recommended_products: checkedRecommended,
    };
    dispatch(productsOperations.add(body));
    // onClose();
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
            'Редагування товару'
          }
        </Title>

        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          // onSubmit={handleSubmit}
          onChange={handleChange}
        >
          {({ touched, errors }) => (
            <StyledForm autoComplete="off">
              {/* <Switcher>
                <Income checked={typeTransaction === 'income'}>
                  {t('ModalAdd.income')}
                </Income> */}

              {/* <SwitchBox>
                  <InputLabel htmlFor="type">
                    <Switch
                      name="type"
                      type="checkbox"
                      id="type"
                      onClick={e => handleIncome(e)}
                    />
                    {typeTransaction === 'income' ? (
                      <StyledButton checked={typeTransaction === 'income'}>
                        <PlusOutlined style={{ fontSize: '22px' }} />
                      </StyledButton>
                    ) : (
                      <StyledButton>
                        <MinusOutlined style={{ fontSize: '22px' }} />
                      </StyledButton>
                    )}
                  </InputLabel>
                </SwitchBox> */}

              {/* <Expense checked={typeTransaction === 'expense'}>
                  {t('ModalAdd.expense')}
                </Expense> */}
              {/* </Switcher> */}

              <InputBox>
                <InputGroupBox>
                  <h4>Картка товару: </h4>
                  <InputWrapper>
                    <InputLabel htmlFor="Title">Арт: </InputLabel>
                    <Field
                      name="title"
                      value={title}
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        data.title
                      }
                      onChange={handleChange}
                      as={InputComment}
                      maxLength={20}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="ShortDescription">Опис: </InputLabel>
                    <Field
                      name="shortDescription"
                      value={shortDescription}
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        data.short_description
                      }
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="CardImage">Зображ: </InputLabel>
                    <Field
                      name="cardImage"
                      value={cardImage}
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        data.image
                      }
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>

                  <InputWrapper>
                    <InputLabel htmlFor="Sum">Ціна: </InputLabel>
                    <InputAmount
                      name="sum"
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={sum}
                      onChange={handleChange}
                      placeholder={data.price}
                    />
                    {/* {touched.sum && errors.sum && <FormError name="sum" />} */}
                  </InputWrapper>
                </InputGroupBox>
                <InputGroupBox>
                  <h4>Повний опис товару: </h4>
                  <InputWrapper>
                    <InputLabel htmlFor="TradeMark">ТМ: </InputLabel>
                    <Field
                      name="tradeMark"
                      value={tradeMark}
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        data.TM
                      }
                      onChange={handleChange}
                      as={InputComment}
                      maxLength={30}
                    />
                  </InputWrapper>
                  <InputCategory>
                    <InputLabel htmlFor="Category">Категорія: </InputLabel>
                    <Select
                      name="category"
                      key={typeTransaction}
                      components={<DownOutlined />}
                      options={categories.map(({ href, text }) => ({
                        name: 'category',
                        value: href,
                        label:
                          // t(`categoryName.${href}`),
                          text,
                      }))}
                      styles={selectStyles(typeTransaction)}
                      placeholder={category}
                      value={category}
                      onChange={handleChange}
                      isSearchable={false}
                    />
                    {/* {touched.category && errors.category && (
                    <FormError name="category" />
                  )} */}
                  </InputCategory>
                  <InputWrapper>
                    <InputLabel htmlFor="CardDescription">Найменув:</InputLabel>
                    <Field
                      name="cardDescription"
                      value={cardDescription}
                      placeholder={
                        // t('ModalAdd.placeholderComent')
                        data.description
                      }
                      onChange={handleChange}
                      as={InputComment}
                      maxLength={30}
                    />
                  </InputWrapper>

                  {/* <InputWrapper>
                  <InputLabel htmlFor="date" />
                  <InputDate>
                    <Field name="date">
                      {({ field, form: { isSubmitting } }) => (
                        <Datetime
                          dateFormat="DD.MM.YYYY"
                          timeFormat={false}
                          initialValue={new Date()}
                          onChange={date => {
                            setFieldValue('date', date);
                          }}
                          isValidDate={validDate}
                          input={true}
                          closeOnSelect
                          />
                          )}
                    </Field>
                    
                    <CalendarIcon />
                    </InputDate>
                    {touched.date && errors.date && <FormError name="date" />}
                  </InputWrapper> */}

                  <InputWrapper>
                    <InputLabel htmlFor="ProductAbout">Про товар:</InputLabel>
                    <Field
                      name="productAbout"
                      value={productAbout}
                      placeholder={
                        data.product_about
                        // t('ModalAdd.placeholderComent')
                      }
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <FullImagesInputBox>
                      {fullImages.map((item, index, __) => {
                        return (
                          <div key={`${item}${index}`}>
                            <InputLabel htmlFor="FullImages">
                              {`Зображ ${index + 1}:`}
                            </InputLabel>
                            <Field
                              name="fullImages"
                              data-index={index}
                              value={fullImages[index]}
                              placeholder={
                                data.full_images[index]
                                // t('ModalAdd.placeholderComent')
                              }
                              onChange={handleChange}
                              as={InputComment}
                            />
                          </div>
                        );
                      })}
                    </FullImagesInputBox>
                    <InputImageButtonAdd
                      onClick={() => {
                        fullImages.push('');
                      }}
                    >
                      +
                    </InputImageButtonAdd>
                    <InputImageButtonRemove
                      onClick={() => {
                        if (fullImages.length === 1) {
                          return;
                        }
                        fullImages.pop();
                      }}
                    >
                      -
                    </InputImageButtonRemove>
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="ImageOfSize">Таб. підб.:</InputLabel>
                    <Field
                      name="imageOfSize"
                      value={imageOfSize}
                      placeholder={
                        data.image_of_size[0]
                        // t('ModalAdd.placeholderComent')
                      }
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="Sizing">Опис підбору:</InputLabel>
                    <Field
                      name="sizing"
                      value={sizing}
                      placeholder={
                        data.image_of_size[1]
                        // t('ModalAdd.placeholderComent')
                      }
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="ImageOfInstruction">
                      Таб. інстр.:
                    </InputLabel>
                    <Field
                      name="imageOfInstruction"
                      value={imageOfInstruction}
                      placeholder={
                        data.instruction_description[0]
                        // t('ModalAdd.placeholderComent')
                      }
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor="Instruction">Інструкція:</InputLabel>
                    <Field
                      name="instruction"
                      value={instruction}
                      placeholder={
                        data.instruction_description[1]
                        // t('ModalAdd.placeholderComent')
                      }
                      onChange={handleChange}
                      as={InputComment}
                    />
                  </InputWrapper>
                  {checkedRecommended.map((item, index, __) => {
                    console.log(index, checkedRecomTitle[index]);
                    return (
                      <InputCategory key={`${item}${index}`}>
                        <InputLabel htmlFor="Recommended">
                          Рекоменд.:
                        </InputLabel>
                        <Select
                          name="recommended"
                          // key={typeTransaction}
                          components={<DownOutlined />}
                          options={recommended
                            // .filter(elem => elem.type === typeTransaction)
                            .map(({ _id, title }) => ({
                              name: 'recommended',
                              value: _id,
                              label:
                                // t(`categoryName.${href}`),
                                title,
                            }))}
                          styles={selectStyles(typeTransaction)}
                          placeholder={checkedRecomTitle[index]}
                          value={checkedRecomTitle[index]}
                          onChange={
                            // option => {
                            // setFieldValue('category', option.value);
                            // }
                            handleChange
                          }
                          isSearchable={false}
                        />
                        {/* {touched.category && errors.category && (
                              <FormError name="category" />
                               )} */}
                        <InputRecommendedBtnAdd
                          onClick={() => {
                            checkedRecommended.push('');
                          }}
                        >
                          +
                        </InputRecommendedBtnAdd>
                        <InputRecommendedBtnRemove
                          onClick={() => {
                            if (checkedRecommended.length === 1) {
                              checkedRecommended.pop();
                              checkedRecomTitle.pop();
                              checkedRecommended.push('');
                              return;
                            }
                            checkedRecommended.pop();
                            checkedRecomTitle.pop();
                          }}
                        >
                          -
                        </InputRecommendedBtnRemove>
                      </InputCategory>
                    );
                  })}
                </InputGroupBox>
              </InputBox>
              <InputGroupBox>
                <PrimaryButton
                  type="submit"
                  htmlType="button"
                  onClick={
                    // handleSubmit
                    () => {
                      console.log('Click');
                      handleSubmit();
                      console.log('Click2');
                    }
                  }
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

export default ModalAddTransaction;

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
};
