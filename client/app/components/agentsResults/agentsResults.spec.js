import ResultsModule from './agentsResults';
import ResultsController from './agentsResults.controller';
import ResultsComponent from './agentsResults.component';
import ResultsTemplate from './agentsResults.html';

describe('Results', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ResultsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ResultsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ResultsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ResultsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ResultsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ResultsController);
    });
  });
});
