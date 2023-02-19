import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ProductCardBox({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid #ccc`,
        borderRadius: '5px',
        width: 270,
        height: 290,
        padding: '8px',
        margin: '15px',
      }}
    >
      {children}
    </div>
  );
}

const WrappedLoader = () => {
  return (
    <ProductCardBox>
      <Skeleton
        style={{
          display: 'flex',
          width: 130,
          height: 100,
          borderRadius: '5px',
          margin: '0 auto',
          zIndex: 0,
        }}
      />

      <Skeleton
        count={5}
        style={{
          zIndex: 0,
        }}
      />
      <Skeleton
        count={2}
        inline={true}
        style={{
          width: '45%',
          margin: '5px',
          zIndex: 0,
        }}
      />
    </ProductCardBox>
  );
};

export default WrappedLoader;
