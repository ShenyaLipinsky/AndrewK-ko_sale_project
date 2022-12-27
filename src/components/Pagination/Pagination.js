import { PaginationBox } from './Pagination.styled';

const Pagination = ({ disF, disB, setPage, page, setLimit }) => {
  return (
    <PaginationBox>
      <button
        disabled={disB}
        onClick={() => {
          let prevPage = parseInt(page) - 1;
          setPage(prevPage.toString());
        }}
      >
        {'<-'}
      </button>
      <select
        className="qtyOnPage"
        defaultValue="10"
        onChange={e => {
          setLimit(e.target.value);
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <button
        disabled={disF}
        onClick={() => {
          let nextPage = parseInt(page) + 1;
          setPage(nextPage.toString());
        }}
      >
        {'->'}
      </button>
    </PaginationBox>
  );
};

export default Pagination;
