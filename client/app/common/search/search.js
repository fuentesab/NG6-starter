import angular from 'angular';
import SearchFactory from './search.factory';
import searchComponent from './search.component';

let searchModule = angular.module('search', [])

  .factory('SearchService', ['$http', SearchFactory])

  .component('searchSection', searchComponent)

  .name;

export default searchModule;
