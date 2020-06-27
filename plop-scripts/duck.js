module.exports = {
    description: "Create a duck",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your duck name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/store/ducks/{{camelCase name}}.duck.js",
        templateFile: "plop-templates/duck/Duck.js.hbs",
      },
      {
        type: "add",
        path: "src/services/{{camelCase name}}.service.js",
        templateFile: "plop-templates/service/Service.js.hbs",
      },
      {
        type: "append",
        path: "src/store/index.js",
        pattern: `/* PLOP_DUCKS_IMPORT */`,
        template: `import { {{camelCase name}}Reducer } from './ducks/{{camelCase name}}.duck';`,
      },
      {
        type: "append",
        path: "src/store/index.js",
        pattern: `/* PLOP_COMBINE_IMPORT */`,
        template: `\t{{camelCase name}}Reducer,`,
      },
    ],
  }