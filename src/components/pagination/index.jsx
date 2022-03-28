import React, { useEffect, useState } from "react";
import { PaginationContainer } from "./style";
import {
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

const Pagination = (props) => {
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showStartNumber, setShowStartNumber] = useState(false);
  const [showEndNumber, setShowEndNumber] = useState(false);
  const [pageNumberView, setPageNumberView] = useState(null);

  // showSizeChanger={true}
  // defaultCurrent={1}
  // defaultPageSize={pageSize}
  // total={totalPages}
  // onChange={(page) => {
  //   fetchProducts(page);
  // }}
  // onShowSizeChange={(current, size) => {
  //   setPageSize(size);
  // }}

  const handlePagination = (total, current) => {
    const tempArray = [];
    const totalPage = Math.ceil(total);
    const currentPage = current;
    let startPage, endPage, diff;

    if (window.innerWidth < 425) {
      startPage = currentPage < 3 ? 1 : currentPage - 1;
      endPage = 2 + startPage;
      endPage = totalPage < endPage ? totalPage : endPage;
      diff = startPage - endPage + 2;
      startPage = startPage - (startPage - diff > 0 ? diff : 0);
    } else {
      startPage = currentPage < 5 ? 1 : currentPage - 2;
      endPage = 4 + startPage;
      endPage = totalPage < endPage ? totalPage : endPage;
      diff = startPage - endPage + 4;
      startPage = startPage - (startPage - diff > 0 ? diff : 0);
    }

    setShowStartNumber(false);
    setShowEndNumber(false);
    setShowRightArrow(false);
    setShowLeftArrow(false);

    if (startPage > 1) {
      setShowStartNumber(true);
    }

    for (let i = startPage; i <= endPage; i++) {
      tempArray.push(i);
    }

    setPageNumberView(
      tempArray.map((number, index) => {
        if (number === currentPage) {
          return (
            <button key={index} className="pagination-number active">
              {currentPage}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="pagination-number"
              onClick={() => handleNumber(number)}
            >
              {number}
            </button>
          );
        }
      })
    );

    if (endPage < totalPage) {
      setShowEndNumber(true);
    }
  };

  const handleNext = () => {
    props.setCurrent(props.current + 1);
    window.scrollTo(0, 0);
  };

  const handleQuickNext = () => {
    props.setCurrent(props.current + 5);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    props.setCurrent(props.current - 1);
    window.scrollTo(0, 0);
  };

  const handleQuickPrevious = () => {
    props.setCurrent(props.current - 5);
    window.scrollTo(0, 0);
  };

  const handleNumber = (number) => {
    props.setCurrent(number);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (props.current < 1) {
      props.setCurrent(1);
    }

    handlePagination(props.total, props.current);

    const updateWindowDimensions = () => {
      handlePagination(props.total, props.current);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, [props.total, props.current]);

  return (
    <>
      <PaginationContainer>
        {props.current === 1 ? (
          <button className="pagination-arrow" title="Previous Page" disabled>
            <FiChevronLeft size={18} />
          </button>
        ) : (
          <button
            className="pagination-arrow"
            title="Previous Page"
            onClick={handlePrevious}
          >
            <FiChevronLeft size={18} />
          </button>
        )}

        {showStartNumber && (
          <>
            <button
              className="pagination-number"
              onClick={() => handleNumber(1)}
            >
              1
            </button>

            {!showLeftArrow ? (
              <button
                className="pagination-gap"
                onMouseOver={() => setShowLeftArrow(true)}
              >
                <FiMoreHorizontal size={20} />
              </button>
            ) : (
              <button
                className="pagination-quick-arrow"
                onMouseLeave={() => setShowLeftArrow(false)}
                title="Previous 5 Pages"
                onClick={handleQuickPrevious}
              >
                <FiChevronsLeft size={18} />
              </button>
            )}
          </>
        )}

        {pageNumberView}

        {showEndNumber && (
          <>
            {!showRightArrow ? (
              <button
                className="pagination-gap"
                onMouseOver={() => setShowRightArrow(true)}
              >
                <FiMoreHorizontal size={20} />
              </button>
            ) : (
              <button
                className="pagination-quick-arrow"
                onMouseLeave={() => setShowRightArrow(false)}
                title="Next 5 Pages"
                onClick={handleQuickNext}
              >
                <FiChevronsRight size={18} />
              </button>
            )}

            <button
              className="pagination-number"
              onClick={() => handleNumber(Math.ceil(props.total))}
            >
              {Math.ceil(props.total)}
            </button>
          </>
        )}

        {props.current === Math.ceil(props.total) ? (
          <button className="pagination-arrow" title="Next Page" disabled>
            <FiChevronRight size={18} />
          </button>
        ) : (
          <button
            className="pagination-arrow"
            title="Next Page"
            onClick={handleNext}
          >
            <FiChevronRight size={18} />
          </button>
        )}
      </PaginationContainer>
    </>
  );
};

export default Pagination;
