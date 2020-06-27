Ola, Este é um modelo para o [Create React App](https://github.com/facebook/create-react-app) com algumas dependências úteis configuradas.
Você pode ler mais sobre custom-templates na [Documentação Oficial](https://create-react-app.dev/docs/custom-templates/)

## Summary

1. [Como usar](#como-usar-esse-template)
2. [Estrutura de pastas](#estrutura-de-pastas)

> [IMPORTANTE] - as dependências de desenvolvimento (devDependencies) ainda não são suportadas pelo create-react-app. Portanto, se você deseja ter o ESLint e o Prettier configurados em seu projeto, siga as etapas abaixo:

```shell
# instalando devDependencies manualmente
yarn add prettier eslint babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks -D
```

## Como usar esse template?

Supondo que seu ambiente de desenvolvimento ja esteja configurado com o [NodeJS](https://nodejs.org/en/) e [creat-react-app](https://www.npmjs.com/package/create-react-app) cli, abra seu terminal e execute:
```shell
npx create-react-app YOUR_PROJECT_NAME --template estartando-devs-react
```

Isso criará um projeto com as seguintes bibliotecas:

* [axios](https://github.com/axios/axios)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
* [styled-components](https://www.styled-components.com/)
* [plop](https://www.npmjs.com/package/plop)
* [yup](https://runkit.com/jquense/yup#)
* [formik](https://jaredpalmer.com/formik/docs/api/formik)
* [polished](https://polished.js.org/)
* [react-redux](https://redux.js.org/basics/usage-with-react/)
* [redux](https://redux.js.org/introduction/getting-started)
* [redux-thunk](https://www.npmjs.com/package/redux-thunk)



## Estrutura de pastas

Assim ficará o projeto criado  com esse template. (apenas a pasta `/src`)

```
/src
  /components
    index.js
  /config
    index.js
  /containers
    /Home
      Home.js
      index.js
    index.js
  /services
    api.js
  /shared
    /fonts
      index.js
    /img
      index.js
  /store
    /duks
      user.js
    index.js
  /styles
     Theme.js
     globalStyled.js
  App.js
  index.js
  routes.js
```
