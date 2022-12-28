import { PaginationBox, PaginationBtn } from './Pagination.styled';

const Pagination = ({ disF, disB, setPage, page, setLimit }) => {
  return (
    <PaginationBox>
      <PaginationBtn
        type="button"
        disabled={disB}
        onClick={() => {
          let prevPage = parseInt(page) - 1;
          setPage(prevPage.toString());
        }}
      >
        {'<-'}
      </PaginationBtn>
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
      <PaginationBtn
        type="button"
        disabled={disF}
        onClick={() => {
          let nextPage = parseInt(page) + 1;
          setPage(nextPage.toString());
        }}
      >
        {'->'}
      </PaginationBtn>
    </PaginationBox>
  );
};

export default Pagination;
