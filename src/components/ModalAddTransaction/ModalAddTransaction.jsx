import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
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
  console.log(data);
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
  const [typeTransaction, setTypeTransaction] = useState('expense');
  const { t } = useTranslation();

  const initialValues = {
    sum: '',
    title: '',
    category: '',
    tradeMark: '',
    cardDescription: '',
    cardImage: '',
    shortDescription: '',
    productAbout: '',
    date: new Date(),
    type: false,
  };

  const dispatch = useDispatch();

  const categories = navItems[0].buttons;

  useEffect(() => {
    categories.map(({ href, text }) => {
      if (data.category === href) {
        return setCategory(text);
      }
      return data.category;
    });
  }, [categories, data.category]);
  // useEffect(() => {
  //   dispatch(getCategories());
  // }, [dispatch]);

  const handleChange = e => {
    console.log(e);
    if (!e.target) {
      setCategory(e.InputLabel[0]);
    } else {
      const { name, value } = e.target;
      switch (name) {
        case 'sum':
          setSum(value);
          break;

        case 'title':
          setTitle(value);
          break;

        case 'category':
          setCategory(value);
          break;

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

  const handleSubmit = (
    {
      sum,
      category,
      title,
      productAbout,
      tradeMark,
      cardDescription,
      shortDescription,
      cardImage,
      date,
    },
    { resetForm }
  ) => {
    //   dispatch(
    //     addTransaction({
    //       title,
    //       category,
    //       tradeMark,
    //       cardDescription,
    //       shortDescription,
    //       cardImage,
    //       sum,
    //       productAbout,
    //       date,
    //       type: typeTransaction,
    //     })
    //   );
    //   onClose();
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
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          {({ setFieldValue, touched, errors }) => (
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
                      options={categories
                        // .filter(elem => elem.type === typeTransaction)
                        .map(({ href, text }) => ({
                          value: href,
                          InputLabel: [
                            // t(`categoryName.${href}`),
                            text,
                          ],
                        }))}
                      styles={selectStyles(typeTransaction)}
                      placeholder={
                        // categories.find(({ href, text }, index, data) => {
                        //   if (data.href === href) {
                        //     return text;
                        //   }
                        //   return data.category;
                        // })
                        category
                      }
                      value={category}
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
                </InputGroupBox>
              </InputBox>
              <InputGroupBox>
                <PrimaryButton type="primary" htmlType="submit">
                  {t('ModalAdd.ButtonAdd')}
                </PrimaryButton>

                <SecondaryButton htmlType="button" onClick={() => onClose()}>
                  {t('ModalAdd.ButtonCensel')}
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
