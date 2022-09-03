# DiagnosticsLab

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## DiagnosticsLab Web Apps

Table of contents

- Introduction
- Technologies
- Unit test case & lint
- Code Coverage
- Steps to run the application in local
- Resiliencies

## Introduction

> Registration : Admin should have access to add 'N' no of users in the portal and should be able to add 'N' no of address to the particular user with default address, The default address can't be deleted (pincode === 123456).
> User Details : Admin should have access to view all the users in the user details tab with default address, should have access to delete the user.

## Technologies

- Angular 14.1.0
- Nrwl Nx Architecture 14.15.10 - Microsite / Monorepo pattern
- Ngrx - 14.3.0 - for Application State Management
- Additional packages - uuid to generate unique id for user and address

## Unit test case & lint

> Unit test case : Testing small and isolated pieces of code, which helps you to add new features without breaking an existing functionality.

- nx run-many --target=test

> Lint : It checks the code quality

- nx run-many --target=lint

## Code Coverage

It helps which parts of your code are executed by running the unit and integration tests. Steps to run and generate the coverage report

- nx run-many --target=test --codeCoverage

coverage folder will be generated in project directory, In our case we have two index files were created one for apps and other one for libs

- diagnostics-lab/coverage/apps/identity/index.html
- diagnostics-lab/coverage/libs/identity-auth/index.html

I have achieved code coverage 90% - 97% for diagnostics-lab.

## Steps to run the application in local

Require node version to run the application in your local - v16.14.0

- build : nx build
- serve : nx serve
- app will serve in http://localhost:4200

## Resiliencies

- Username field accepts only alphabetical characters, max length 20 and required field.
- Email field accepts only valid email, max length 30.
- City field accepts only alphabetical characters, max length 20 and required field.
- State field acceptsonly alphabetical characters, max length 20 and required field.
- Pincode field accepts only numbers, max length 6 and required field.
- Resiliency message for add user and add address.
- Resiliency message for adding address before user registration.
- Resiliency message for default addresses can not be deleted.
- Resiliency message, if no address is found.
- Resiliency message for deleting address.

## Demo

[Demo](https://kmaruchsamy.github.io/diagnostics-lab/user)

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@diagnostics-lab/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
