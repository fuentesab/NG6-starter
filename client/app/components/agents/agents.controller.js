class AgentsController {
  constructor(SearchService) {
    this.name = 'agents';
    this.service = SearchService
  }

  search() {
    console.log('TEST');
    console.log(this.agentName);
    this.service.searchForAgents(this.agentName).then((response)=>  {
      console.log('response here');

      this.agents = response.data.Results;
      console.log(this.agents);
      for (var i = 0; i <= this.agents.length; i++) {
        console.log(this.agents[i].Name);
      }
    });
  }
}

export default AgentsController;
