# Description

UI for VSE-Guard-Backend.

- [Description](#description)
  - [Setup & Run in Development](#setup--run-in-development)
    - [Setup](#setup)
    - [Run mocked GraphQL & REST backend & Frontend](#run-mocked-graphql--rest-backend--frontend)
    - [Run mocked GraphQL only backend & Frontend](#run-mocked-graphql-only-backend--frontend)
    - [Run mocked REST only backend & Frontend](#run-mocked-rest-only-backend--frontend)
  - [How it works](#how-it-works)
    - [`"proxy": "http://localhost:5000"`](#proxy-httplocalhost5000)
    - [React with GraphQl](#react-with-graphql)
  - [Production](#production)
    - [`npm run build` for production deployment](#npm-run-build-for-production-deployment)
    - [To test production build locally](#to-test-production-build-locally)
  - [Backlog](#backlog)
    - [Example query](#example-query)
    - [Further todo's](#further-todos)

## Setup & Run in Development

### Setup

```bash
git clone <repo-url> \
    && pushd vse-guard-ui \
    && npm install \
    && pushd vse-guard-ui \
    && npm install \
    && popd \
    && popd
```

### Run mocked GraphQL & REST backend & Frontend

```bash
pushd mocked-backend/ && (npm run start&) && popd && npm start
```

### Run mocked GraphQL only backend & Frontend

```bash
pushd mocked-backend/ && (npm run gqlt&) && popd && npm start
```

### Run mocked REST only backend & Frontend

```bash
pushd mocked-backend/ && (npm run rest&) && popd && npm start
```

## How it works

### `"proxy": "http://localhost:5000"`

<https://create-react-app.dev/docs/proxying-api-requests-in-development/>

> In `package.json`

```json
"proxy": "http://localhost:5000",
```

This way, when you ```fetch('/api/todos')``` in development, the development server will recognize that it’s not a static asset, and will proxy your request to ```http://localhost:4000/api/todos``` as a fallback. The development server will only attempt to send requests without text/html in its Accept header to the proxy.

### React with GraphQl

> Tutorials
<https://www.freecodecamp.org/news/react-apollo-client-2020-tutorial/>
<https://www.smashingmagazine.com/2020/07/client-side-graphql-apollo-client-react-apps/>
> Free GraphQL APIs
<http://apis.guru/graphql-apis/>
> Dependencies

```bash
npm i @apollo/react-hooks apollo-boost graphql
```

## Production

### `npm run build` for production deployment

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### To test production build locally

```bash
npm run build-local
npm install -g serve
serve -s build
# open in browser at: http://localhost:5000
```

## Backlog

- health: orange -> state: green | red
  - icons
- spring: |||||||, mouse over for details, rerun single
- checks: |||||||, mouse over, rerun single
- knopf: spring, checks -> run all checks + progress bar

### Example query

{
  apps {
    desc
    environments {
      env
      health {state}
      checks {state}
      springs {state}
    }
  }
}

### Further todo's

1) Implement a dark bar above the appbar just like in many of the examples?
1) Add avatar, icons to cards
1) Better theming (colors, font sizing)
1) Animate switch page transitions
1) Animate overlay fade in/out
