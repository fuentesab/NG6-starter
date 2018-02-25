import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Agents from './agents/agents';
import AgentsResults from './agentsResults/agentsResults';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Agents,
  AgentsResults
])

.name;

export default componentModule;
