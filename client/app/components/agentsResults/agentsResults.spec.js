import ResultsModule from './agentsResults';
import ResultsController from './agentsResults.controller';
import ResultsComponent from './agentsResults.component';
import ResultsTemplate from './agentsResults.html';

describe('Results', () => {
  let $rootScope, makeController, $compile;

  beforeEach(window.module(ResultsModule));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    makeController = () => {
      return new ResultsController();
    };
  }));

  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<agents-results-section></agents-results-section>')(scope);
      scope.$apply();
    });

    it('loops through searchResults in template', () => {
      expect(template).to.equal(ResultsTemplate);
      // expect(template.find('div').html()).to.equal('Found in home.html');
    });

  });

  describe('Component', () => {
    let component = ResultsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ResultsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ResultsController);
    });
  });
});
