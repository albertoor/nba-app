const getCustomOption = (url) => {
  const options = {
    method: "GET",
    url: url,
    params: { per_page: "100", page: "0" },
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };
  return options;
};

export default getCustomOption;
