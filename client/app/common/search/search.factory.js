let SearchFactory = function ($http) {

  let searchForAgents = (searchKey) => {
    let searchUrl = 'https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=' + searchKey;

    return $http.get(searchUrl);
  };

  return { searchForAgents };
};

export default SearchFactory;
