import {
  PaginationBox,
  PaginationBtn,
  PaginationSelect,
} from './Pagination.styled';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

const Pagination = ({ disF, disB, setPage, page, totalHist, setLimit }) => {
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
        <FaLongArrowAltLeft />
      </PaginationBtn>
      <PaginationSelect
        className="qtyOnPage"
        defaultValue="10"
        onChange={e => {
          setLimit(e.target.value);
          if (totalHist <= parseInt(e.target.value)) {
            setPage('1');
          }
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </PaginationSelect>
      <PaginationBtn
        type="button"
        disabled={disF}
        onClick={() => {
          let nextPage = parseInt(page) + 1;
          setPage(nextPage.toString());
        }}
      >
        <FaLongArrowAltRight />
      </PaginationBtn>
    </PaginationBox>
  );
};

export default Pagination;
