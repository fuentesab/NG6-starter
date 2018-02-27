import SearchModule from './search';

describe('Search Factory', () => {

  let SearchService, $http;
  beforeEach(window.module(SearchModule));

  beforeEach(inject((_$http_, _SearchService_) => {
    $http = _$http_;
    SearchService = _SearchService_;
  }));

  describe('searchForAgents', () => {

    it('should search for agents given a search key', () => {

      sinon.spy($http, 'get');

      SearchService.searchForAgents('testName');

      assert($http.get.calledOnce);
      assert($http.get.calledWith('https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=testName'));

      $http.get.restore();
    });
  });

});
