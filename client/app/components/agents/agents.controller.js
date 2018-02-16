class AgentsController {
  constructor(SearchService) {
    this.name = 'agents';
    this.service = SearchService
  }

  search() {
    console.log('TEST');
    console.log(this.agentName);
    this.service.searchForAgents(this.agentName).then((response)=>  {

      if (response.data && response.data.Results) {

        this.agents = response.data.Results;
      }
    });
  }
}

export default AgentsController;
