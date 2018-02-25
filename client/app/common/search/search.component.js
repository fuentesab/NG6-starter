import template from './search.html';
import SearchController from './search.controller'
import './search.scss'

let searchComponent = {
  bindings: {
    searchType: '=',
    searchResults: '=',
    searchFailed: '=',
    isSearching: '='
  },
  template,
  controller: ['SearchService', SearchController]
};

export default searchComponent;
