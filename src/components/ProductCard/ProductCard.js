import { Box } from 'theme-ui';
import { ProductCardBox } from './ProductCard.styled';

const ProductCard = () => {
  return (
    <ProductCardBox>
      <Box as="a" href="/">
        <img src="../Images/NoPhoto.jpg" alt="product-title" />
      </Box>
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
