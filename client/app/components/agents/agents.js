import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentsComponent from './agents.component';
import AgentsController from "./agents.controller";

let agentsModule = angular.module('agents', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
  .state('agents', {
    url: '/agents',
    component: 'agents'
  });
})

.component('agents', agentsComponent)

.name;

export default agentsModule;
