//@desc pagination after filtered search
pagenationRaceStartList = (page, perPage = 10, raceStartList) => {
  const pageValue = parseInt(page);
  const perPageValue = parseInt(perPage);
  const pageCount = Math.ceil(raceStartList.length / perPageValue);
  const filteredData = raceStartList.slice(
    pageValue * perPageValue - perPageValue,
    pageValue * perPageValue
  );
  return {
    page: pageValue,
    perPage: perPageValue,
    pageCount: pageCount,
    data: filteredData,
  };
};

// @desc search and filter raceStartList
// @params filterOptions: list of query params that can be used to filter and paginate
exports.searchFilterRaceStartList = (filterOptions, raceStartList) => {
  let filteredData = raceStartList.filter((user) => {
    let isValid = true;
    for (key in filterOptions) {
      if (filterOptions["page"] != undefined) continue;
      isValid = isValid && user[key] == filterOptions[key];
    }
    return isValid;
  });
  //If pagination is requested
  if (filterOptions.page) {
    filteredData = pagenationRaceStartList(
      filterOptions.page,
      filterOptions.perPage,
      filteredData
    );
  }
  return filteredData;
};
