const DEFAULT_PAGE_NUMBER = 1;

const DEFAULT_PAGE_LIMIT = 0; // In MongoDB, if we pass in zero as the page limits,
                              // MongoDB will return all of the documents inthe collection.

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};
