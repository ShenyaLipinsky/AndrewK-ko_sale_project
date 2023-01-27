import {
  ProductCardBox,
  ProductCardBtns,
  ProductCardBtnsBox,
  ProductCardDescr,
  ProductCardImage,
  ProductCardNoImage,
  ProductCardImageLink,
} from './ProductCard.styled';
import { IoIosImage } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';

const ProductCard = ({
  id,
  price,
  cardDescription,
  image,
  title,
  moreDetails,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isModalOpen]);

  let isAdmin = useSelector(authSelectors.getIsAdmin);

  if (image === 'No Image') {
    return (
      <ProductCardBox>
        {isAdmin && (
          <ProductCardBtns
            onClick={async () => {
              console.log(moreDetails(id));
              await setModalInfo(moreDetails(id));
              setIsModalOpen(true);
            }}
          >
            Edit
          </ProductCardBtns>
        )}
        {isModalOpen && (
          <ModalAddTransaction
            data={modalInfo}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        <ProductCardImageLink href={`/${id}`}>
          <ProductCardNoImage>
            <IoIosImage />
          </ProductCardNoImage>
        </ProductCardImageLink>
        <ProductCardDescr>
          <a href="/">{title}</a>
          <p>{cardDescription}</p>
          <h3>Price: {price}</h3>
        </ProductCardDescr>
        <ProductCardBtnsBox>
          <ProductCardBtns>Favorite</ProductCardBtns>
          <ProductCardBtns>Add</ProductCardBtns>
        </ProductCardBtnsBox>
      </ProductCardBox>
    );
  }
  return (
    <ProductCardBox>
      {isAdmin && (
        <ProductCardBtns
          onClick={() => {
            setIsModalOpen(true);
            console.log('Click');
          }}
        >
          Edit
        </ProductCardBtns>
      )}
      {isModalOpen && (
        <ModalAddTransaction onClose={() => setIsModalOpen(false)} />
      )}

      <ProductCardImageLink href={`/${id}`}>
        <ProductCardImage src={image} alt={title} />
      </ProductCardImageLink>
      <ProductCardDescr>
        <a href="/">{title}</a>
        <p>{cardDescription}</p>
        <h3>Price: {price}</h3>
      </ProductCardDescr>
      <ProductCardBtnsBox>
        <ProductCardBtns>Favorite</ProductCardBtns>
        <ProductCardBtns>Add</ProductCardBtns>
      </ProductCardBtnsBox>
    </ProductCardBox>
  );
};

export default ProductCard;
