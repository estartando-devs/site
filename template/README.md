This is a template for [Create React App](https://github.com/facebook/create-react-app) with some useful dependencies configured.
You can read more about custom-templates on the [oficial documentation](https://create-react-app.dev/docs/custom-templates/)

> [IMPORTANT] - development dependencies (devDependencies) are not yet supported by create-react-app templates. So if you want to have ESLint and Prettier configured in your project, please follow the steps bellow:

```shell
# install devDependencies manually
yarn add prettier eslint babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks -D
```

## how to use this template?

Open your terminal and run:
```shell
npx create-react-app YOUR_PROJECT_NAME --template jonataspinto-template
```

This will create a project with the following libs:

* [axios](https://github.com/axios/axios)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
* [styled-components](https://www.styled-components.com/)
* [plop](https://www.npmjs.com/package/plop)

