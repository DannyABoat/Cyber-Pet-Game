export let initQuestions = [
    {
      type: "list",
      name: "type",
      message: "What type of pet do you want?",
      choices: ["Fox", "Panther", "Bear"],
    },
    {
      type: "input",
      name: "name",
      message: "Whats your pets name?",
    },
  ]
  
  export let gameQuestion = [
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: ["feed", "drink", "clean", "sleep"],
    },
  ]