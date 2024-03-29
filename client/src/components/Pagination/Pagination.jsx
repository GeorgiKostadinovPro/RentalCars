import './Pagination.css'

export const Pagination = ({
  currPage,
  totalPages,
  handlePageChange
}) => {

  return (
    <nav>
      <ul className="pagination pagination-lg justify-content-center">
        <li className={`page-item ${currPage === 1 && 'disabled'}`}>
          <button className="page-link" onClick={() => handlePageChange(currPage - 1)} aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        
        {[...Array(totalPages)].map((page, i) => (
          <li key={i + 1} data-testid="change-page" className={`page-item ${currPage === i + 1 && 'active'}`}>
            <button className="page-link" onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}

        <li className={`page-item ${currPage === totalPages && 'disabled'}`}>
          <button className="page-link" onClick={() => handlePageChange(currPage + 1)} aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}