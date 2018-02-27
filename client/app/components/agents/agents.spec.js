import AgentsModule from './agents';
import AgentsController from './agents.controller';
import AgentsComponent from './agents.component';
import AgentsTemplate from './agents.html';

describe('Agents', () => {
  let $rootScope, $location, $state, $compile, makeController;

  beforeEach(window.module(AgentsModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    $state = $injector.get('$state');
    $compile = $injector.get('$compile');

    makeController = () => {
      return new AgentsController();
    };
  }));

  describe('Module', () => {
    it('Agents component should be visible when navigates to /agents', () => {
      $location.url('/agents');
      $rootScope.$digest();
      expect($state.current.component).to.eq('agents');
    });
  });

  describe('Controller', () => {
    it('defined controller properties', () => {
      let controller = makeController();

      expect(controller).to.have.property('isSearching');
      expect(controller).to.have.property('searchFailed');
      expect(controller).to.have.property('searchType');
    });
  });

  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<agents></agents>')(scope);
      scope.$apply();
    });

    it('template...', () => {
      expect(template).to.equal(AgentsTemplate);
      // expect(template.find('div').html()).to.equal('Found in home.html');
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AgentsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentsController);
    });
  });
});
