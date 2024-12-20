import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

function PaginationContainer() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const numPages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const handlePageChange = (number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', number);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join   ">
        <button
          className="btn btn-xs sm:btn-md join-item bg-lime-700"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {numPages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item bg-lime-700"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default PaginationContainer;
