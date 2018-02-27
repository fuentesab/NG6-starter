import NavbarModule from './navbar'

describe('Navbar', () => {
  let $rootScope, $state, $location, $componentController, $compile, $interpolate;

  beforeEach(window.module(NavbarModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    $interpolate = $injector.get('$interpolate');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = ('navbar', {
        $scope: $rootScope.$new()
      });
    });
    $componentController
  });

  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<navbar></navbar>')(scope);
      scope.$apply();
    });

    xit('has name in template', () => {
      let links = template.find('div').find('ul').find('li').Array;
      expect(links[0]).to.eq('<li><a ui-sref="home">HOME</a></li>');
      expect(links[1]).to.eq('<li><a ui-sref="about">ABOUT</a></li>');
      expect(links[2]).to.eq('<li><a ui-sref="agents">AGENTS</a></li>');
    });

  });
});
