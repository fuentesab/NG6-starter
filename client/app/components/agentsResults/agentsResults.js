import angular from 'angular';
import agentsResultsComponent from './agentsResults.component';

let agentsResultsModule = angular.module('agentsResults', [])

.component('agentsResultsSection', agentsResultsComponent)

.name;

export default agentsResultsModule;
