import React from "react";

const PaginationButtons = ({ addPage, setAddPage, searchPerPage }) => {
  return (
    <div className="pokedex-pagination">
      <button
        className="button button-prev"
        disabled={addPage === 0}
        onClick={() => setAddPage(addPage - searchPerPage)}
      >
        Prev!
      </button>
      <button
        className="button button-next"
        onClick={() => setAddPage(addPage + searchPerPage)}
      >
        Next!
      </button>
    </div>
  );
};

export default PaginationButtons;
