const LoadMoreBtn = ({ incrementPage, currentPage }) => {
  return (
    !currentPage && (
      <div>
        <button type="button" onClick={incrementPage}>
          Load more
        </button>
      </div>
    )
  );
};

export default LoadMoreBtn;
