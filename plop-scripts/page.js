module.exports = {
  description: "Create a page",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your page name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/page/Page.tsx.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/{{pascalCase name}}Styled.tsx",
      templateFile: "plop-templates/page/PageStyled.tsx.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/index.tsx",
      templateFile: "plop-templates/page/indexOfPage.tsx.hbs",
    },

    {
      type: "append",
      path: "src/pages/index.tsx",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
    },
    {
      type: "append",
      path: "src/pages/index.tsx",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },

    {
      type: "add",
      path: "src/pages/routes.tsx",
      templateFile: "plop-templates/routes.tsx.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "src/pages/routes.tsx",
      pattern: `/* PLOP_ROUTE_IMPORT */`,
      template: `\t{{pascalCase name}},`,
    },
    {
      type: "append",
      path: "src/pages/routes.tsx",
      pattern: `{/* PLOP_INJECT_ROUTE */}`,
      template: `\t\t\t\t<Route exact path="/{{dashCase name}}" component={ {{pascalCase name}} } />`,
    },
  ],
};
