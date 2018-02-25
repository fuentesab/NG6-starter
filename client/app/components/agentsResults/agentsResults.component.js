import template from './agentsResults.html';
import './agentsResults.scss';
import AgentsResultsController from "./agentsResults.controller";

let agentsResultsComponent = {
  bindings: {
    searchResults: '=',
    searchFailed: '=',
    isSearching: '='
  },
  template,
  controller: AgentsResultsController
};

export default agentsResultsComponent;
