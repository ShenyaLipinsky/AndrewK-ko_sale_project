import { Box } from 'theme-ui';
import {
  ProductCardBox,
  ProductCardImage,
  ProductCardImageLink,
} from './ProductCard.styled';

const ProductCard = () => {
  return (
    <ProductCardBox>
      <ProductCardImageLink href="/">
        <ProductCardImage src="../Images/NoPhoto.jpg" alt="product-title" />
      </ProductCardImageLink>
      <Box>
        <a href="/">Some Title</a>
        <Box>
          <p>Small Description</p>
        </Box>
        <h3>Price:</h3>
        <button>Add</button>
      </Box>
    </ProductCardBox>
  );
};

export default ProductCard;
