class SearchController {

  constructor (SearchService) {
    this.searchService = SearchService;
  }

  $onInit() {
    this.isSearching = false;
    this.searchFailed = false;
  }

  search() {

    //TODO: This search component can be generic to search for other searchTypes
      if (this.searchType === 'agents')  {
        this.searchForAgents();
      }
  }

  searchForAgents() {

    this.searchResults = [];
    this.isSearching = true;
    this.searchFailed = false;
    this.searchService.searchForAgents(this.searchKey).then((response)=>  {

      if (response.data && response.data.Results) {

        this.searchResults = response.data.Results;
      }
    }).catch((error) => {
      this.searchResults = undefined;
      this.searchFailed = true;
    }).finally(() => {
      this.isSearching = false;
    });

  }

}

export default SearchController;
