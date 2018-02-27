import SearchModule from './search';
import SearchController from './search.controller'
import SearchComponent from './search.component'
import SearchTemplate from './search.html'

describe('Search', () => {
  let  $q, $rootScope, $compile, makeController, mockSearchService;

  beforeEach(window.module(SearchModule));
  beforeEach(inject((_$rootScope_, _$q_, _$compile_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    $compile = _$compile_;

    makeController = () => {
      return new SearchController(mockSearchService);
    };
  }));

  describe('Controller', () => {

    it('define controller properties', () => {
      mockSearchService =  { searchForAgents: sinon.stub().returns($q.resolve({}))};
      let controller = makeController();
      controller.$onInit();

      expect(controller).to.have.property('searchService');
      expect(controller).to.have.property('isSearching');
      expect(controller).to.have.property('searchFailed');
    });

    it('WILL search for agents and returns a resolved promise',  () => {

      mockSearchService =  {
        searchForAgents: sinon.stub().returns($q.resolve({
          data: {
            Results: [{foo: 'bar1'}, {foo: 'bar2'}]
          }
        }))
      };

      let controller = makeController();
      controller.$onInit();
      controller.searchType = 'agents';
      controller.searchKey = 'test';

      controller.search();

      expect(controller.isSearching).to.be.true;
      $rootScope.$digest();
      expect(controller.searchResults).to.deep.equal([{foo: 'bar1'}, {foo: 'bar2'}]);
      expect(controller.searchFailed).to.be.false;
      expect(controller.isSearching).to.be.false;
    });

    it('WILL search for agents and returns a rejected promise',  () => {

      mockSearchService =  {
        searchForAgents: sinon.stub().returns($q.reject({
          data: {
            Results: [{foo: 'bar1'}, {foo: 'bar2'}]
          }
        }))
      };

      let controller = makeController();
      controller.$onInit();
      controller.searchType = 'agents';
      controller.searchKey = 'test';

      controller.search();

      expect(controller.isSearching).to.be.true;
      $rootScope.$digest();
      expect(controller.searchResults).to.deep.empty;
      expect(controller.searchFailed).to.be.true;
      expect(controller.isSearching).to.be.false;
    });

  });

  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<search-section></search-section>')(scope);
      scope.$apply();
    });

    it('has search text field in template', () => {
       expect(template.find('input')).to.equal(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    let component = SearchComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SearchTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.deep.equal(['SearchService', SearchController]);
    });
  });

});
