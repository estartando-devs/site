module.exports = (plop) => {
  plop.setGenerator("element", {
    description: "Create a element",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your element name?",
      },
    ],
    actions: [
      //structure component
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path:
          "src/components/elements/{{pascalCase name}}/{{pascalCase name}}.js",
        // Handlebars template used to generate content of new file
        templateFile: "plop-templates/element/Element.js.hbs",
      },
      {
        type: "add",
        path:
          "src/components/elements/{{pascalCase name}}/{{pascalCase name}}Styled.js",
        templateFile: "plop-templates/element/ElementStyled.js.hbs",
      },
      {
        type: "add",
        path: "src/components/elements/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/element/indexOfElement.js.hbs",
      },
      // end structure component

      // import and export component in index folder
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/components/elements/index.js",
        templateFile: "plop-templates/element/injectable-index.js.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/elements/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/elements/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      // end import and export component in index folder
    ],
  });

  plop.setGenerator("module", {
    description: "Create a module",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your module name?",
      },
    ],
    actions: [
      //structure module
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path:
          "src/components/modules/{{pascalCase name}}/{{pascalCase name}}.js",
        // Handlebars template used to generate content of new file
        templateFile: "plop-templates/module/Module.js.hbs",
      },
      {
        type: "add",
        path:
          "src/components/modules/{{pascalCase name}}/{{pascalCase name}}Styled.js",
        templateFile: "plop-templates/module/ModuleStyled.js.hbs",
      },
      {
        type: "add",
        path: "src/components/modules/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/module/indexOfModule.js.hbs",
      },
      // end structure module

      // import and export module in index folder
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/components/modules/index.js",
        templateFile: "plop-templates/module/injectable-index.js.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/modules/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/modules/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      // end import and export component in index folder
    ],
  });

  plop.setGenerator("feature", {
    description: "Create a feature",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your feature name?",
      },
    ],
    actions: [
      //structure feature
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path:
          "src/components/features/{{pascalCase name}}/{{pascalCase name}}.js",
        // Handlebars template used to generate content of new file
        templateFile: "plop-templates/feature/Feature.js.hbs",
      },
      {
        type: "add",
        path:
          "src/components/features/{{pascalCase name}}/{{pascalCase name}}Styled.js",
        templateFile: "plop-templates/feature/FeatureStyle.js.hbs",
      },
      {
        type: "add",
        path: "src/components/features/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/feature/indexOfFeature.js.hbs",
      },
      // end structure feature

      // import and export feature in index folder
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/components/features/index.js",
        templateFile: "plop-templates/feature/injectable-index.js.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/features/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/features/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      // end import and export feature in index folder
    ],
  });

  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      //structure pages
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/page/Page.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}Styled.js",
        templateFile: "plop-templates/page/PageStyled.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/page/indexOfPage.js.hbs",
      },
      // end structure pages

      // import and export page in index folder
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      // end import and export page in index folder

      // import page in router

      {
        type: "add",
        path: "src/pages/routes.js",
        templateFile: "plop-templates/routes.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/pages/routes.js",
        pattern: `/* PLOP_ROUTE_IMPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: "append",
        path: "src/pages/routes.js",
        pattern: `/* PLOP_INJECT_ROUTE */`,
        template: `\t\t\t\t\t<Route exact path="/{{dashCase name}}" component={ {{pascalCase name}} } />`,
      },
      // end import page in router
    ],
  });
};
