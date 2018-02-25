import SearchModule from './search';
import SearchController from './search.controller'
import SearchService from './search.factory'

describe('Search', () => {
  let $q, $rootScope, makeController, mockSearchService;

  beforeEach(window.module(SearchModule));
  beforeEach(inject((_$rootScope_, _$q_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;

    makeController = () => {
      return new SearchController(mockSearchService);
    };
  }));

  describe('Controller', () => {

    it('define controller properties', () => { // erase if removing this.name from the controller
      let controller = makeController();
      controller.$onInit();

      expect(controller).to.have.property('isSearching');
      expect(controller).to.have.property('searchFailed');
      expect(controller).to.have.property('searchResults');

    });

    it('successful search', () => {
      let controller = makeController();
      controller.$onInit();

      controller.searchType = 'agents';
      controller.searchKey = 'test';
      mockSearchService = sinon.stub(SearchService, 'searchForAgents');
      mockSearchService.withArgs('test').returns($q.resolve({
        data: {
          Results: [{foo: 'bar1'}, {foo: 'bar2'}]
        }
      }));

      $rootScope.$digest();
      controller.search();
      expect(controller.searchResults).to.deep.equal([{foo: 'bar1'}, {foo: 'bar2'}]);
      expect(controller.searchFailed).to.be.false;
      expect(controller.isSearching).to.be.false;

      mockSearchService.restore();
    });

    it('failed search', (done) => {
      let controller = makeController();
      controller.$onInit();
      controller.searchType = 'agents';



      mockSearchService.searchForAgents.and.returnValue($q.reject({}));

      controller.search().catch(() => {
        expect(controller.isSearching).to.be.true;
        expect(controller.searchFailed).to.be.true;
        done();
      });

      $rootScope.$digest();
      expect(controller.searchResults).to.have.length(0);
      expect(controller.isSearching).to.be.false;
    });
  });

  // describe('Template', () => {
  //   // template specs
  //   // tip: use regex to ensure correct bindings are used e.g., {{  }}
  //   it('has name in template [REMOVE]', () => {
  //     expect(ResultsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
  //   });
  // });
  //
  // describe('Component', () => {
  //   // component/directive specs
  //   let component = ResultsComponent;
  //
  //   it('includes the intended template', () => {
  //     expect(component.template).to.equal(ResultsTemplate);
  //   });
  //
  //   it('invokes the right controller', () => {
  //     expect(component.controller).to.equal(ResultsController);
  //   });
  // });

});
