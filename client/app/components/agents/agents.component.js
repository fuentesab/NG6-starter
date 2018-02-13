import template from './agents.html';
import AgentsController from './agents.controller';
import './agents.scss';

let agentsComponent = {
  bindings: {},
  template,
  controller: ['Search', AgentsController]
};

export default agentsComponent;
